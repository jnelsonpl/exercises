function toCelsius (inputFahrenheit) {
	var tempCelsius = (inputFahrenheit - 32) * 5;
	tempCelsius = tempCelsius / 9;
	console.log(tempCelsius);
}

function toFahrenheit (inputCelsius) {
	var tempFahrenheit = (inputCelsius * 9) / 5;
	tempFahrenheit = tempFahrenheit + 32;
	console.log(tempFahrenheit);
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
	if (document.getElementById("fahrenheit").checked === true) {
		toFahrenheit();
	} else if (document.getElementById("celsius").checked === true) {
		toCelsius();
	}

  console.log("event", clickEvent);
}

// Add an event handler to the input field that checks if the user pressed the enter key, 
// and if that happens, perform the conversion.

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);