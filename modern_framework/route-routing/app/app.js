'use strict';

var app = angular.module('RouteRouting', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider.
	when('/hwy65', {
		templateUrl: '/partials/hwy65.html',
		controller: 'hwy65Ctrl'
	}).
	when('/hwy96', {
		templateUrl: '/partials/hwy96.html',
		controller: 'hwy96Ctrl'
	}).
	otherwise('/');

});