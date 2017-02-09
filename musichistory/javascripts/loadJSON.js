'use strict';

/*
 * module to load our json
 */

function loadJson (path, datatype, func1, func2) {
	$.ajax({
		url: path,
		dataType: datatype
	})
	.then(console.log('attempting file load ' + path))
	.fail(function(){console.log('failure to load file');})
	.done(console.log('successful file load ' + path), func1, func2);
}

module.exports = {loadJson};




