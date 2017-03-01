'use strict';

app.controller('SongEditCtrl', function($scope, $location, $window, $routeParams, MusicFactory){

  $scope.title = "Edit Song";
  $scope.btnText = "Update Song";
  $scope.newSong = {};

  MusicFactory.getSingleSong($routeParams.songId).then(function successCallback(response) {
    $scope.newSong = response;
  });

  $scope.addNewSong = function () {
    MusicFactory.editSong($routeParams.songId, $scope.newSong).then(function successCallback(response) {
      $location.url("/music/list");
    });
  };


});