
function toCelsius () {
	var inputTemperature = parseFloat(document.getElementById("temperature").value);
	var tempCelsius = ( (inputTemperature - 32) * 5) / 9;
	console.log(tempCelsius);
}

function toFahrenheit () {
	var inputTemperature = parseFloat(document.getElementById("temperature").value);
	var tempFahrenheit = ( (inputTemperature * 9) / 5) + 32;
	console.log(tempFahrenheit);
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function determines which radio button is selected and runs toFahrenheit or toCelsius
function determineConverter () {
	if (document.getElementById("fahrenheit").checked === true) {
		toFahrenheit();
	} else if (document.getElementById("celsius").checked === true) {
		toCelsius();
	} else {
		alert("Select Fahrenheit or Celsius to convert temperature");
	}
}

// Add an event handler to the input field that checks if the user pressed the enter key, 
// and if that happens, perform the conversion.

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);


