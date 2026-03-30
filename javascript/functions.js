let name = "ben";

// parameters
function greetPerson(name) {
  // function body
  "Hello, " + name;
  return;
}

// function definition

// function execution
greetPerson("kate");

// value returned
let returnedValue = greetPerson("jane");
console.log("returned value", returnedValue);

function showProfile() {
  greetPerson("kemi");
  console.log("Welcome to our application");
}

// ()=>{} - arrow functions
const printStars = (numberOfStars) => {
  for (let i = 0; i < numberOfStars; i++) {
    console.log("*\n");
  }
};

printStars(10);

// scope
// at which areas of the code can our variable work

// impure function

function notGlobal() {
  let globalVariable = "jan";
  console.log("the global variable is ", globalVariable);
}

function isGlobal(value) {
  let globalVariable = "paul";

  console.log(" the current value for global is ", globalVariable);
}

isGlobal();
notGlobal();

// one plate of noodles => 1pack, 0.3 onion, oil 0.4 oil

function makeNoodlesForOne() {
  let onePack = 2;
  let onionQuantity = 0.3;
  let oilQuantity = 0.4;

  const onePlate = {
    numberOfPacks: onePack,
    amountOfOnion: onionQuantity,
    amountOfOil: oilQuantity,
  };

  console.log("make for one is \n", onePlate);
  return onePlate;
}

function makeNoodlesForMany(numberOfPeople) {
  const makeForOne = makeNoodlesForOne();

  const forMany = {
    numberOfPacks: makeForOne.numberOfPacks * numberOfPeople,
    amountOfOnion: makeForOne.amountOfOnion * numberOfPeople,
    amountOfOil: makeForOne.amountOfOil * numberOfPeople,
  };

  console.log("this is the required amount for ", numberOfPeople);
  console.log(forMany);
  return forMany;
}

makeNoodlesForOne();
makeNoodlesForMany(2);

// value vs reference

// ram
// [t1, player1];

let t1 = {
  name: "table one",
  color: "red",
};

let t2 = t1;

t2.color = "green";
console.log("t2 color is ", t2.color);
console.log("t1 color is ", t1.color);

// game
let player1 = {
  name: "james",
  score: 0,
};

// immutability
let numebrOfPeople = "peter";

let newNumber = "john";

// arrays and objects

newNumber = 28;
console.log("the new number is ", newNumber);
console.log("the number of people ", numebrOfPeople);

const data = {
  time: 3,
  venue: "lagos",
};

const data2 = { ...data };

data2.time = 4;

console.log("new copy", data2);
console.log("old copy", data);

function modifyFunction(myObj) {
  let localCopy = { ...myObj };
}

// passing the function to other functions
const multiplyBy2 = (value) => {
  let valueBy2 = 2 * value;
  console.log("multiply by 2...", valueBy2);
  return valueBy2;
};

const multiplyBy5 = (value) => {
  let valueBy5 = 5 * value;
  console.log("multiply by 5...", valueBy5);
  return valueBy5;
};

function multiple(fn) {
  let multiplyByTen = fn(10);

  console.log("new value for multiple is...", multiplyByTen);
  // return newVal;
}

multiple(multiplyBy5);
