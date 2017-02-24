'use strict';

app.factory('loadDoctorsPatients', function ($q, $http, dataMassage) {

	let loadDoctorsPatients = (function () {
		return $q (function (resolve, reject) {
			$http.get('./doctors-patients.json')
			.then (function (dataReceived) {
				// writing this function isn't needed...i don't think....
				// should have just split array into two
				var massaged = dataMassage.massageTheData(dataReceived);
				resolve (massaged);
			}).catch((error) => {
				reject(error);
			});
		});
	});

	return {loadDoctorsPatients};

});
