var loadedCategories;
var loadedTypes;
var loadedProducts;

getCategories().then(
	function (resolve) {
		loadedCategories = resolve;
//		printCategories(loadedCategories);
});

getTypes().then(
	function (resolve) {
		loadedTypes = resolve;
//		printToPage(loadedTypes);
});

getProducts().then(
	function (resolve) {
		loadedProducts = resolve;
		printProducts(loadedProducts);
});

function printCategories (loaded) {
	for (var i = 0; i < loaded.length; i++) {
		console.log(loaded[i].name + " " + loaded[i].id);
	}
}

function printProducts (eachProduct) {
	for (var productKeys in eachProduct) {
		let aProduct = eachProduct[productKeys];
				for (var productInfo in aProduct) {
					let productInfoComplete = aProduct[productInfo];
					//console.log(productInfoComplete.name + " : " + productInfoComplete.description);
				}
		}
	}














