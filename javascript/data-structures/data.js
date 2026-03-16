// objects

const PI = 3.142;

const age = 21;

const isRaining = false;

const khan = {
  height: "1.7m",
  speed: 200,
  power: 300,
};

const table = {
  color: "black",
  type: "wooden",
  numberOfLegs: 4,
};

console.log("table", table);

table.shape = "round shape";

table.hasCover = false;

console.log("table after update", table);

//

const Quiz = {
  questions: {
    question1: "How many sides does a square have?",
    question2: "is earth a planet?",
  },
  answers: {
    answer1: 4,
    answer2: "yes",
  },
};

let userAnswer = "yes";

// operators
// add +
//  substract -
// divide /
// multiply *
// greater than >
// less than <
// assingment =
// equality ===
//

const isCorrect = Quiz.answers.answer2 === userAnswer;
console.log("quiz", Quiz);
console.log("user answer", isCorrect);

//input

// Make a guess game
// when the user input matches what you have in the game
// win only happens when the input match

// arrays
