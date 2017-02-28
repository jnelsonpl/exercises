'use strict';

var app = angular.module('DoctorsPatientsApp', ['ngRoute']);

app.config(function ($routeProvider){
	$routeProvider.
	when('/', {
		templateUrl: './partials/doctors-list.html',
		controller: 'doctorCtrl'
	}).
	when('/patients-list/:doctorId', {
		templateUrl: './partials/patients-list.html',
		controller: 'doctorCtrl'
	});
});
