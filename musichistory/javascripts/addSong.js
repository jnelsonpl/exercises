'use strict';

/* 
 * Create functions to add items to the dom list
 */

let db = require("./db-interaction.js"),
	user = require("./firebase/user.js"),
	createSongList = require('./createSongList.js');

function userAddSong () {

		let title = $('#name_of_song').val();
		let artist = $('#artist_of_song').val();
		let album = $('#album_of_song').val();
		let genre = $('#genre_dropdown option:selected').text();

		if (title === '' || artist === '' || album === '') {
			console.log('fields cannot be empty!');
		}
		
		let songObj = {
			album: album,
			artist: artist,
			title: title,
			genre: genre,
			uid: user.getUser()
		};

		console.log('user added song: ', songObj);
		db.addSongToSongList(songObj).then (function () {
			console.log('Song Add Complete, Clear Values!');
			$('#name_of_song').val('');
			$('#artist_of_song').val('');
			$('#album_of_song').val('');
			// need to force a dom refresh here
		});
}


module.exports = {userAddSong};

