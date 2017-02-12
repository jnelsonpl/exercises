(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
						<li class='song-li' id='${songtitle}'><i>${songtitle}</i> - by </li>
						<li class='artist-li' id='${artist}'><b>${artist}</b> on the album</li>
						<li class='album-li' id='${album}'><u>${album}</u>.</li>
						<input type='button' class='deletebutton' id='${songtitle} - by ${artist} on the album ${album}' 
						value='Delete'></input></div>`;
		Songs.outputToDiv.append(toWebpage);

		/*
		 * Populate Artist/Album Dropdown from JSON load
		 * No Fancy Delete/Filter Methods for this yet
		 */
		let dropdownArtistOutput = '';
			dropdownArtistOutput += `<option class="${artist}">${artist}</option>`;
		Songs.outputToArtistDropDown.append(dropdownArtistOutput);

		let dropdownAlbumOutput = '';
			dropdownAlbumOutput += `<option class="${album}">${album}</option>`;
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


},{"./createObjects.js":2}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
'use strict';

/* 
 * Create Filter Ability
 */


function useFilter () {

	let selectedArtist = $('#artist_dropdown option:selected').text();
	let selectedAlbum = $('#album_dropdown option:selected').text();
	$('.artist-li').parent().hide();
		// credit to blaise for this logic... 
		if (selectedArtist === '') { 
			$('.album-li:contains(' +selectedAlbum+ ') ').parent().show();
		} else  if (selectedAlbum === '') {
			$('.artist-li:contains(' +selectedArtist+ ') ').parent().show();
		}
		else {
			$('.album-li:contains(' +selectedAlbum+ ') ').parent().show();
			$('.artist-li:contains(' +selectedArtist+ ') ').parent().show();
		}
}


$('#artist_dropdown').change(useFilter);
$('#album_dropdown').change(useFilter);
$('#filter_button').click(useFilter);

module.exports = {useFilter};

},{}],4:[function(require,module,exports){
'use strict';

/*
 * module to load our json
 */

function loadJson (path, datatype, func1, func2) {
	$.ajax({
		url: path,
		dataType: datatype
	})
	.then(console.log('attempting file load ' + path))
	.fail(function(){console.log('failure to load file');})
	.done(console.log('successful file load ' + path), func1, func2);
}

module.exports = {loadJson};





},{}],5:[function(require,module,exports){
'use strict';

const addObject = require('./addObject.js');
const jsonloader = require('./loadJSON.js');
const createObjects = require('./createObjects.js');
const filter = require('./filter.js');

/* 
 *	Calling the 'loadJson' function to create our initial output
 *	and then adding an event-listener to load a second json file.	
 */
jsonloader.loadJson('json/songs.json', 'json', 
	createObjects.createOutput, filter.initialFilterFileLoad);

$('#loadmore').click(function() {
		jsonloader.loadJson('json/songs2.json', 'json', createObjects.createOutput);
		$(this).prop('disabled', true).val('Nothing More to Load');
});

filter.useFilter();

/* 
 *	Have an event listener when the 'add' button is called
 *	on the 'Add Music' part of the dom.
 */
$('#music_search_button').click(addObject.callAddMusic);


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
},{"./addObject.js":1,"./createObjects.js":2,"./filter.js":3,"./loadJSON.js":4}]},{},[5]);
