var Predator = (function () {

	/* 
	 * These anonymous functions cannot be seen
	 */
	 var lineBreak = document.createElement("BR");

	function showCarnivores (carnivores) {
		const elCarnivore_List = document.getElementById("carnivore_list");
		elCarnivore_List.append("Carnivores: ");
		elCarnivore_List.appendChild(lineBreak);

		for (carnivore in carnivores) /* We use the singular variable carnivore here, 
									   * as we want the loop to go over each item in
									   * array */
			elCarnivore_List.innerHTML += carnivores[carnivore] + `<br />`;
										
	}

	function showHerbivores (herbivores) {
		const elHerbivore_List = document.getElementById("herbivore_list");
		elHerbivore_List.append("Herbivores: ");
		elHerbivore_List.appendChild(lineBreak);
	

		for (var herbivore = 0; herbivore < herbivores.length; herbivore++)
			elHerbivore_List.innerHTML += herbivores[herbivore] + `<br />`;

	}

// We use 'Predator' to tell us that to call on another IFFE function.
Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);

})(Predator || {});