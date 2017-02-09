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