'use strict';

app.controller('SongListCtrl', function ($scope, AuthFactory, MusicFactory) {

    let user = AuthFactory.getUser();

    MusicFactory.getMusicList(user).then(function (userSongList) {
    	$scope.MusicList = userSongList;
    });

	$scope.deleteSong = function (firebaseKey) {
		MusicFactory.deleteSong(firebaseKey).then(function () {
			MusicFactory.getMusicList(user).then(function (userSongList) {
				console.log('Current List of User Songs: ', userSongList);
				$scope.MusicList = userSongList;
			});
		});
	};

});