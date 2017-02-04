"use strict";

/*
 * Begin JSON LOAD
 */ 
var firstLoad = $.getJSON("songs.json", 
	  function() {
	  	console.log( "First JSON Loaded" );
	  	var jsonSongList = JSON.parse(event.target.responseText);
	  	loadJSONList(jsonSongList);
	 });

var secondJsonSongList;
var secondLoad = $.getJSON("songs2.json",
	function() {
		console.log("Second JSON Loaded");
		secondJsonSongList = JSON.parse(event.target.responseText);
	});

/*
 * ARRAY ELEMENTS
 */
let songs = [];

/*
 * VARIABLES TO GET DOCUMENT ELEMENTS
 */

	
	// Add Music button
	const addButton = $("#music_search_button");

	// List Music Link & Div
	const listMusicLink = $("#listMusic")[0];
	const listMusicView = $("#list_music_view")[0];

	// Add Music Link & Div
	const addMusicLink = $("#addMusic")[0];
	const addMusicView = $("#add_music_view")[0];

/*
 * Event Listeners to Show and Hide Parts of the DOM
 */

	$(listMusicLink).on("click", function () {
		$(addMusicView).addClass("hidden");
		$(listMusicView).removeClass("hidden");
	});

	$(addMusicLink).on("click", function () {
		$(addMusicView).removeClass("hidden");
		$(listMusicView).addClass("hidden");
	});


 // Where Songs are inserted in DOM
 // need help on jquery convert
//const insertSong = document.getElementById("arraySong");
var insertSong = $("#arraySong");

/* 
 * Add Music Event Listener, Add Music to DOM
 */
// addButton.addEventListener("click", function(event) {
addButton.on("click", function (event) {

		let nameOfSong = $("#name_of_song_search").val();
		let artistOfSong = $("#artist_of_song_search").val();
		let albumOfSong = $("#album_of_song_search").val();


		let completeSongElement = 
			`<div>
			<i>${nameOfSong}</i> - by <b>${artistOfSong}</b> on the album <u>${albumOfSong}</u>.</ul>
			<button type="button" class="deleteme" id="${nameOfSong} - by ${artistOfSong} on the album ${albumOfSong}">Delete</button></div>`;
		
		//insertSong.innerHTML += completeSongElement;
		insertSong.append(completeSongElement);

		let a = `${nameOfSong} - by ${artistOfSong} on the album ${albumOfSong}`;
		songs.push(a); // push to array
		console.log("Song Added");
		identifyButtons(); // Call the Function to identify & delete buttons
});

/*
 * Load Music from JSON
 */
function loadJSONList (songList) {
	var song;
	for (song in songList) {
		let listOfMusic = "";
		let eachSong = songList[song];

		listOfMusic += `<div>
						<i>${eachSong.title}</i> - by <b>${eachSong.artist}</b> on the album
						<u>${eachSong.album}</u>.
						<button type="button" class="deleteme" id="${eachSong.title} - by ${eachSong.artist} on the album ${eachSong.album}">Delete</button></div>`

		//insertSong.innerHTML += listOfMusic;
		
		insertSong.append(listOfMusic);

		let a = `${eachSong.title} - by ${eachSong.artist} on the album ${eachSong.album}`;
		songs.push(a);
		identifyButtons(); // Call the Function to identify & delete buttons
	}
}

/* 
 * 		Handler for "Load More Music Button"
 */
// var moreMusicButton = document.getElementById("loadmore");
$("#loadmore").on("click", function () {
	loadJSONList(secondJsonSongList);
	// console.log("We need to remove this after load");
	event.target.remove();
});


function identifyButtons() {
	//var x = document.getElementsByClassName("deleteme");
	var x = $(".deleteme");
	for (var i = 0; i < x.length; i++) {
		// x[i].addEventListener("click", erase);
		$(x[i]).on("click", erase);
	}
}

/* 
 *    *** RESEARCH EVENT.TARGET.ID ***
 */ 
function erase(event) {
	//this.parentNode.parentNode.removeChild(this.parentNode);
	// $(this).remove();
	$this.parentNode.remove();
	var songName = event.target.id;
	for (var i = 0; i < songs.length; i++) {
		if (songName === songs[i]) {
			songs.splice(i, 1);
		}
	}

}

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
