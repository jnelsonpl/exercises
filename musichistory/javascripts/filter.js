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
