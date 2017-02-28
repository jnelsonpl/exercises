'use strict';

app.controller('songDetailsCtrl', function ($scope, $routeParams, authFactory, musicStorageFactory) {

	let user = authFactory.getUser();
	$scope.items = [];

	console.log($routeParams.songId);
	console.log($routeParams);

	musicStorageFactory.getMusicList(user).then(function (dataReceived) {
		$scope.music = dataReceived;

		$scope.selectedSong = $scope.music.filter(function (item) {
			return item.firebasekey === $routeParams.itemId;
		})[0];
	});

});