'use strict';

var app = angular.module('MusicApp', ["ngRoute"]);

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
        templateUrl: 'template/login.html',
        controller: 'UserCtrl'
    }).
    when('/music/list', {
        templateUrl: 'template/SongList-template.html',
        controller: 'SongListCtrl'
    }).
    when('/music/addnewsong', {
        templateUrl: 'template/SongForm-template.html',
        controller: 'SongAddCtrl'
    }).
    when('/music/:songId', {
        templateUrl: 'template/SongDetail-template.html',
        controller: 'SongDetailCtrl'
    }).
    when('/music/:songId/edit', {
        templateUrl: 'template/SongForm-template.html',
        controller: 'SongEditCtrl'
    }).otherwise('/');
});

// Start Firebase Credentials
app.run(($location, FBCreds) => {
    let creds = FBCreds;
    let authConfig = {
        apiKey: creds.apiKey,
        authDomain: creds.authDomain,
        databaseURL: creds.databaseURL
    };

    firebase.initializeApp(authConfig);
});




