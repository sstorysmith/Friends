
// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path")
// var express = require("express");
// var app = express();

module.exports = function(app) {

// Routes
// =============================================================
// Basic route that sends the user to the survey page
console.log("htmlRoutes");

// Route sends the survey to the user.
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

app.get("/allFriends", function(req, res) {
  console.log('inside api Routes ALLfriends');   
  // calculate and display all friends matches  
  console.log(req.body);
  res.sendFile(path.join(__dirname, "../public/allFriends.html"));
});

// everything else route here to home page

app.get("*", function(req, res) {
console.log("request or catchall =" + req);
console.log(path.join(__dirname, "../public/home.html"));
  res.sendFile(path.join(__dirname, "../public/home.html"));
  });

}

        

   