var outputEL = document.getElementById("output-target");

var articleEL = document.getElementsByClassName("article-section");

function eventSectionClick (event) {
	var elementText = event.target.innerHTML;
	outputEL.innerHTML = "You clicked on the " + elementText;
}

for (var i = 0; i < articleEL.length; i++) {
	articleEL.item(i).addEventListener("click", eventSectionClick);
}

function handleHeaderMouseOver (event) {
	outputEL.innerHTML = "You moved your mouse over the header";
}

function handleHeaderMouseOut (event) {
	outputEL.innerHTML = "You left me!!!";
}

var header = document.getElementById("page-header")
header.addEventListener("mouseover", handleHeaderMouseOver);
header.addEventListener("mouseout", handleHeaderMouseOut);

var fieldEl = document.getElementById("keypress-input");
fieldEl.addEventListener("keyup", function (event) {
	outputEL.innerHTML = event.target.value;
});

var guinea = document.getElementById("guinea-pig");

var addColor = document.getElementById("add-color");
var hulkify = document.getElementById("make-large");
var captureIt = document.getElementById("add-border");
var rounded = document.getElementById("add-rounding");

addColor.addEventListener("click", function() {
	guinea.classList.toggle("blue");
});

hulkify.addEventListener("click", function() {
	guinea.classList.toggle("large");
});

captureIt.addEventListener("click", function() {
	guinea.classList.toggle("bordered");
});

rounded.addEventListener("click", function() {
	guinea.classList.toggle("rounded");
});

/*
articleEL.classList.add("bold");
*/
