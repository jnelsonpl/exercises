var tempFahrenheit;
var tempCelsius;
var x = document.getElementById("converted_temperature");

function toFahrenheit () {
	var inputTemperature = parseFloat(document.getElementById("temperature").value);
	tempFahrenheit = ( (inputTemperature * 9) / 5) + 32;
	tempFahrenheit = tempFahrenheit.toFixed(0);
	colorTemperature();
	x.innerHTML = "The temperature in fahrenheit is " + tempFahrenheit;
}

function toCelsius () {
	var inputTemperature = parseFloat(document.getElementById("temperature").value);
	tempCelsius = ( (inputTemperature - 32) * 5) / 9;
	tempCelsius = tempCelsius.toFixed(0);
	colorTemperature();
	x.innerHTML = "The temperature in celsius is " + tempCelsius;
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function determines which radio button is selected and runs toFahrenheit or toCelsius
function determineConverter() {
	if (document.getElementById("fahrenheit").checked === true) {
		toFahrenheit();
	} else if (document.getElementById("celsius").checked === true) {
		toCelsius();
	} else
		alert("Please Select 'Fahrenheit' or 'Celsius' to convert");
}

// temperature > 90F/32C make it red
// temperature < 32F/0C make it blue
// else it is green
function colorTemperature() {
	if (tempFahrenheit > 90 || tempCelsius > 32)
		x.style.color = "red";
	else if (tempFahrenheit < 32 || tempCelsius < 0)
		x.style.color = "blue";
	else
		x.style.color = "green";
}

// Add an event handler to the input field that checks if the user pressed the enter key, 
// and if that happens, perform the conversion.

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);


