'use strict';

var app = angular.module('DoctorsPatientsApp', ['ngRoute']);

/* route to a particular partial when a location is called */

app.config(function ($routeProvider){
	$routeProvider.
	when('/', {
		templateUrl: './partials/doctors-list.html',
		controller: 'doctorCtrl'
	}).
	when('/patients-list/:itemId', {
		templateUrl: './partials/patients-list.html',
		controller: 'doctorCtrl'
	}); 

});
