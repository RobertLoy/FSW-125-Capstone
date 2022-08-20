const express = require('express')
const itemRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

// Create an array of items
// In the future this will be a database
let items = [
    {
        name: 'Water Bottle', 
        descr: 'Bottle, Water Type',
        recyclable: true,
        quantity: 3,
        unitPrice: 2,
        // Create a unique _id for each item
        _id: uuidv4()
    },
    {
        name: 'Paper', 
        descr: 'Paper to be printed on',
        recyclable: true,
        quantity: 10,
        unitPrice: .99,
        // Create a unique _id for each item
        _id: uuidv4()
    },
    {
        name: 'Sock', 
        descr: 'Fabric footwear',
        recyclable: false,
        quantity: 15,
        unitPrice: 4,
        // Create a unique _id for each item
        _id: uuidv4()
    },
    {
        name: 'Pizza Box', 
        descr: 'Box of pizza',
        recyclable: false,
        quantity: 7,
        unitPrice: 4,
        // Create a unique _id for each item        
        _id: uuidv4()
    }
]

// Create the router
itemRouter

    // Get All items
    // Endpoint: GET - http://localhost:9000/teams
    .get('/',(req, res) => {
        console.log("GETTING ALL ...")
        // Send back the items array
        res.send(items)
    })

    // Get ONE Item
    // Endpoint: GET - http://localhost:9000/teams/:itemId
    .get('/:itemId', (req, res) => {
        console.log("GETTING ONE ...")
        const itemId = req.params.itemId
        const singularItem = items.find(item => item._id === itemId)
        // Send back the one found item from the array
        res.send(singularItem)
    })

    // Get items that match a search term
    // Endpoint: SEARCH - http://localhost:9000/teams/search
    // SEARCH is not a supported HTTP Verb in Express
    .search('/search', (req, res) => {
        console.log("SEARCING FOR ITEMS ...")
        const itemName = req.query.name
        const filteredItems = items.filter(item => item.name === itemName)
        // Send back all the matched items from the array
        res.send(filteredItems)
    })

    // Add item to the item array
    // Endpoint: POST - http://localhost:9000/teams
    .post('/', (req, res) => {
        console.log("CREATING A NEW ITEM ...")
        const newItem = req.body
        newItem._id = uuidv4()
        items.push(newItem)
        res.status(200).send()
    })

    // Update an item in the item array based on _id
    // Endpoint: PUT - http://localhost:9000/teams/:itemId
    .put('/:itemId', (req, res) => {
        console.log("UPDATING AN ITEM ...")
        const itemId = req.params.itemId
        const itemIndex = items.findIndex(item => item._id === itemId)
        Object.assign(items[itemIndex], req.body)
        res.status(200).send()
    })

    // Delete an item in the item array based on _id
    // Endpoint: DELETE - http://localhost:9000/teams/:itemId
    .delete('/:itemId', (req, res) => {
        console.log("DELETING AN ITEM ...")
        const itemId = req.params.itemId
        const itemIndex = items.findIndex(item => item._id === itemId)
        items.splice(itemIndex, 1)
        res.status(200).send()
    })

    

module.exports = itemRouter