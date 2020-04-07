 friends
    Sharon Story Smith   storysmithcharon@gmail.com
    2019-01-20
    NodeJS, ExpressJS, jQuery


Working Demo:
      https://sstorysmith.github.io/Friends/

After downloading form GitHub, 
    * gotto the bash line
    * $node server.js
    * start browser on port 3000


    Overview
        * An app to find people who are compatible in their interests.
        * A survey form is displayed to the new participant to fill out. Then, the app finds a 
          compatible friend and displays the matching participant is displayed. 
        * There is an option to look at the JSON array data.
        * There is an option to display a compatible participant for each person in the JSON
          array.  
            
App Design:
        * The survey data is checked against the data stored in the JSON array. A score is
          calculated based on the absolute difference between the two answers.  
        * There is an option to look at the JSON array data - a simple display to the screen.
        * There is an option to display a compatible participant for each person in the JSON
          array. This is written to perform well by processing through the JSON array only once.     

Directory Structure:
friends\app
|
|__ index.html
|
├── screenShot.png

    |public
    │
    ├── assets
    │       ├── css
    │       │   └── style.css
    |       |   |__ reset.css
    |       |
    │       └── images
    │       |   |__ boy...
    |       |
    |       |__ js
                └── af.js
                └── determineCompatibles.js
                └── friendsData.js
    |routing


Notes:
