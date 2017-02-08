'use strict';

/* 
 * Create functions to add items to the dom list
 */

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
		songs.push(joinArray);
}

// module.exports = {addMusicToDom, addMusicToArray};