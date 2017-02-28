'use strict';

app.controller('SongEditCtrl', function($scope, $location, $routeParams, MusicFactory){

  $scope.title = "Edit Song";
  $scope.btnText = "Update Song";
  $scope.newSong = {};

  MusicFactory.getSingleSong($routeParams.songId).then(function successCallback(response) {
    console.log('Song Updated: ', response.data);
    $scope.newSong = response;
  });

  $scope.addNewSong = function () {
    MusicFactory.editSong($routeParams.songId, $scope.newSong).then(function successCallback(response) {
      console.log('Song Updated: ', response.data);
      $location.url('/music/list');
    });
  };


});