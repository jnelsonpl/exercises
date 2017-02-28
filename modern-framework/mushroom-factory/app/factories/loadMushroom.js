'use strict';

app.factory('Mushroom', function ($q, $http) {

	let loadMushroom = (function () {
		return $q (function(resolve, reject) {
			$http.get('./mushroom.json')
			.then(function (objData) {
				resolve (objData);
			});
		});
	});

	return {loadMushroom};
});