
let testButton = document.getElementById('testbutton');


testButton.addEventListener('click', threeFunctions);

function threeFunctions () {
	var textAreaValue = document.getElementById('textareaval').value;
	checkWordCount(textAreaValue);
	duplicateCheck(textAreaValue);
	verifyAlphaNumeric (textAreaValue);
};

function checkWordCount (phrase) {

	// - w3schools
	// The split() method is used to split a string into an array of substrings,
	// and returns the new array.
	// - the parameter is what you want to seperate (so a blank space will seperate
	// the string at each white space)
	var phrase = phrase.split(" "); 
	
	if (phrase.length > 100) {
		console.log('string is greater than 100 characters. characters are: ', phrase.length);
		return false;
	} else {
		console.log('string is less than 100 characters. characters are: ', phrase.length);
		return true;
	}
};

function duplicateCheck (phrase) {

	var phrase = phrase.replace(/\./g, '');
	phrase = phrase.toLowerCase().split(' ').sort();
	
	var finalPhrase = [];

	// algorithm - http://js-algorithms.tutorialhorizon.com/2016/01/25/find-duplicates-in-an-array/

	phrase.forEach(function (element, index ) {
		// indexOf takes two argu­ments first the ele­ment and the sec­ond one is the start­ing index
		if (phrase.indexOf(element, index + 1) > -1) { 	/* indexOf returns -1 if not found
														   so if statement will only run when found */
			if (finalPhrase.indexOf(element) === -1 ) {
				finalPhrase.push(element);
			}
		}

	});
	console.log('number of words with duplicates: ', finalPhrase.length);
	return phrase.length;
};

function verifyAlphaNumeric (phrase) {
	var testCharacters = /^[a-z\d ]+$/i;
	var testString = testCharacters.test(phrase);
	
	if (testString === false) {
		console.log('you have non-alphanumeric characters');
		return false;
	} else {
		console.log('you have no non-alphanumeric characters');
		return true;
	}
};












