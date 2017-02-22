'use strict';

var app = angular.module('Mushroom', ['ngRoute']);

app.config( function ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'partials/mushroom-details.html',
		controller: 'printToDomCtrl'
	});
});