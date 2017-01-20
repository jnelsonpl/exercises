
var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

// .sort does not work on numbers without this function.
function subtraction(x, y) {
	return x - y;
}

// this function is used with .filter as the .filter property on an array
// actually creates an entirely new array with ONLY the values of this function
// eg. an array of 1, 5, 10, 22, 35
// eg. calling array.filter(removeValuesGreaterThan) would return a new array of 1, 5, and 10.
function removeValuesGreaterThan(x) {
	if (x < 19) // I'm not sure how to set this as a variable and use it as an argument in a single string
		return x;
}

// .map creates a new array that calls the function on EVERY ITEM in the array
// eg. calling .map(multiplyBy) on an array of 1, 4, 6 would return .5, 5, and 8.
function multiplyBy(x) {
	return (x * 1.5) - 1;
}

// .reduce produces a single value for an array
// it runs left-to-right; therefore passing the below 
// function will have it add each value in the array
function addArrayValues(x, y) {
	return x + y;
}

integers = integers.sort(subtraction).reverse().filter(removeValuesGreaterThan).map(multiplyBy).reduce(addArrayValues);

document.getElementById("integers").innerHTML = "the value of the integers array is " + integers;
console.log("the value of the integers array is " + integers);


