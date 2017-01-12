
console.log("Increment by 10 Assignment: ");

for (var i = 5; i < 120; i+= 10) {
	console.log(i);
}

console.log("---Complete---");
console.log("");
console.log("Decrement by Division Assignment: ");

for (var j = 4096; j > 1; j /= 2) {
	console.log(j);
}

console.log("---Complete---");
console.log("");
console.log("Presidential Array Iteration Assignment: ");

var presidents = [
	"George Washington",
	"John Adams",
	"Thomas Jefferson",
	"James Madison",
	"James Monroe",
	"John Quincy Adams",
	"Andrew Jackson",
	"Martin Van Buren",
	"William Henry Harrison",
	"John Tyler"
];

for (var i = 0; i < presidents.length; i++) {
	console.log("President #" + (i + 1) + " was " + presidents[i]);
}

console.log("---Complete---");
console.log("");
console.log("Object Interation Exercise: ");

var	antSpecies = {
	  argentine: {},
	  army: {},
	  bigHeaded: {},
	  black: {},
	  bull: {},
	  carpenter: {},
	  crazy: {},
	  fire: {},
	  glider: {},
	  honeyPot: {},
	  jackJumper: {}
}

var i;
var j;
for (i in antSpecies) {
	console.log(j + ": " + i);
	j++;
}




