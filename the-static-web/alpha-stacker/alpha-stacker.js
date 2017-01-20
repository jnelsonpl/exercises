
//var alphabet = [];
var letters = "abcdefghijklmnopqrstuvwxyz"
var alphabet = letters.split('');

// The stackLetter function should accept the array as the sole argument
function stackLetters (theAlphabetArray) {
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the letters.
     */

    for (var i = 0; i < letters.length; i++) {
		theAlphabetArray.push(letters.substr(0, (i)));
	}
	console.log(theAlphabetArray);
}

// Invoke the function and pass in the array
stackLetters(alphabet);