var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

// Easy way to get the min/max values of an array
var maxScore = Math.max.apply(Math, scores);
var minScore = Math.min.apply(Math, scores);

// Initalize variables for each grade. 
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var f = 0;

// Loop through the array and on each 'set' add to the variable of the grade
for (var i = 0; i < scores.length; i++) {
	if (scores[i] >= 91 && scores[i] < 100) {
		a++; // a = a + 1.
	}
	else if (scores[i] < 91 && scores[i] > 80) {
		b++;
	}
	else if (scores[i] < 81 && scores[i] > 70) {
		c++;
	}
	else if (scores[i] < 71 && scores[i] > 60) {
		d++;
	}
	else if (scores[i] < 61 && scores[i] > 50) {
		f++;
	}
}

console.log("Scores by Grade: ");
console.log("A: " + a);
console.log("B: " + b);
console.log("C: " + c);
console.log("D: " + d);
console.log("F: " + f);
console.log("The highest score is: " + maxScore + ". The lowest score is: " +  minScore);
