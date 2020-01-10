// ===============================================================================
// LOAD DATA
// We are linking our routes to our data source. 
// This data source holds array of information on each survey participant.
// ===============================================================================
// Dependencies
// need to run npm install and init on these
// =============================================================
var express = require("express");


// Sets up the Express App
// =============================================================
var app = express();
// var PORT = 3000;
 // change to port to accomodate heroku --------

//const PORT = process.env.PORT || 3000;
//app.listen(PORT, () => {
//    console.log(`Our app is running on port ${ PORT }`);
//});

// ----------------------------------------------

app.use(express.static("app/public"));


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
// tell the server how to respond when a user visits or
// requests data.
// =============================================================

 var apiRoutes= require("./app/routing/apiRoutes.js")(app); 
 var htmlRoutes= require("./app/routing/htmlRoutes.js");
 htmlRoutes(app); 
 
// Server
// Starts the server to begin listening
// =============================================================

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
