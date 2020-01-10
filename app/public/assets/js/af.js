// Friends Data
// =============================================================
// import allFriendsArray from './app/data/friendsData.js'
// let array1 = require("../../data/friendsData.js");
// let array2 = require("../../data/friendsData.js");

let array1 = allFriendsArray;
let array2 = allFriendsArray;

console.log("cool")

// Function ------------------------------------------------------------
// score the differences between two surveys
function score(array1, array2) {
  diff = 0;
  for (k = 0; k < array1.length; k++) {
    
    diff = diff + Math.abs(array1[k] - array2[k]);
  }
  return diff;
}




// process all entries in array1 matching to array 2
  for (i = 0; i < array1.length; i++) {
    var leastDiffUser = 40;
    var lastDifference = 40;
    var difference = 0;

    console.log(
      array1 + array2 + "-------------------- entering for loop  " + array1[i]
    );

    for (j = 0; j < array1.length; j++) {
      console.log(i + "  " + j);
      if (i != j) {
        difference = score(array1[i].scores, array2[j].scores);   
        console.log("difference =" + array1[i] + "     " + array2[j]);
        if (difference < lastDifference) {
            console.log("Replace LEAST difference = " + j);
            lastDifference = difference;
            leastDiffUser = j;
        }
      }
    }
    tableRow = "<tr> <td>" + array1[i].name + "</td><td>"  + allFriendsArray[leastDiffUser].name + "</td></tr>";
    
    // append to list of friends on the display table
       $('#allList-table').append(tableRow);
  }
       
