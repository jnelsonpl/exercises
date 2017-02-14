'use strict';


function outputTo (name) {
	for (var key in name) {
		let person_name = name[key];
		for (var x in person_name) {
			console.log(person_name[x].name);
		}
	}
}

module.exports = {outputTo};