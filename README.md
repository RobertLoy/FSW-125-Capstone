# FSW-125-Capstone
This project is part of the FSW-125 Express and Back-end coding class at Bryan University. The capstone work during the last four weeks of the class leverage the skills learned in the React/front-end class taught concurrently with the ExpressJS class. The result is a simple demonstration of using front-end technology to talk to back-end APIs.

Students build a front-end React page that displays results from a GET-API within Express and allows the user to interact with the POST, PUT, and DELETE APIs. Search functionality also uses the GET-API endpoint with a URL parameter.

The client will run in port 3000, and the server will run on port 9000. The package.json file is updated on the client side to reflect the proxy to port 9000. Both pieces need to be running at the same time to have the application work. Note, when starting the services with nodemon and storing the data in the code, any saving of the files on the server will trigger the data to revert to whatever was in the code, and all modifications will be lost.

## My role
I am the instructor for the class. I bring almost two decades of experience in software development to the students and focus not only on the code and structure but also on the context and bigger picture needed when they interview for their first job. 

## Libraries and tools used
- React (frontend)
- ExpressJS (backend)
- Node
- Axios
- uuid
- Morgan
- Nodemon
- HTML
- CSS
- VS Code for coding
- Postman for testing API
- Chrome browser for testing frontend

## Folders/ Files
Everything is in the Master Branch

**Folder:Client (React files)**
- package.json
  - src>index.js
  - src>App.js
  - src>App.css
  - src>components>Item.js
  - src>components>ItemFormHandler.js
  - src>components>SearchFormHandler.js
  - src>images>logo192.png
  
**Folder: Server (Express files)**
  - server.js
  - Routers>teamsRouter.js

The client folder holds all the React files with the index.js being the entry point.  The index.js then calls in the App.js using the import on line 3. App.js then brings in all the other files needed to build the page including App.cs on line 13, the image on line 10, and the item and form handlers on lines 5-7. All the calls to the Express pieces are handled with the Axios pieces on lines 26-76, and the display of the page and items are done on 95-114.  Each item is loaded according to item.js from lines 84-91.

The server folder holds all the Express files withj server being the entry point. Server.js has the listener and the middleware to send the requests to the appropriate Router file, which in this case is teamRouter.js in the Router folder. The teamsRouter.js creates and JSON Array of teams and then performs the correct HTTP request verb below including GET, PUT, POST, and DELETE and fucntionality for the SEARCH which is done as a GET.

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
