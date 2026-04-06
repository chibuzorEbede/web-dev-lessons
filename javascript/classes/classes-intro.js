// procedural -
// object oriented - Java, Javascript,
// functional - Haskell

// OOP - object oriented programming

// classes
// let ronaldo = {
//   shot: 120,
//   height: 1.7,
//   shirtColor: "red",

// };
// let messi = {
//   shot: 120,
//   height: 1.5,
//   shirtColor: "red",
// };

// normal string
let paul = "hi paul";
let age = 20;
// string using backticks

// let paulliterla = `hello paul ${age}`;

// classes serve as the blueprint for the objects

class FootballPlayer {
  // data
  constructor(name, shot, height, shirtColor, skillLevel) {
    this.name = name;
    this.shot = shot;
    this.height = height;
    this.shirtColor = shirtColor;
    this.skillLevel = skillLevel;
  }

  // methods
  dribble() {
    return `${this.name}  dribbled you `;
  }
  run() {
    return `${this.height} is running`;
  }
}

const ronaldoPlayer = new FootballPlayer("ronaldo", 150, 1.7, "green");
const messiPlayer = new FootballPlayer("messi", 160, 1.6, "red");

// console.log("ronaldo: \n", ronaldoPlayer);
// console.log("messi : \n", messiPlayer);

console.log(ronaldoPlayer.dribble());
console.log(messiPlayer.dribble());
console.log(messiPlayer.run());

// concepts in oop

// inheritance - a way for the child objects to get access to the properties of the parent object

// Base or Parent class
class Person {
  constructor(name, height, shirtColor) {
    this.name = name;
    this.height = height;
    this.shirtColor = shirtColor;
  }

  run() {
    return `${this.height} is running`;
  }
}

// child class
class Player extends Person {
  //skillLevel
  // shot
  // dribble
  constructor(name, height, shirtColor, skillLevel, shot) {
    super(name, height, shirtColor);
    this.skillLevel = skillLevel;
    this.shot = shot;
  }
}

// referee class
class Referee extends Person {
  constructor(name, height, shirtColor, cards) {
    super(name, height, shirtColor);
    this.cards = cards;
  }
}

// salah player
const salah = new Player("salah", 1.7, "purple", 120, 100);

console.log("salah player", salah);

// referee john
const johnRef = new Referee("john", 1.6, "black", 10);

console.log("ref", johnRef);

// make a class to represent cars
// it should a parent class -
// it also should have children classes - hybrid, electric, petrol

// polymorphism

// encapsulation -

// abstraction
