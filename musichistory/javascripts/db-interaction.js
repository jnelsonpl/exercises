'use strict';

/* interaction with firebase */

function getSongList (user) {
	return new Promise (function (resolve, reject) {
		$.ajax ({
			// url: `https://musichistory-8e58d.firebaseio.com/music.json?orderBy="uid"&equalTo="${user}"`,
			url: 'https://musichistory-8e58d.firebaseio.com/music.json',
			type: 'GET'
		}).done( function(userSongList) {
			resolve (userSongList);
		}).fail( function(error) {
			reject (error);
		});
	});
}

function addSongToSongList (song) {
	return new Promise (function (resolve, reject) {
		$.ajax({
			url: 'https://musichistory-8e58d.firebaseio.com/music.json',
			type: 'POST',
			data: JSON.stringify(song),
			dataType: 'json'
		}).done( function(userAddedSong){
			console.log('addSongToSongList finished adding song: ', userAddedSong);
			resolve(userAddedSong);
		});
	});
}

function deleteSongFromSongList (firebaseId) {
	return new Promise (function (resolve, reject) {
		$.ajax({
			url: `https://musichistory-8e58d.firebaseio.com/music/${firebaseId}.json`,
			method: 'DELETE'
		}).done( function () {
			resolve();
		});
	});
}

function editSongFromSongList (songObject, songId) {
	return new Promise (function (resolve, reject) {
		$.ajax({
			url: `https://musichistory-8e58d.firebaseio.com/music/${songId}.json`,
			type: 'PUT',
			data: JSON.stringify(songObject),
			dataType: 'json'
		}).done( function (editedSong) {
			resolve (editedSong);
		});
	});
}

module.exports = {
	getSongList,
	addSongToSongList,
	deleteSongFromSongList,
	editSongFromSongList
};

