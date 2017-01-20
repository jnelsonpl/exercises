
var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

// We need this for numbers in an array, to sort them 1 thru whatever
function subtraction(x, y) {
	return x - y;
}

function removeValuesGreaterThan(x) {
	if (x < 19)
		return x;
}

function multiplyBy(x) {
	return (x * 1.5) - 1;
}

function addArrayValues(x, y) {
	return x + y;
}

integers = integers.sort(subtraction).reverse().filter(removeValuesGreaterThan).map(multiplyBy).reduce(addArrayValues);

document.getElementById("integers").innerHTML = "the value of the integers array is " + integers;
console.log("the value of the integers array is " + integers);