var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
var fullNames = [];

var hohohoElement = document.getElementById("coloredReindeer");


for (var i = 0; i < colors.length; i++) {
	for (var j = 0; j < reindeer.length; j++) {
		fullNames.push(colors[i] + " " + reindeer[j] + "<br />");
	}
}
hohohoElement.innerHTML = fullNames;