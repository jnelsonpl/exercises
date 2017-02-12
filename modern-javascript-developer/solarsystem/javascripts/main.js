'use strict';

let Handlebars = require('hbsfy/runtime'),
	peopleTemplate = require('../templates/people.hbs'),
	loadFile = require('./loadfile.js'),
	personName = require('./name.js');

Handlebars.registerHelper('increment', (value) => parseInt(value) + 1);


loadFile.loadFile('json/props.json', 'json', personName.outputTo, populatePage);


function populatePage (person) {

	let createDiv = document.createElement('div');
	createDiv.innerHTML = peopleTemplate(person);

	$('#people-cards').append(createDiv);

}

//populatePage();