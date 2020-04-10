Friends
Sharon Story Smith storysmithaharon@gmail.com
2019-01-20
Bootstrap, NodeJS, ExpressJS, jQuery

Screen Shots:
    <img width=“1097” alt=“trainPrintScreen.jpg” src=“PrintScreen.jpg”>
    ![screenshot of train](.\FriendF1ScreenShot.png)

    <img width=“1097” alt=“trainPrintScreen.jpg” src=“PrintScreen.jpg”>
    ![screenshot of train](.\FriendF2ScreenShot.png)

    <img width=“1097” alt=“trainPrintScreen.jpg” src=“PrintScreen.jpg”>
    ![screenshot of train](.\FriendF3ScreenShot.png)

Working Demo:
    https://blooming-dawn-72157.herokuapp.com/

Developer: 
    -After downloading from GitHub,
    -Run "$npm install" on the git bash command line.
    -Enter "$node server.js" on the git bash command line.
    -open a browser and enter http://localhost:3000
    
Overview:
    * An app to find people who are compatible in their interpersonal relationships.
    * A survey form is displayed to the new participant to fill out. Then, the app finds a
      compatible friend and displays the matching participant is displayed.
    * There is an option to look at the JSON array data.
    * There is an option to display a compatible participant for each person in the JSON
      array.


App Design:
    _ The survey data is checked against the data stored in the JSON array. A score is
      calculated based on the absolute difference between the two answers.  
    _ There is an option to look at the JSON array data - a simple display to the screen. 
    _ There is an option to display a compatible participant for each person in the JSON
      array. This is written to perform well by processing through the JSON array only once.


