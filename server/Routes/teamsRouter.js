const express = require('express')
const teamsRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

// Create an array of items
// In the future this will be a database
// Create a unique _id for each item using uuidv4
let teams = [
    {"city": "New York", "name": "Yankees", "_id": uuidv4()},
    {"city": "New York", "name": "Mets", "_id": uuidv4()},
    {"city": "Chicago", "name": "Bears", "_id": uuidv4()},
    {"city": "Arizona", "name": "Cardinals", "_id": uuidv4()},
]

// Create the router
teamsRouter

    // Get All teams
    // Endpoint: GET - http://localhost:9000/teams
    .get('/',(req, res) => {
        console.log("GETTING ALL ...")
        
        // Send back the teams array
        res.send(teams)
    })

    // Get ONE team based in the teamId sent in the URL
    // Endpoint: GET - http://localhost:9000/teams/:teamId
    .get('/:teamId', (req, res) => {
        console.log("GETTING ONE...")
        
        // Grab the teamId from the URL
        const teamId = req.params.teamId
        
        // Using teams array, pull one team at a time and put into team variable
        // Compare item._id is from the array => teamId was sent in the URL
        // The first one that matches goes in singularItem variable
        const singularItem = teams.find(team => team._id === teamId)
        
        // Send back the one found item from the array
        res.send(singularItem)
    })

    // Get teams that match a search term
    // Endpoint: SEARCH - http://localhost:9000/teams/search
    // SEARCH is not a supported HTTP Verb in Express
    .search('/search', (req, res) => {
        console.log("SEARCING FOR ITEMS ...")
        
                
        // Grab the new team JSON content from the SEARCH body
        const itemName = req.body
        
        const filteredItems = items.filter(item => item.name === itemName)
        // Send back all the matched teams from the array
        res.send(filteredItems)
    })
    
    // Add team to the teams array
    // Endpoint: POST - http://localhost:9000/teams
    .post('/', (req, res) => {
        console.log("CREATING A NEW ITEM ...")
        
        // Grab the new team JSON content from the POST body
        const newTeam = req.body
        
        // Add a new field called _id and set it to a unique value
        newTeam._id = uuidv4()
        
        // Add the new team to the teams array
        teams.push(newTeam)
        
        // Send back the new team
        res.send(newTeam)
    })

    // Update an item in the item array based on _id
    // Endpoint: PUT - http://localhost:9000/teams/:teamId
    .put('/:teamId', (req, res) => {
        console.log("UPDATING AN ITEM ...")
        
        // Grab the teamId from the URL
        const teamId = req.params.teamId
        
        // Find the array index of the team with the matching _id
        const itemIndex = teams.findIndex(item => item._id === teamId)
        
        // Push the udpated team into teams array where the _id matchs
        Object.assign(teams[itemIndex], req.body)
        
        // Send back the updated item
        res.send(teams[itemIndex])
    })

    // Delete an item in the item array based on _id
    // Endpoint: DELETE - http://localhost:9000/teams/:teamId
    .delete('/:teamId', (req, res) => {
        console.log("DELETING AN ITEM ...")
        
        // Grab the teamId from the URL
        const teamId = req.params.teamId

        // Find the array index of the team with the matching _id
        const itemIndex = teams.findIndex(item => item._id === teamId)
        // Delete the team from the teams array
        teams.splice(itemIndex, 1)

        // Send back the success message
        res.status(200).send()
    })
// Export the router so can be used in the server.js file
module.exports = teamsRouter