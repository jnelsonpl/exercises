// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(originalsandwich) {

	// private variable to store cheese prices
	var cheesePrices = {
		blue: 4,
		swiss: 2,
		cheddar: 4,
		brie: 1
	};

	// create a method to add to the sandwich maker
	originalsandwich.addCheese = function(cheese) {
		return cheesePrices[cheese];
	}
	// return us to the function which makes SandwickMaker!
	return originalsandwich;

})(SandwichMaker);