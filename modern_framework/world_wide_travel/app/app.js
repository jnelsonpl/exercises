'use strict';

var app = angular.module('WorldWideTravelGuide', ['ngRoute']);

app.config(function( $routeProvider){
	$routeProvider.
	when('/', {
		templateUrl: './partials/guides.html',
		controller: 'bookCtrl'
	});


});