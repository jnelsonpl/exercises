'use strict';

app.controller('doctorCtrl', function ($scope, $routeParams, $location, loadDoctorsPatients) {

	loadDoctorsPatients.loadDoctorsPatients().then(function (dataRecieved){
		$scope.doctors = dataRecieved[0];
		$scope.patients = dataRecieved[1];
	});

	console.log($scope);
	console.log('Current location: ' + $location.path());
	console.log($routeParams);
	$scope.itemId = $routeParams;

/*	$scope.docToPatient = function(itemId){
		var arrayLength = 

	}); 
*/



});


// dataRecieved[0][x].key === dataRecieved[1][x].doctor_id;
// 