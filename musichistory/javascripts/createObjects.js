'use strict';

/*
 * Module to manipulate json output to dom
 */

/*
 * Variable to hold output of where we'll put our content on dom.
 * Array to hold our content
 */
let outputToDiv = $('#arraySong');
let outputToArtistDropDown = $('#artist_dropdown');
let outputToAlbumDropDown = $('#album_dropdown');
let songs = [];

function createOutput (obj) {
	for (var key in obj) {
		let eachItem = obj[key];

		let joinArray = `${eachItem.title} - by ${eachItem.artist} on the album ${eachItem.album}`;
		songs.push(joinArray);

		let toWebpage = '';
		toWebpage += `<ul>
						<li class='song-li' id='${eachItem.title}'><i>${eachItem.title}</i> - by </li>
						<li class='artist-li' id='${eachItem.artist}'><b>${eachItem.artist}</b> on the album</li>
						<li class='album-li' id='${eachItem.album}'><u>${eachItem.album}</u>.</li>
						<input type='button' class='deletebutton' id='${eachItem.title} - by ${eachItem.artist} on the album ${eachItem.album}' 
						value='Delete'></input></ul>`;
		outputToDiv.append(toWebpage);

		/*
		 * Populate Artist/Album Dropdown from JSON load
		 * No Fancy Delete/Filter Methods for this yet
		 */
		let dropdownArtistOutput = '';
			dropdownArtistOutput += `<option class='artistSelect'>${eachItem.artist}</option>`;
		outputToArtistDropDown.append(dropdownArtistOutput);

		let dropdownAlbumOutput = '';
			dropdownAlbumOutput += `<option class='albumSelect'>${eachItem.album}</option>`;
		outputToAlbumDropDown.append(dropdownAlbumOutput);
	}
	deleteObject();
}

function deleteObject () {
	$('.deletebutton').click(function () {
		console.log('deleted song ' + `"` +  $(this)[0].id + `".`);
		let deleteItem = $(this)[0].id;

		for (var i = 0; i < songs.length; i++) {
			if (deleteItem === songs[i]) {
				songs.splice(i, 1);
			}
		}
		$(this).parent().remove();

		console.log(songs);
	});
}

module.exports = {	
					outputToDiv, 
					outputToArtistDropDown,
					outputToAlbumDropDown,
					songs,
					createOutput, 
					deleteObject,
				};
