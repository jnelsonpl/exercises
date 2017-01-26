var SandwichMaker = (function(originalsandwich) {
	
	var veggiePrices = {
		lettuce: 0.25,
		tomato: 0.28,
		cucumber: 0.10,
		greens: 0.90
	};

	originalsandwich.addVeggies = function(veggies) {
		return veggiePrices[veggies];
	}

	return originalsandwich;

})(SandwichMaker);