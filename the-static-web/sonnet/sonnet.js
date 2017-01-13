
var theSonnet = document.getElementById("sonnet"); // grab the div containing the sonnet
var theSonnet = theSonnet.innerHTML; // assign the div's contents (the sonnet) to a variable

// indexOf gives us the position of "orphans" in the sonnet
var orphansIndex = theSonnet.indexOf("orphans");
console.log("The index position of 'orphans' starts at " + orphansIndex);

// .length on the variable theSonnet gives us the length of the entire string
console.log("The length of the entire sonnet is: " + theSonnet.length + " characters.");

// replace the first instance of 'winter' with 'yuletide'
theSonnet.replace("winter", "yuletide");
// replace all instances of 'the' with 'a large'.
theSonnet.replace(/the/gi, "a large");

var newSonnet = document.getElementById("sonnet");
newSonnet.innerHTML = theSonnet;

/*
Take the contents of the sonnet div and place it in a variable
Find and output the starting position of the word "orphans"
Output the number of characters in the sonnet

Replace the first occurance of the string "winter" with "yuletide"
Replace all occurances of the string "the" with "a large"
Set the content of the sonnet div with the new string
 */

//var whereIsOrphans = theSonnet.indexOf("orphans"); // gets the index (number) position of "orphans"
//console.log("the starting position of orphans is character: " + whereIsOrphans);

//theSonnet.slice(0, whereIsOrphans) + 
