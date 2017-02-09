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
		toWebpage += `<div>
						<i>${eachItem.title}</i> - by <b>${eachItem.artist}</b> on the album <u>${eachItem.album}</u>.
						<input type='button' class='deletebutton' id='${eachItem.title} - by ${eachItem.artist} on the album ${eachItem.album}' 
						value='Delete'></input></div>`;
		outputToDiv.append(toWebpage);

		/*
		 * Populate Artist/Album Dropdown from JSON load
		 * No Fancy Delete/Filter Methods for this yet
		 */
		let dropdownArtistOutput = '';
			dropdownArtistOutput += `<option id='${eachItem.artist} ${eachItem.album}'>${eachItem.artist}</option>`;
		outputToArtistDropDown.append(dropdownArtistOutput);

		let dropdownAlbumOutput = '';
			dropdownAlbumOutput += `<option id='${eachItem.artist} ${eachItem.album}'>${eachItem.album}</option>`;
		outputToAlbumDropDown.append(dropdownAlbumOutput);
	}
	console.log(songs);
	deleteObject();
}

function deleteObject () {
	$('.deletebutton').click(function () {
		console.log('deleted song ' + `"` +  $(this)[0].id + `".`);
		let deleteItem = $(this)[0].id;

		for (var i = 0; i < songs.length; i++) {
			if (deleteItem == songs[i]) {
				songs.splice(i, 1);
			}
		}
		$(this).parent().remove();

		/* For filtering, we may need to split up artist/album/song
		 * perhaps give a counter variable each time an array is created
		 * For artists with multiple songs:
		 * 	a. check the songs they have
		 * 	b. check which album are associated with song
		 * 	c. if an artist no longer has any songs, he has no album
		 */
		console.log(songs);
	});
}


module.exports = {	
					outputToDiv, 
					outputToArtistDropDown,
					outputToAlbumDropDown,
					songs,
					createOutput, 
					deleteObject
				};



