(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
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




},{}],3:[function(require,module,exports){
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
	.fail(function(){console.log('failure to load file')})
	.done(console.log('successful file load ' + path), func1, func2);
}

module.exports = {loadJson};





},{}],4:[function(require,module,exports){
'use strict';
const addObject = require('./addObject.js');
const jsonloader = require('./loadJSON.js');
const createObjects = require('./createObjects.js');

/* 
 *		Calling the 'loadJson' function to create our initial output
 *		and then adding an event-listener to load a second json file.	
 */
jsonloader.loadJson('json/songs.json', 'json', createObjects.createArray, createObjects.createOutput);
$('#loadmore').on('click', function() {
		jsonloader.loadJson('json/songs2.json', 'json', createObjects.createArray, createObjects.createOutput);
		$(this).prop('disabled', true).val('Nothing More to Load');
});

/* 
 *	Have an event listener when the 'add' button is called
 *	on the 'Add Music' part of the dom.
 */
$("#music_search_button").click(function () {
	let songtitle = $("#name_of_song_search").val();
	let artist = $("#artist_of_song_search").val();
	let album = $("#album_of_song_search").val();

	addObject.addMusicToDom(songtitle, artist, album);
	addObject.addMusicToArray(songtitle, artist, album);
});


/*
 *	Declaring variables and then hiding/showing the 'add music' part
 *	of the dom.
 */
const listMusicLink = $("#listMusic")[0];
const listMusicView = $("#list_music_view")[0];
const addMusicLink = $("#addMusic")[0];
const addMusicView = $("#add_music_view")[0];

$(listMusicLink).click(function () {
	$(addMusicView).addClass("hidden");
	$(listMusicView).removeClass("hidden");
});

$(addMusicLink).click(function () {
	$(addMusicView).removeClass("hidden");
	$(listMusicView).addClass("hidden");
});


/*
 * Couldn't get 'songs' array to be accessed globally. Songs is created with json loads.
 * the array 'addedSongs' is an array which contains all songs added manually.
 */

/* 
	let loadedOutput = $("#arraySong");
	var getLoadedOutput = function () {
		return loadedOutput;
	}
	module.exports = {getLoadedOutput} 
*/
/*
let songs = [];
var songTesting = function() {
	return songTest;
}
module.exports = {songTesting} 
*/


/* Legacy Code */
/*
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// Add to an array using .unshift
songs.unshift("Video Killed the Radio Star > by The Buggles on the album The Age of Plastic");
// Add to an array using .push
songs.push("Blue Monday > by New Order on the album Candyass");
*/
// Loop over the array and remove any words or characters that obviously don't belong.
/* for (var i = 0; i < songs.length; i++) {
	var x = songs[i].replace(/>/g, "-");  // Code from StackOverflow, replace > with -
	var y = x.replace(/\*|!|@|\(|/g, ""); // Replace 'messy' characters with ""
	insertSong.innerHTML += "<br><i>" + y + "</i>"
} */
},{"./addObject.js":1,"./createObjects.js":2,"./loadJSON.js":3}]},{},[4]);
