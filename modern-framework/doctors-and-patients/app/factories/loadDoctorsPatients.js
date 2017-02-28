'use strict';

app.factory('loadDoctorsPatients', function ($q, $http, dataMassage) {

	let loadDoctorsPatients = (function () {
		return $q (function (resolve, reject) {
			$http.get('./doctors-patients.json')
			.then (function (dataReceived) {
				// writing this function isn't needed...
				// should have set two variables in controller
				var massaged = dataMassage.massageTheData(dataReceived);
				resolve (massaged);
			}).catch((error) => {
				reject(error);
			});
		});
	});
	return {loadDoctorsPatients};
});
