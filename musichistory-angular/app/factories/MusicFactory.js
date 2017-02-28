'use strict';

app.factory('MusicFactory', ($q, $http, FBCreds) => {

	// getMusicList 
	let getMusicList = (function (user) {
		let musicList = [];

		return $q (function (resolve, reject) {
			$http.get(`${FBCreds.databaseURL}/music.json?orderBy="uid"&equalTo="${user}"`)
			.then(function (dataReceived) {

				let musicCollection = dataReceived.data;
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

	// getSingleSong
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

	// addNewSong
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

	// editSong
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

	// deleteSong
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








