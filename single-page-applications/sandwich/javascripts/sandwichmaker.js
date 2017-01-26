var SandwichMaker = (function() {

  // Private variable to store the price
  var totalPrice = 0;

/*
  var getMeatPrice = SandwichMaker.getMeatPrice;
  var getBreadPrice = SandwichMaker.getBreadPrice;
  var getCheesePrice = SandwichMaker.getCheesePrice;
  var getCondimentPrice = SandwichMaker.getCondimentPrice;
  var getVeggiePrice = SandwichMaker.getVeggiePrice;
*/

  // Return the public interface that other code can interact with
  return {
    addTopping: function(toppingPrice) {
      totalPrice += toppingPrice;
    }
  };
})();