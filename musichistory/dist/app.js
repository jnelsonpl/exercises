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




},{}],3:[function(require,module,exports){
'use strict';

/* 
 * Create Filter Ability
 */
function initialFilterFileLoad (obj) {
	console.log('hi');
}

module.exports = initialFilterFileLoad;


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

/* 
 *	Have an event listener when the 'add' button is called
 *	on the 'Add Music' part of the dom.
 */
$('#music_search_button').click(addObject.callAddMusic);


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
},{"./addObject.js":1,"./createObjects.js":2,"./filter.js":3,"./loadJSON.js":4}]},{},[5]);
