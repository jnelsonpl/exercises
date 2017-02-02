/*
 * Begin JSON LOAD
 */ 
var objectRequest = new XMLHttpRequest();
objectRequest.addEventListener("load", dataRequestComplete);
objectRequest.addEventListener("error", dataRequestFailed);
	function dataRequestComplete (event) {
		var jsonSongList = JSON.parse(event.target.responseText);
		loadJSONList(jsonSongList); // load the songs from JSON file
		console.log("JSON request complete");
	}

	function dataRequestFailed (event) {
		console.log("Error occured during JSON transfer");
	}
objectRequest.open("GET", "songs.json");
objectRequest.send();
/*
 * End JSON LOAD
 */
/* Second JSON Load */
var secondObjectRequest = new XMLHttpRequest();
secondObjectRequest.addEventListener("load", secondDataRequestComplete);
secondObjectRequest.addEventListener("error", secondDataRequestFailed);
var secondJsonSongList;
	function secondDataRequestComplete (event) {
		secondJsonSongList = JSON.parse(event.target.responseText);
		// loadJSONList(secondJsonSongList); // load the songs from JSON file calls loadJSONList function
		console.log("Second JSON request complete");
	}

	function secondDataRequestFailed (event) {
		console.log("Error occured during JSON transfer");
	}
secondObjectRequest.open("GET", "songs2.json");
secondObjectRequest.send();
/* End Second JSON load */

/*
 * ARRAY ELEMENTS
 */
let songs = [];

/*
 * VARIABLES TO GET DOCUMENT ELEMENTS
 */
 	// Where Songs are inserted in DOM
	const insertSong = document.getElementById("arraySong");
	// Add Music button
	const addButton = document.getElementById("music_search_button");

	// List Music Link & Div
	const listMusicLink = document.getElementById("listMusic");
	const listMusicView = document.getElementById("list_music_view");
	// Add Music Link & Div
	const addMusicLink = document.getElementById("addMusic");
	const addMusicView = document.getElementById("add_music_view");

/*
 * Event Listeners to Show and Hide Parts of the DOM
 */

	// View Music Link Show/Hidden
	listMusicLink.addEventListener("click", function (event) {
		addMusicView.classList.add("hidden");
		listMusicView.classList.remove("hidden");
	});

	// Add Music Link Show/Hidden
	addMusicLink.addEventListener("click", function (event) {
		addMusicView.classList.remove("hidden");
		listMusicView.classList.add("hidden");
	});


/* 
 * Add Music Event Listener, Add Music to DOM
 */
addButton.addEventListener("click", function(event) {
		let nameOfSong = document.getElementById("name_of_song_search").value;
		let artistOfSong = document.getElementById("artist_of_song_search").value;
		let albumOfSong = document.getElementById("album_of_song_search").value;

		let completeSongElement = 
			`<div>
			<i>${nameOfSong}</i> - by <b>${artistOfSong}</b> on the album <u>${albumOfSong}</u>.</ul>
			<button type="button" class="deleteme" id="${nameOfSong} - by ${artistOfSong} on the album ${albumOfSong}">Delete</button></div>`;
		insertSong.innerHTML += completeSongElement;

		let a = `${nameOfSong} - by ${artistOfSong} on the album ${albumOfSong}`;
		songs.push(a); // push to array
		console.log("Song Added");
		identifyButtons(); // Call the Function to identify & delete buttons
});

/*
 * Load Music from JSON
 */
function loadJSONList (songList) {
	for (song in songList) {
		let listOfMusic = "";
		let eachSong = songList[song];

		listOfMusic += `<div>
						<i>${eachSong.title}</i> - by <b>${eachSong.artist}</b> on the album
						<u>${eachSong.album}</u>.
						<button type="button" class="deleteme" id="${eachSong.title} - by ${eachSong.artist} on the album ${eachSong.album}">Delete</button></div>`

		insertSong.innerHTML += listOfMusic;

		let a = `${eachSong.title} - by ${eachSong.artist} on the album ${eachSong.album}`;
		songs.push(a);
		identifyButtons(); // Call the Function to identify & delete buttons
	}
}

/* 
 * 		Handler for "Load More Music Button"
 */
var moreMusicButton = document.getElementById("loadmore");
moreMusicButton.addEventListener("click", function () {
	loadJSONList(secondJsonSongList);
	// console.log("We need to remove this after load");
	event.target.remove(); /* this could probably be more elegant... */
});


/* does not delete from array */

function identifyButtons() {
	var x = document.getElementsByClassName("deleteme");
	for (var i = 0; i < x.length; i++) {
		x[i].addEventListener("click", erase);
	}
}
/* 
 *    *** RESEARCH EVENT.TARGET.ID ***
 */ 

function erase(event) {
	this.parentNode.parentNode.removeChild(this.parentNode);
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
