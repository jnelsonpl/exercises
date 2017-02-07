"use strict";

let getCategories = function () {

	var catarray = [];

	return new Promise ((resolve, reject) => {
		// create first JSON file load
		let loader = new XMLHttpRequest();

    	// Listen for when the load event is broadcast
    	// and execute an anonymous callback
    	loader.addEventListener("load", function () {
    		//console.log("Loading Categories JSON");
    		var data = JSON.parse(this.responseText);

            var parseData = data.categories.forEach(
                function (element) {
                    catarray.push(element);
            })
    		resolve(catarray);
    	});

    	loader.open("GET", "json/categories.json");
    	loader.send();

	});
}
