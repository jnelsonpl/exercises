
/*
Create variables for each button on the DOM
 */
var multiply = document.getElementById("multiply");
var add = document.getElementById("add");
var subtract = document.getElementById("subtract");
var divide = document.getElementById("divide");

/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */

function multiplyTwo() {
    var x = document.getElementById("fieldOne").value;
    var y = document.getElementById("fieldTwo").value;
    var z = x * y;
    document.getElementById("answerhere").innerHTML = z;
};

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */

function addTwo(x, y) {
    return x + y;
}


/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */

function subtractTwo(x, y) {
  return x - y;
}


/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function divideTwo(x, y) {
  return x / y;
}


/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */
function addTwoNumbersThenMultiply(x, y, z) {
    var theSum = x + y;
    return theSum * z;
}






