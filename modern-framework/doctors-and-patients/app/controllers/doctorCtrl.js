'use strict';

app.controller('doctorCtrl', function ($scope, $routeParams, $location, loadDoctorsPatients) {

	loadDoctorsPatients.loadDoctorsPatients().then(function (dataReceived){
		$scope.doctors = dataReceived[0];
		$scope.patients = dataReceived[1];
	});

	/* routeParams MUST be set to $scope.x, cannot be passed directly into template */
	$scope.aDoctor = $routeParams;
	console.log('Current location: ' + $location.path());

});
