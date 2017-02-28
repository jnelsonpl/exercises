'use strict';

app.factory('musicStorageFactory', ($q, $http, FBCreds) => {

	let getMusicList = (function (user) {
		let musicList = [];

		return $q (function (resolve, reject) {
			$http.get(`${FBCreds.databaseURL}/music.json?orderBy="uid"&equalTo="${user}"`)
			.then(function (dataRecieved) {

				let musicCollection = dataRecieved.data;
				Object.keys(musicCollection).forEach(function (key) {
					musicCollection[key].firebasekey = key;
					musicList.push(musicCollection[key]);
				});

				resolve (musicList);
			}).catch(function (error) {
				reject (error);
			});
		});
	});

	let getSingleSong = (function (firebaseKey) {
		return $q (function (resolve, reject) {
			$http.get(`${FBCreds.databaseURL}/music/${firebaseKey}.json`)
			.then(function (singleSong) {
				resolve (singleSong.data);
			})
			.catch (function (error) {
				reject (error);
			});
		});
	});

	let addNewSong = (function (newSong) {
		return $q(function (resolve, reject) {
			$http.post(`${FBCreds.databaseURL}/music.json`,
				JSON.stringify(newSong))
			.then(function (addSongToFireBase) {
				resolve (addSongToFireBase);
			}).catch(function (error) {
				reject (error);
			});
		});
	});

	let editSong = (function (firebaseKey, editedSong) {
		return $q (function (resolve, reject) {
			$http.patch(`${FBCreds.databaseURL}/music/${firebaseKey}.json`,
				angular.toJson (editedSong))
			.then(function (updateSongFromFirebase) {
				resolve (updateSongFromFirebase);
			})
			.catch (function (error) {
				reject (error);
			});
		});
	});

	let deleteSong = (function (firebaseKey) {
		console.log('delete song with firebasekey: ', firebaseKey);
		return $q (function (resolve, reject) {
			$http.delete(`${FBCreds.databaseURL}/music/${firebaseKey}.json`)
			.then(function (deleteSongFromFirebase) {
				resolve (deleteSongFromFirebase);	
			});
		});
	});

	return {
		getMusicList,
		getSingleSong,
		addNewSong,
		editSong,
		deleteSong
	};

});








