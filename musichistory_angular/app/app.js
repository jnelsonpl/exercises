'use strict';

var app = angular.module('MusicHistoryApp', ["ngRoute"]);

//used to authenticate user when navigating to other views
let isAuth = (AuthFactory) => new Promise ( (resolve, reject) => {
    console.log("running isAuth");
    AuthFactory.isAuthenticated()
    .then ( (userExists) => {
    console.log("userExists", userExists);
        if (userExists){
      console.log("Authenticated, go ahead.");
            resolve();
        } else {
      console.log("Authentication rejected, go away.");
            reject();
        }
    });
});

app.config(function($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'partials/login.html',
        controller: 'userCtrl'
    }).
    when('/music/list', {
        templateUrl: 'partials/userMusicList.html',
        controller: 'musicListCtrl'
    }).
    when('/music/addnewsong', {
        templateUrl: 'partials/addNewSong.html',
        controller: 'addNewMusicCtrl'
    }).
    when('/music/:songId', {
        templateUrl: 'partials/songDetails.html',
        controller: 'songDetailsCtrl'
    });
    /* when('/music/:songId/edit', {
        templateUrl: 'partials/song-edit-form.html',
        controller: ''
    }). */
    // otherwise('/');
});

//run this right when the app loads
app.run(($location, FBCreds) => {
    let creds = FBCreds;
    let authConfig = {
        apiKey: creds.apiKey,
        authDomain: creds.authDomain,
        databaseURL: creds.databaseURL
    };

    firebase.initializeApp(authConfig);
});




