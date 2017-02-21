'use strict';

let firebase = 	require('./firebase/firebaseConfig.js'),
	user = 		require("./firebase/user.js"),

	db = 		require("./db-interaction.js"),
	addSong = 	require('./addSong.js'),
	createSongList = require('./createSongList.js'),
	filter = require('./filter.js');

$(document).ready(function () {
   	$('#logout-btn').hide();
  	$('#login-btn').show();



});




/* use Rest API */
function loadSongsToDom () {
	let currentUser = user.getUser();

	db.getSongList(currentUser).then(function (userSongList) {
		console.log('func. loadSongsToDom received from func. getSongList: ', userSongList);

		var idArray = Object.keys (userSongList);
		idArray.forEach (function (key)
		{
			userSongList[key].firebasekey = key;
		});
		
		createSongList.createSongList (userSongList);
	});
}


/*
 * Login calls the functions we need to get going
 */
$('#login-btn').click (function () {

	event.preventDefault();

	user.logInGoogle().then( function(result) { 
  		user.setUser(result.user.uid);
  	});

	$('#logout-btn').show();
  	$('#login-btn').hide();

	loadSongsToDom();
	filter.useFilter();

	/*
	 *	Declaring variables and then hiding/showing the 'add music' part
	 *	of the dom.
	 */
	const listMusicLink = $('#listMusic')[0];
	const listMusicView = $('#list_music_view')[0];
	const addMusicLink = $('#addMusic')[0];
	const addMusicView = $('#add_music_view')[0];

	$(listMusicLink).click(function () {
		$(addMusicView).addClass('hidden');
		$(listMusicView).removeClass('hidden');
	});

	$(addMusicLink).click(function () {
		$(addMusicView).removeClass('hidden');
		$(listMusicView).addClass('hidden');
	});

	$('#music_search_button').click(addSong.userAddSong);

});

$('#logout-btn').click(function () {

	event.preventDefault();

	$(".song_list").empty();

	user.logOut();
	location.reload();

});

