'use strict';

/* 
 * Create functions to add items to the dom list
 */

let Songs = require('./createObjects.js');

function addMusicToDom (songtitle, artist, album) {

		let joinArray = `${songtitle} - by ${artist} on the album ${album}`;
		Songs.songs.push(joinArray);

		console.log(Songs.songs);

		let toWebpage = '';
		toWebpage = `<div>
						<i>${songtitle}</i> - by <b>${artist}</b> on the album <u>${album}</u>.
						<input type='button' class='deletebutton' id='${songtitle} - by ${artist} on the album ${album}' 
						value='Delete'></input></div>`;
		Songs.outputToDiv.append(toWebpage);

		/*
		 * Populate Artist/Album Dropdown from JSON load
		 * No Fancy Delete/Filter Methods for this yet
		 */
		let dropdownArtistOutput = '';
			dropdownArtistOutput += `<option id="${artist} ${album}">${artist}</option>`;
		Songs.outputToArtistDropDown.append(dropdownArtistOutput);

		let dropdownAlbumOutput = '';
			dropdownAlbumOutput += `<option id="${artist} ${album}">${album}</option>`;
		Songs.outputToAlbumDropDown.append(dropdownAlbumOutput);

		Songs.deleteObject();
}

function callAddMusic () {
		let songtitle = $('#name_of_song_search').val();
		let artist = $('#artist_of_song_search').val();
		let album = $('#album_of_song_search').val();

		if (songtitle === '' || artist === '' || album === '')
			return alert('Please Fill in All Fields');
		
		addMusicToDom(songtitle, artist, album);
		alert('Song Added');

		$('#name_of_song_search').val('');
		$('#artist_of_song_search').val('');
		$('#album_of_song_search').val('');
}


module.exports = {addMusicToDom, callAddMusic};

