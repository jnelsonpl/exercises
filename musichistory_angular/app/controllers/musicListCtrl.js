'use strict';

app.controller('musicListCtrl', function ($scope, $location, authFactory, musicStorageFactory) {

    let user = authFactory.getUser();

    musicStorageFactory.getMusicList(user).then(function (dataRecieved) {
    	console.log('Music List Recieved: ', dataRecieved);
    	$scope.musicList = dataRecieved;
    });

	$scope.deleteSong = function (firebasekey) {
		musicStorageFactory.deleteSong(firebasekey).then(function (response) {
			musicStorageFactory.getMusicList(user)
			.then(function (musicList) {
				console.log(musicList);
				$scope.musicList = musicList;
			});
		});
	};

});