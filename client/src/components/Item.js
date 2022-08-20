import { useState } from "react"
import ItemFormHandler from "./ItemFormHandler"

// Create the item object to be used on the page
const Item = ({editItem, deleteItem, name, city,  _id}) => {

    const [editToggle, setEditToggle] = useState(false)

    // Used to display the item and its details in a list
    return(
        <div className="item">
            { !editToggle ?
                <>
                    {/* Display template for an item */}
                    <p class="medium">{name}</p> 
                    <p class="wide">{city} </p> 
                    <p class="narrow">
                    <button className="delete-btn" onClick={() => deleteItem(_id)}>Delete</button>
                    <button className="edit-btn" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
                    </p> 
                </>
                :
                <>
                    {/* Form used for updating an item */}
                    <ItemFormHandler 
                    name={name}
                    city={city}
                    _id={_id}
                    btnText='Submit'
                    submit={editItem}/>
                    <button className="submit-btn" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
                </>
            }   
        </div>
    )
}

export default Item;