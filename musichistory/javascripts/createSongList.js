'use strict';

let db = require("./db-interaction.js");
let filter = require('./filter.js');

let outputToDiv = $('#songList');
let outputToArtistDropDown = $('#artist_dropdown');
let outputToAlbumDropDown = $('#album_dropdown');

function createSongList (songList) {

	console.log('createSongList received: ', songList);

	for (var individualSong in songList) {
		var eachSong = songList[individualSong];

		let toWebpage = '';
		toWebpage += 	`<div class="song_div" id='div--${eachSong.firebasekey}'>
						<i>${eachSong.title}</i> - by <b class='artist-li'>${eachSong.artist}</b> on the album <u class='album-li'>${eachSong.album}</u>
						<button type='button' class='deletebutton' id='deletebutton--${eachSong.firebasekey}'>Delete</button>
						`;

		outputToDiv.append(toWebpage);

		let dropdownArtistOutput = '';
			dropdownArtistOutput += `<option class='artistSelect'>${eachSong.artist}</option>`;
		outputToArtistDropDown.append(dropdownArtistOutput);

		let dropdownAlbumOutput = '';
			dropdownAlbumOutput += `<option class='albumSelect'>${eachSong.album}</option>`;
		outputToAlbumDropDown.append(dropdownAlbumOutput);
	}

	$('.deletebutton').click(function () {
		// I just love this :)
		let firebaseID = $(event.target).closest('div').attr('id').slice(5);
		db.deleteSongFromSongList(firebaseID);
		$('#div--' + firebaseID).remove();

	});

}

module.exports = {createSongList};
