'use strict';

app.controller('doctorCtrl', function ($scope, $routeParams, $location, loadDoctorsPatients) {

	loadDoctorsPatients.loadDoctorsPatients().then(function (dataReceived){
		$scope.doctors = dataReceived[0];
		$scope.patients = dataReceived[1];
	});

	$scope.something = $routeParams;
	console.log('RouteParameter', $routeParams);
	console.log('Current location: ' + $location.path());

	

});
