"use strict";

let getTypes = function () {

    var typesarray = [];

    return new Promise ((resolve, reject) => {
        // create first JSON file load
        let loader = new XMLHttpRequest();

        // Listen for when the load event is broadcast
        // and execute an anonymous callback
        loader.addEventListener("load", function () {
            // console.log("Loading Types JSON");
            var data = JSON.parse(this.responseText);

            var parseData = data.types.forEach(
                function (element) {
                    typesarray.push(element);
            })
            resolve(typesarray);
        });

        loader.open("GET", "json/types.json");
        loader.send();

    });
}




