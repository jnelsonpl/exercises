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
meatChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.id; // .id works for some stuff but what is sandwichmaker.js doing?

  // Determine the price of the topping chosen
  var x = SandwichMaker.addMeat(selectedTopping);
  console.log(x);

  // Add the topping to the SandwichMaker to increase the total price
  finalSandwichPrice += x;

});

// Bread
breadChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.id;
  var y = SandwichMaker.addBread(selectedTopping);
  console.log(y);
  finalSandwichPrice += y;
});

// Cheese
cheeseChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.id;
  var z = SandwichMaker.addCheese(selectedTopping);
  console.log(z);
  finalSandwichPrice += z;
});


// Condiments
condimentChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.id;
  var a = SandwichMaker.addCondiments(selectedTopping);
  console.log(a);
  finalSandwichPrice += a;
});

// Veggies
veggieChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.id;
  var b = SandwichMaker.addVeggies(selectedTopping);
  console.log(b);
  finalSandwichPrice += b;
});

