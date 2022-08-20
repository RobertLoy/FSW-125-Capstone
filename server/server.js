const express = require('express')

// Pull in the router exported from teamsRouter.js
const teamItems = require('./Routes/teamsRouter')

// Create the express app
const app = express()
// Declare the port
const PORT = 9000

// Functions for middleware
let logMeToo = (req, res, next) => {
    let current_datetime = new Date();
    let formatted_date = 
        current_datetime.getFullYear() + "-" +
        (current_datetime.getMonth() + 1) + "-" +
        current_datetime.getDate() + " " +
        current_datetime.getHours() + ":" +
        current_datetime.getMinutes()
    let method = req.method;
    let url = req.url;
    let status = res.statusCode;
    let log = `[${formatted_date}] ${method}:${url} ${status}`;
    console.log(log)
    next()
  }

// Middleware : parse the body of the request
app.use(express.json())
// Middleware : called function declared above
app.use(logMeToo)

// Routes
app.use('/teams', teamItems)

// Server listener
app.listen(PORT, () => {
    console.log(`App Started on: ${PORT}`)
})