// Dependencies
// =============================================================
module.exports = determine;

// Friends Data
// =============================================================
// import allFriendsArray from './app/data/friendsData.js'
let AllFriendsArray = require("../../../data/friendsData.js");

// Function ------------------------------------------------------------
// score the differences between two surveys
function score(array1, array2) {
  diff = 0;
  for (k = 0; k < array1.length; k++) {
    
    diff = diff + Math.abs(array1[k] - array2[k]);
  }
  return diff;
}


function determine(array1, array2) {
  //function determine (answerUser1, answerUser2) {
  console.log(" in DETERMINE = " + array1 + " array2 :" + array2);

  var leastDiffUser = 40;
  var lastDifference = 40;
  var difference = 0;

  console.log(
    "-------------------- entering for loop  " + array1 + "   " + array2.length
  );

  for (let j = 0; j < array2.length - 1; j++) {
   
    if (array1 != array2[j].scores) {
      difference = score(array1, array2[j].scores);

      console.log("difference =" + array1 + "  -   " + array2[j].scores);
      if (difference < lastDifference) {
        console.log("Replace LEAST difference = " + j);
        lastDifference = difference;
        leastDiffUser = j;
      }
    }
  }

  console.log("least diff user", leastDiffUser);
  return AllFriendsArray[leastDiffUser];
}
//-------------------------------------------------------------------------------
// determine match for current new survey: AllFriendsArray.length - 1
//console.log("AllFriendsArray=  ", AllFriendsArray);
let curParticipant = AllFriendsArray[AllFriendsArray.length - 1];
//console.log(" in determineCampatibles cur part score" + curParticipant.scores);
let match = determine(curParticipant.scores, AllFriendsArray);
 console.log(" match = ", match.name, " to user :" + curParticipant.name);

