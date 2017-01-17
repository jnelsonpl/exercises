

// Create variables for each button on the DOM
var multiply = document.getElementById("multiply");
var add = document.getElementById("add");
var subtract = document.getElementById("subtract");
var divide = document.getElementById("divide");

// the element to display the answer
var answer = document.getElementById("answerhere");

// using global x/y valuables led to problems
// var x = parseFloat(document.getElementById("fieldOne").value);
// var y = parseFloat(document.getElementById("fieldTwo").value);

/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
multiply.addEventListener("click", multiplyTwo);
function multiplyTwo(x, y) {
  x = parseFloat(document.getElementById("fieldOne").value);
  y = parseFloat(document.getElementById("fieldTwo").value);
  answer.innerHTML = x * y;
};

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
add.addEventListener("click", addTwo);
function addTwo(x, y) { // We must use parseFloat or x + y will become "xy".
                        // We do not seem to even need to add arg1, arg2
  x = parseFloat(document.getElementById("fieldOne").value);
  y = parseFloat(document.getElementById("fieldTwo").value);
  answer.innerHTML = x + y;
};


/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
subtract.addEventListener("click", subtractTwo);
function subtractTwo(x, y) {
  x = parseFloat(document.getElementById("fieldOne").value);
  y = parseFloat(document.getElementById("fieldTwo").value);
  answer.innerHTML = x - y;
};


/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
divide.addEventListener("click", divideTwo);
function divideTwo(x, y) {
  x = parseFloat(document.getElementById("fieldOne").value);
  y = parseFloat(document.getElementById("fieldTwo").value);
  answer.innerHTML = x / y;
};


/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */
document.getElementById("addthenmultiply").addEventListener("click", addTwoNumbersThenMultiply);
function addTwoNumbersThenMultiply(x, y, z) {
  x = parseFloat(document.getElementById("arg1").value);
  y = parseFloat(document.getElementById("arg2").value);
  z = x + y;
  z = z * z;
  document.getElementById("answerforthree").innerHTML = z;
};





