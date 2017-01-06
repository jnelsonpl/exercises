var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
var fullNames = [];

var hohohoElement = document.getElementById("coloredReindeer");

var toHTML = "";

for (var i = 0; i < reindeer.length; i++) {
	var aReindeer = reindeer[i];
	var aColor = colors[i];

	toHTML += "<p>" + aColor + " " + aReindeer + "</p>";
}

hohohoElement.innerHTML = toHTML;


