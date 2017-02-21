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



