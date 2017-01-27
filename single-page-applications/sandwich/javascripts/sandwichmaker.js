var SandwichMaker = (function() {

  // Private variable to store the price
  var totalPrice = 0;

  // Return the public interface that other code can interact with
  return {
    addTopping: function(toppingPrice) {
      totalPrice += toppingPrice;
      console.log("The total price is now: " + totalPrice);
    },
    subtractTopping: function(tPrice) {
      totalPrice -= tPrice;
      console.log("The total price is now: " + totalPrice);
    }
  };

})();