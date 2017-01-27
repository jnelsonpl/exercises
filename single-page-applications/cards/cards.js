// Creating the text area -
// 1 - Create the element <textarea>
// 2 - Set the ID of textarea to "ourtextarea"
// 3 - Add the <textarea> to our DOM
var aTextArea = document.createElement("TEXTAREA");
aTextArea.id = "ourtextarea";
document.body.appendChild(aTextArea);

// Create some space between text area and button
var br = document.createElement("BR");
document.body.appendChild(br);

// Create the button -
// 1 - Create the element <button>
// 2 - Set the ID of the button to "textAreaButton"
// 3 - Set the text in the button to "Create A Card"
// 4 - Append the button's text onto the button
// 5 - Append the button to the DOM
var valueButton = document.createElement("BUTTON");
valueButton.id = "textAreaButton";
var buttonText = document.createTextNode("Create a Card");
valueButton.appendChild(buttonText);
document.body.appendChild(valueButton);

// 1 & 2 - we get the ID of the button we created above and add an event listener
// which calls a function on click
// 3 - We create a function which grabs the value of any input in <textarea>
// 4 - We create a <div> and set an id of "newlycreateddiv")
// 5 - We append the DIV to the DOM and set it's innerHTML value to the value of the <textarea>
var ourButton = document.getElementById("textAreaButton");
ourButton.addEventListener("click", createCard);

var i = 1;
function createCard () {
	var textAreaInput = document.getElementById("ourtextarea").value;

		// create card here
			var createDivCard = document.createElement("DIV");
			createDivCard.id = `newlycreateddiv--${i}`;
			createDivCard.classList.add("create_card"); // add the css
			document.body.appendChild(createDivCard);
		// end card creation
		// the div's text should be exactly what was in the textarea
			createDivCard.innerHTML = textAreaInput;

			for (var j = 0; j < 3; j++) {
				var br = document.createElement("BR");
				createDivCard.appendChild(br);
			}

			// Lets create a delete button for each card we create as well
			// Same steps as creating a button
			// INSERT BUTTON INTO DIV 
			var deleteButton = document.createElement("BUTTON");
			deleteButton.id = `deletebutton--${i}`;
			var deleteButtonText = document.createTextNode("Delete This Card");
			deleteButton.appendChild(deleteButtonText);
			createDivCard.appendChild(deleteButton);
			i++;

			var deleteTheCard = document.getElementById(deleteButton.id);
			deleteTheCard.addEventListener("click", function() {
				this.parentNode.parentNode.removeChild(this.parentNode);
			});
}




