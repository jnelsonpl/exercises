'use strict';

/* 
 * Create functions to add items to the dom list
 */

let loadedOutput = $("#arraySong");
var addedSongs = [];

function addMusicToDom (songtitle, artist, album) {
		let toWebpage = '';
		toWebpage = `<div>
						<i>${songtitle}</i> - by <b>${artist}</b> on the album <u>${album}</u>.
						<input type='button' class='deletebutton' id='${songtitle} - by ${artist} on the album ${album}'
						value='Delete'></input></div>`;
		console.log('song added');
		loadedOutput.append(toWebpage);
		$('.deletebutton').click(deleteElement);
}

function addMusicToArray (songtitle, artist, album) {
		let joinArray = `${songtitle} - by ${artist} on the album ${album}`;
		addedSongs.push(joinArray);
}

function deleteElement () {
	console.log('deleted song ' + `"` +  $(this)[0].id + `."`);
	let deleteItem = $(this)[0].id;

	for (var i = 0; i < addedSongs.length; i++) {
		if (deleteItem == addedSongs[i]) {
			addedSongs.splice(i, 1);
		}
	}

	$(this).parent().remove();
}

module.exports = {addMusicToDom, addMusicToArray};