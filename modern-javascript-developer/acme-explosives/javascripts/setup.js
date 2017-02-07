let loadedCategories;
let loadedTypes;
let loadedProducts;

getCategories().then(
		function (resolve) {
			loadedCategories = resolve;

			var y = document.getElementById("category-dropdown");
            for (var x in loadedCategories) {
                y.innerHTML += `<option id="${loadedCategories[x].name}">${loadedCategories[x].name}</option>`
            }

            var heythere = document.getElementById("category-dropdown");
            heythere.addEventListener("change", function (anumber) {
            	for (var x in loadedCategories) {
            		if (this.value == loadedCategories[x].name) {
            			var categoryNumber = loadedCategories[x].id;
            			printType(categoryNumber);
            		} 
            	}
			});
});


getTypes().then(
		function (resolve) {
		loadedTypes = resolve;
});

getProducts().then(
	function (resolve) {
		loadedProducts = resolve;
});

function printType (categoryNumber) {
	// console.log("Category ID is " + categoryNumber);

	var hmm = document.getElementById("products");
	hmm.innerHTML = "";

	var y = document.getElementById("type-dropdown");
	y.innerHTML = "";
	for (var i in loadedTypes) {
		if (loadedTypes[i].category == categoryNumber)
			y.innerHTML += `<option id="${loadedTypes[i].id}">${loadedTypes[i].name}</option>`
	}

	var p = document.getElementById("type-dropdown");
	p.addEventListener("change", function (anIdForProducts) {
		for (var y in loadedTypes) {
			if (this.value == loadedTypes[y].name) {
				// console.log(loadedTypes[y].name + " " + loadedTypes[y].id);
				var typeId = loadedTypes[y].id;
				printProducts(typeId);
			}
		}
	});
}

function printProducts (eachProduct) {
	//console.log("I have a Type ID:  " + eachProduct);
	
	var y = document.getElementById("products");
	y.innerHTML = "";
	for (var i in loadedProducts) {
		let aProduct = loadedProducts[i];
		for (var prop in aProduct) {
			if (eachProduct == aProduct[prop].type) {
				//console.log(theFinalProduct);

				y.innerHTML += `<div class="col-md-3 usercolumns clearfix bg-info text-white" id="${aProduct[prop].name}">
								<b>Product:</b> ${aProduct[prop].name} <br>
								<b>Description:</b> ${aProduct[prop].description}</div>`
			}
		}
	}
}







