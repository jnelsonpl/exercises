'use strict';

app.controller('bookCtrl', function ($scope, $routeParams, loadData) {

	loadData.loadData().then(function (dataRecieved) {
		$scope.books = dataRecieved;
	});
});