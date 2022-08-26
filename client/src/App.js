import { useState, useEffect } from 'react'
import axios from 'axios'

// Pulls content to make the page layout and components
import Item from './components/Item'
import ItemFormHandler from './components/ItemFormHandler'
import SearchFormHandler from './components/SearchFormHandler'

// Images for the use on the page
import logo from './images/logo192.png'

// Pulls all the styling from the App.css file
import './App.css';

// Used to reload all the teams based on the onclick
// functionality in the button at the bottom of the page
function refreshPage(){ 
  console.log("refreshing...")
  window.location.reload(false)
}

function App() {

  const [items, setItems] = useState([])

  // Retrieve (GET) items from the Express app
  const getItems = () => {
    // Endpoint: GET - http://localhost:9000/teams
    axios.get('/teams')
    //Causes-ReRender
    .then(res => setItems(res.data))
    .catch(err => console.log(err))
  }

  // Add (POST) items to the Express app
  const addItem = (newItem) => {
    // Endpoint: POST - http://localhost:9000/teams
    axios.post('/teams', newItem)
    .then(res => {
      //Causes-ReRender
      setItems(prevItem => [...prevItem, res.data]) 
    })
    .catch(err => console.log(err))
  }

  // Update (PUT) items in the Express app
  const editItem = (updates, itemId) => {
    // Endpoint: PUT - http://localhost:9000/teams/:id
    axios.put(`/teams/${itemId}`, updates)
    .then(res => {  
      //Causes-ReRender
      setItems(prevItem => prevItem.map(item => item._id !== itemId ? item : res.data))
    })
    .catch(err => console.log(err))
  }

  // Delete (DELETE) items in the Express app
  const deleteItem = (itemId) => {
    // Endpoint: DELETE - http://localhost:9000/teams/:id
    axios.delete(`/teams/${itemId}`)
    .then(res => {
      //Causes-ReRender
      setItems(prevItem => prevItem.filter(item => item._id !== itemId))
    })
    .catch(err => console.log(err))
  }

    // Search (GET) items in the Express app
    const searchItem = (searchTerm) => {
      // Grab the text for the name search
      var searchStringe = searchTerm.name
      // Endpoint: GET - http://localhost:9000/teams/search/:id
      axios.get(`/teams/search/${searchStringe}`)
      // Reload the team list with the returned data
      .then(res => setItems(res.data))
      .catch(err => console.log(err))
    }

  // Wait until the DOM loads then run the getItems function
  useEffect(() => { getItems() }, [])

  // Render the items to the DOM
  // Passing references to deleteItem, editItem, and Item element names to the Item component
  const itemList = items.map(item => 
    <Item
    {...item}
    deleteItem={deleteItem}
    editItem={editItem}
    key={item.name}
    /> 
  )

  // This creates the page layout
  return (
    <div className="itemContainer">
      <h1>Team React Application</h1>
      <div>
          {/* Creates the form found in component/ItemFormHandler.js */}
          {/* When submitted it calls the addItem function above */}
          <SearchFormHandler btnText='Search' submit={searchItem}/>
          {/* Creates the form found in component/ItemFormHandler.js */}
          {/* When submitted it calls the addItem function above */}
          <ItemFormHandler btnText='Add a Team' submit={addItem}/>
      </div>
      {/* Calls the itemList fucntion above */}
      {/* The list is items as defined in component/Item.js */}
      {itemList}
      <div className="searchBox">
        <button className="add-item" onClick={ refreshPage }>Reload All Teams</button>
      </div>
      <img src={logo} alt="logo" />
      <p className="finePrint">Prepared for Bryan University - &copy; 2022 for FSW-125</p>
    </div>
  );
}

// Need to export back to the index.js file
export default App;
