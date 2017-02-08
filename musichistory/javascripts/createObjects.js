'use strict';

/*
 * Module to manipulate json output to dom
 */

let loadedOutput = $("#arraySong");
var songs = [];

function createArray (obj) {
	for (var key in obj) {
		let eachItem = obj[key];
		let joinArray = `${eachItem.title} - by ${eachItem.artist} on the album ${eachItem.album}`;
		songs.push(joinArray);
	}
}

function createOutput (obj) {
	for (var key in obj) {
		let eachItem = obj[key];

		let toWebpage = '';
		toWebpage += `<div>
						<i>${eachItem.title}</i> - by <b>${eachItem.artist}</b> on the album <u>${eachItem.album}</u>.
						<input type='button' class='deletebutton' id='${eachItem.title} - by ${eachItem.artist} on the album ${eachItem.album}'
						value='Delete'></input></div>`;
		loadedOutput.append(toWebpage);
	}

	// other objects can use the function 'deleteElement'
	$('.deletebutton').click(deleteElement);
}

function deleteElement () {
	console.log('deleted song ' + `"` +  $(this)[0].id + `."`);
	let deleteItem = $(this)[0].id;

	for (var i = 0; i < songs.length; i++) {
		if (deleteItem == songs[i]) {
			songs.splice(i, 1);
		}
	}

	$(this).parent().remove();
}



module.exports = {createArray, createOutput, deleteElement};



