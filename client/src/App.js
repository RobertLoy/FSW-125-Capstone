import { useState, useEffect } from 'react'
import axios from 'axios'

// Pulls content to make the page layout and components
import Item from './components/Item'
import ItemFormHandler from './components/ItemFormHandler'

// Images for the use on the page
import logo from './images/logo192.png'

// Pulls all the styling from the App.css file
import './App.css';

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
    // Endpoint: DELTE - http://localhost:9000/teams/:id
    axios.delete(`/teams/${itemId}`)
    .then(res => {
      //Causes-ReRender
      setItems(prevItem => prevItem.filter(item => item._id !== itemId))
    })
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
      <navbar>
        <hr />
          {/* Creates the form found in component/ItemFormHandler.js */}
          {/* When submitted it calls the addItem function above */}
          <ItemFormHandler btnText='Add a Team' submit={addItem}/>
        <hr />
      </navbar>
      {/* Calls the itemList fucntion above */}
      {/* The list is items as defined in component/Item.js */}
      {itemList}
      <hr />
      <img src={logo} alt="logo" />
    </div>
  );
}

// Need to export back to the index.js file
export default App;
