'use strict';

app.controller('loadJsonCtrl', function ($scope, $http) {

	$http.get('./mushroom.json').then(function (object) {
		
		let array = [];
		let objData = object.data.mushrooms;

		for (var prop in objData) {

			// couldn't get an angular.forEach working on this...

			let newObj = {};
			let objName = String(Object.keys(objData[prop]));

			newObj.name = objName;
			newObj.edible = objData[prop][objName].edible;
			newObj.description = objData[prop][objName].description;
	
			array.push(newObj);
		}

		$scope.mushrooms = array;

	});
});

