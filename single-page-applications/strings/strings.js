
// how to clear after written to dom?

var submitButton = document.getElementById("functionbutton"); // grab the content in the input
var results = document.getElementById("displayfunctions"); // variable to display the results

submitButton.addEventListener("click", checkEmpty);
function checkEmpty() {
	var a = document.getElementById("userinput").value;
	if (a == "") {
		alert("Enter Text");
	}
}

document.getElementById("userinput").onkeypress = function(e) {
	if (e.keyCode === 13) {
		e.preventDefault();
		submitButton.click();
	}
}

submitButton.addEventListener("click", checkChar);
function checkChar() {
	var checkCharacters = document.getElementById("userinput").value;
	if (checkCharacters.match(/\d+/g)) {
		alert("No Numbers");
		location.reload();
	}
}

submitButton.addEventListener("click", reversal);
function reversal(reverseMe) {
	reverseMe = document.getElementById("userinput").value;
	reverseMe = reverseMe.split("").reverse().join("");

	results.innerHTML += "Reverse String: " + reverseMe + "<br />";

	return reverseMe;
};

submitButton.addEventListener("click", alphabits);
function alphabits(sortMe) {
	var sortMe = document.getElementById("userinput").value;
	sortMe = sortMe.split("").sort().join("");

	results.innerHTML += "Sorted String: " + sortMe + "<br />";

	return sortMe;
}

submitButton.addEventListener("click", palindrome);
function palindrome(isTheSame) {
	var isTheSame = document.getElementById("userinput").value;
	var origString = isTheSame;
	isTheSame = isTheSame.split("").reverse().join("");

	if (isTheSame === origString) {
		results.innerHTML += origString + " is a palindrome." + "<br />";
	}
	return isTheSame;
}

/* 
var testString = "";
reversal(testString);
alphabits(testString);
palindrome(testString); */



