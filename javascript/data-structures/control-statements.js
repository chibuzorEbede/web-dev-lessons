/*
Control 
--
if 
else
do
while
-
*/

// if statements

let number1 = 2000;

let number2 = 100;

// a block of code
if (number1 > number2) {
  console.log("You should take number1");
} else {
  console.log("You should take number 2");
}

//
let weather = "stormy";

if (weather === "rainy") {
  console.log("take your jacket");
} else if (weather === "snowing") {
  console.log("take your car");
} else {
  console.log("you can go the office");
}

let player1 = {
  name: "scot",
  point: 0,
  answer: "red",
};

let player2 = {
  name: "mike",
  point: 0,
  answer: "white",
};
let player3 = {
  name: "mike",
  point: 0,
  answer: "white",
};
let player4 = {
  name: "mike",
  point: 0,
  answer: "white",
};

let correctAnswer = "red";

if (player1.answer === correctAnswer) {
  player1.point = player1.point + 1;
  console.log("You are a winner");
}

if (player2.answer === correctAnswer) {
  player2.point = player2.point + 1;
  console.log("You are a winner");
}
if (player3.answer === correctAnswer) {
  player1.point = player1.point + 1;
  console.log("You are a winner");
}

if (player4.answer === correctAnswer) {
  player2.point = player2.point + 1;
  console.log("You are a winner");
}

console.log("player1", player1);
console.log("player2", player2);

// use conditionals to make a simple quiz game
