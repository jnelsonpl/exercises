var SandwichMaker = (function(originalSandwich) {

	// Set our bread prices key:value pairs
	var breadPrices = {
		french: 2.00,
		wheat: 3.00,
		italian: 4.00,
		polish: 1.00
	};

	// Adding the 'addBread' method to the sandwich
	originalSandwich.addBread = function(bread) {
		return breadPrices[bread];
	}
	
	// Return the new, augmented object with the new method on it
	return originalSandwich;

})(SandwichMaker);