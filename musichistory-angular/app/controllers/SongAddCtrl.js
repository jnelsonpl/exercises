'use strict';

app.controller('SongAddCtrl', function($scope, $location, AuthFactory, MusicFactory) {

	let user = AuthFactory.getUser();

    $scope.title = "Add Song";
    $scope.btnText = 'Submit';

	$scope.newSong = {
		album: '',
		artist: '',
		title: '',
		genre: '',
		uid: user
	};

	$scope.addNewSong = function () {
		MusicFactory.addNewSong($scope.newSong).then(function (response) {
			$location.url('music/list');
		});
		console.log('added new song', $scope.newSong);
		$scope.newSong = {};
	};

});