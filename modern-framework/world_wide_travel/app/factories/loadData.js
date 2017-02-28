'use strict';

app.factory('loadData', function ($q, $http) {

	let loadData = (function () {
		return $q (function (resolve, reject) {
			$http.get('./guides.json').then
			(function (recievedData) {
				var x = recievedData.data.guides;
				resolve(x);
			}).catch(function (error) {
				reject(error);
			});
		});
	});

	return {loadData};

});