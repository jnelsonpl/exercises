"use strict";

let getProducts = function () {

    var productsarray = [];

    return new Promise ((resolve, reject) => {
        // create first JSON file load
        let loader = new XMLHttpRequest();

        // Listen for when the load event is broadcast
        // and execute an anonymous callback
        loader.addEventListener("load", function () {
            //console.log("Loading Products JSON");
            var data = JSON.parse(this.responseText);

            var parseData = data.products.forEach(
                function (element) {
                    productsarray.push(element);
            });
            resolve(productsarray);
        });

        loader.open("GET", "json/products.json");
        loader.send();

    });
};