var Predator = (function () {

  var carnivores = [];
  var herbivores = [];

  return {
    loadCarnivores: function (givemeanything) {
      var carnLoader = new XMLHttpRequest();

      carnLoader.addEventListener("load", function () {
        // Set the value of the array
        carnivores = JSON.parse(this.responseText);
        console.log("JSON Successfully Loaded");

        // send me back!
        givemeanything(carnivores);

      });

    carnLoader.open("GET", "carnivores.json");
    carnLoader.send();
    },

    loadHerbivores: function (itakewhaticanget) {
      var loadHerber = new XMLHttpRequest();

      loadHerber.addEventListener("load", function () {
        herbivores = JSON.parse(this.responseText);
        console.log("JSON Successfully Loaded");

        itakewhaticanget(herbivores);

      });
      loadHerber.open("GET", "herbivores.json");
      loadHerber.send();
    }

  };

})(Predator || {});