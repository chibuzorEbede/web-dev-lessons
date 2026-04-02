//notes app javascript

// variables
const addNoteButton = document.querySelector(".add-button");
const newNote = document.querySelector(".new-note");
const textBox = document.querySelector("#textbox");
const note = document.querySelector(".note");

//
function addNote(event) {
  // make the text input appear
  newNote.classList.add("appear");

  console.log("click events", event);

  // add text inside

  // save our text
}

// read input value from the text box
function readTextBox(event) {
  //   let notesArray = [];

  let inputData = "";
  if (event.key === "Enter") {
    // get the values of the input element (the text box)
    inputData = event.target.value;

    // set the value as the note elements content
    note.textContent = inputData;
  }

  console.log("you entered", inputData);
}

// event listeners
textBox.addEventListener("keydown", readTextBox); // keyboard event
addNoteButton.addEventListener("click", addNote); // mouse event
