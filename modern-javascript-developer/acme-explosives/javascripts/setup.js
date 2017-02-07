var loadedCategories;
var loadedTypes;
var loadedProducts;
var whichone;

var typesDiv = document.getElementById("types");

getCategories().then(
		function (resolve) {
		loadedCategories = resolve;
		// we are literally just ignoring this it seems ???
});

getTypes().then(
		function (resolve) {
		loadedTypes = resolve;
});

getProducts().then(
	function (resolve) {
		loadedProducts = resolve;
});

let category_dropdown = document.getElementById("category-dropdown");
category_dropdown.addEventListener("change", function () {
	if (category_dropdown.value == 0) {
		whichone = 0;
	} else if (category_dropdown.value == 1) {
		whichone = 1;
	}
	printType(whichone);
});

// We should probably then list out for each type...
function printType (whichType) {
	if (whichone == 0) {
		for (var x in loadedTypes) {
			if (loadedTypes[x].category === 0) {
				//console.log(loadedTypes[x].name);

				var namesOfTypes = loadedTypes[x];
				var listOfTypes = "";

				listOfTypes += `<div id="${namesOfTypes.name}">

								${namesOfTypes.name}</div>
								`
				typesDiv.innerHTML += listOfTypes;
			}
		}
	} else if (whichone == 1) {
		for (var p in loadedTypes) {
			if (loadedTypes[p].category == 1) {
				//console.log(loadedTypes[p].name);

				var namesOfTypes = loadedTypes[p];
				var listOfTypes = "";

				listOfTypes += `<div id="${namesOfTypes.name}">
								${namesOfTypes.name}</div>
								`
				typesDiv.innerHTML += listOfTypes;
			}
		}
	}
}

/*
function printCategories (eachCategory) {
	console.log(whichone);
	for (var category in eachCategory) {
			console.log("ID: " + eachCategory[category].id + " Category: " + eachCategory[category].name);
	}
} 
*/


function printProducts (eachProduct) {
	for (var productKeys in eachProduct) {
		let aProduct = eachProduct[productKeys];
				for (var productInfo in aProduct) {
					let productInfoComplete = aProduct[productInfo];
					console.log(productInfoComplete.name + " : " + productInfoComplete.description);
				}
		}
}







