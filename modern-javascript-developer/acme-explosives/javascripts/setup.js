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
	// printProducts(loadedProducts);
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
				var firstType = loadedTypes[x].name;
				console.log(firstType);
				/* var namesOfTypes = loadedTypes[x];
				var listOfTypes = "";

				listOfTypes += `<div id="${namesOfTypes.name}">

								${namesOfTypes.name}</div>
								`
				typesDiv.innerHTML += listOfTypes; */
			}
		}
	} else if (whichone == 1) {
		for (var p in loadedTypes) {
			if (loadedTypes[p].category == 1) {
				var secondType = loadedTypes[p].name;
				console.log(secondType);
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

let productsDiv = document.querySelector("#products")
function printProducts (eachProduct) {
	for (var productKeys in eachProduct) {
		let aProduct = eachProduct[productKeys];
				for (var productInfo in aProduct) {
					let printToPage = "";
					let productInfoComplete = aProduct[productInfo];
					//console.log(productInfoComplete.name + " : " + productInfoComplete.description);

					printToPage += `<div>
									${productInfoComplete.name} <br>
									</div>`

					productsDiv.innerHTML += printToPage;
				}
		}
}







