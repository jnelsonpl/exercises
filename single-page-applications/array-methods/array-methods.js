var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

var el = document.getElementById("planets");
/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/

function addPlanets (value, index, array) {
	el.style.color += "blue";
	el.innerHTML += array[index] + '<br />';
}
// forEach is called for each array element. Therefore, you can iterate using the index
planets.forEach(addPlanets); // which is the second argument 

// Use the map method to create a new array where the first letter of each planet is capitalized
function capitalizeIt(element, index, array) {
	var a = array[index].charAt(0).toUpperCase() + array[index].slice(1);
}
planets.map(capitalizeIt);

// Use the filter method to create a new array that contains planets with the letter 'e'
function letterE(element, index, array) {
	var a = array[index].indexOf('e'); // .indexOf searches for the specified character
		if (a !== -1) { 			   // if the character is found
			return element;
		}
}
planets.filter(letterE);


// Use the reduce method to create a sentence from the words in the following array
var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
function createSentence(previousValue, currentValue, index, array) {
	return previousValue + " " + currentValue;
}
words.reduce(createSentence);







