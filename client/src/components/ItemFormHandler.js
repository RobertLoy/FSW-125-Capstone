import { useState } from "react";

// These values come from the item.js => ItemFormHandler component
const ItemFormHandler = ({name, city, _id, btnText, submit}) => {
    const initialInputs = {name: name || '', city: city || ''}
    const [inputs, setInputs] = useState(initialInputs)

    // Handles input as the user types
    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    // Handles form submission
    const handleSubmit = (e) => {
        e.preventDefault()
        submit(inputs, _id);
        setInputs(initialInputs)
    }

    return(
        // Form used for updating an item 
        // When button clicked, calls handleSubmit function above
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            name='name'
            // Populate the form with the item's name
            value={inputs.name}
            // As you type the value changes
            onChange={handleChange}
            placeholder='Team Name...'/>
            &nbsp;&nbsp;
            <input
            type='text'
            name="city"
            // Populate the form with the item's city
            value={inputs.city}
            // As you type the value changes
            onChange={handleChange}
            placeholder="City..."/>
            &nbsp;&nbsp;
            <button className="add-item">{btnText}</button>
        </form>
    )
}

export default ItemFormHandler;