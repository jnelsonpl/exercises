
// List Music Link & Div
const listMusicLink = document.getElementById("listMusic");
const listMusicView = document.getElementById("list_music_view");

// Add Music Link & Div
const addMusicLink = document.getElementById("addMusic");
const addMusicView = document.getElementById("add_music_view");

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


// Original Song Array
var songs = [];

// Add to an array using .length
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// Add to an array using .unshift
songs.unshift("Video Killed the Radio Star > by The Buggles on the album The Age of Plastic");
// Add to an array using .push
songs.push("Blue Monday > by New Order on the album Candyass");


var insertSong = document.getElementById("arraySong");
// Loop over the array and remove any words or characters that obviously don't belong.
for (var i = 0; i < songs.length; i++) {
	var x = songs[i].replace(/>/g, "-");  // Code from StackOverflow, replace > with -
	var y = x.replace(/\*|!|@|\(|/g, ""); // Replace 'messy' characters with ""
	insertSong.innerHTML += "<br><i>" + y + "</i>"
}

// Add Songs to Array and display with innerHTML;
const addButton = document.getElementById("music_search_button");
addButton.addEventListener("click", function(event) {
		let nameOfSong = document.getElementById("name_of_song_search").value;
		let artistOfSong = document.getElementById("artist_of_song_search").value;
		let albumOfSong = document.getElementById("album_of_song_search").value;

		let completeSongElement = nameOfSong + " - by " + artistOfSong + " on the album " + albumOfSong;
		songs.push(completeSongElement); // push to array
		console.log("Song Added");

		insertSong.innerHTML += "<br><i>" + completeSongElement + "</i>"; // display in HTML
});


	


