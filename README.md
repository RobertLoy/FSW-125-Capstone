# FSW-125-Capstone

This project is part of the FSW-125 Express and Backend coding class at Bryan University.  The capstone work during the last four weeks of the class leverage the skills learned in the React/front-end class taught concurrently with the ExpressJS class. The result is a simple demonstration of using front-end technology to talk to back-end apis. 

Students build a front end React page which displays reuslts from a GET-API within express and allows the user to interact with the POST, PUT, and DELETE apis also.  There also is a search functionality that uses the GET-API endpoint with a URL parameter. 

The client will run in port 3000 and the server will run on port 9000.  The package.json file is updates on the client side to reflect the proxy to port 9000.  Both pieces need to be running at the same time to have the aplication work. Note, when starting the services with nodemon, and having thedata stored in the code, any saving of the files on the server will trigger the data to revert to what ever was in the code, and all modification will be lost.

## Libraries and tools used
- React
- ExpressJS
- Axios
- uuid
- Morgan
- HTML / CSS

## Implementation instructions
1. Install Node 
2. Run npm install nodemon
3. Clone the repository to your local computer
4. Go into the Client folder
5. Run npm install react-scripts
6. Run npm install axios
7. Run nodemon start
8. Switch to the Server folder
9. Run npm install express
10. Run npm install uuid
11. Run nodemon server.js

## Some enhancenent ideas
- Make the search in React piece use a POST-API instead of the GET-API
- Allow the seearch functionaly to look in city, name, and _id
- Connect a DB to the backend ExpressJS piece
- Open the edit in DOV over the page instead of one page
- Add more fields to the items beyond City and Name

## Screenshot of the working application

![alt=React and Express Application](https://github.com/RobertLoy/FSW-125-Capstone/blob/main/Screen%20Shot%202022-08-26%20at%2012.46.56%20PM.png)

For more information about Bryan University, visit [BryanUniversity.edu](https://bryanuniversity.edu/)
