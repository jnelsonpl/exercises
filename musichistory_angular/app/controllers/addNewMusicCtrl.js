'use strict';

app.controller('addNewMusicCtrl', function($scope, $location, authFactory, musicStorageFactory) {

	let user = authFactory.getUser();

	$scope.newSong = {
		album: '',
		artist: '',
		title: '',
		genre: '',
		uid: user
	};

	$scope.addNewSong = function () {
		musicStorageFactory.addNewSong($scope.newSong).then(function (response) {
			$location.url('music/list');
		});
		console.log('added new song', $scope.newSong);
		$scope.newSong = {};
	};

});