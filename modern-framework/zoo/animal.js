/*
 * First:
 * Need to rewrite clearer with variables
 */
function BigLion () {
	this.name = 'Charles the Lion';
};

function Panthera () {
	this.genusName = 'Panthera';
};

function PLeo () {
	this.speciesName = 'P.Leo';
};

Panthera.prototype = new BigLion();
PLeo.prototype = new Panthera;
console.log ( new PLeo() );
/* End */

/* Better way to make Zoo */
var createAnimal = {
	function () {
		console.log( this.animal, this.genus, this.species, this.sex );
		// return this.name, this.genus, this.species;
	}
}

	/* Lions */
	var Lion = Object.create(createAnimal, {
			animal: {value: 'Lion'},
			genus: {value: 'Panthera'},
			species: {value: 'Panthera Leo'},
	});

		var TimTheLion = Object.create(createAnimal, {
			name: {value: 'Tim the Lion'},
			sex: {value: 'male'}
		});

		var KatnissTheLioness = Object.create(Lion, {
			name: {value: 'Katniss The Lioness'},
			sex: {value: 'female'}
		});

	console.log('We inherit all the properties of Lion');
	console.log( TimTheLion );
	console.log( KatnissTheLioness );


