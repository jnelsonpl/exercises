'use strict';

/* 
 * Create Filter Ability
 */


function useFilter () {

	var artistLi = $('.artist-li');
	var artistSelected = $('#artist_dropdown').val();

	for (var i = 0 ; i < artistLi.length; i++) {
		if (artistSelected == artistLi[i].id) {
			console.log(artistLi[i].id);
			$(artistLi[i]).addClass('hidden');
		}

		
		/* } else if (artistSelected !== artistLi[i].id) {
			$('.artistLi').hide();
		} */

			

		// (THIS) === THE DROP DOWN MENU
		// hides the element selected
		// $(artistLi[i]).parent().hide();
		//artistLi[i].parentElement.classList.add('hidden');



		}

	}



$('#artist_dropdown').change(useFilter);

module.exports = {useFilter};



