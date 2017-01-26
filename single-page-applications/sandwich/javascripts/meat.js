// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(originalSandwich) {

  // Private variable to store the different meat prices
  var meatPrices = {
  	roastbeef: 1.20,
  	ham: 0.75,
  	cat: 2.00,
  	meat: 2.50,
    nomeat: 0
  };

  // Augment the original object with another method
  originalSandwich.addMeat = function(meat) {
    return meatPrices[meat];
  };

  // Return the new, augmented object with the new method on it
  return originalSandwich;

})(SandwichMaker);