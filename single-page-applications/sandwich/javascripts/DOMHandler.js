// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementById("meat");
var breadChooser = document.getElementById("bread");
var cheeseChooser = document.getElementById("cheese");
var condimentChooser = document.getElementById("condiments");
var veggieChooser = document.getElementById("veggies");

/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
var meatChooser = document.getElementById("meat");
meatChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value; // .id works for some stuff but what is sandwichmaker.js doing?

  // Determine the price of the topping chosen

  // Add the topping to the SandwichMaker to increase the total price

});
