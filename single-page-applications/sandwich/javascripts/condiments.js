var SandwichMaker = (function(originalsandwich) {

	var condimentPrices = {
		ketchup: 0.25,
		mustard: 0.30,
		relish: 0.50
	};

	originalsandwich.addCondiments = function(condiments) {
		return condimentPrices[condiments];
	}

	return originalsandwich;
})(SandwichMaker);