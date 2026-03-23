// arrays

// counting in arrays starts from 0
const numberArray = [0, 6, 2, 3, 4, 5, , 4, 5, 6, 6, 7, 8, 9, 56, 12];
const stringArray = ["john", "mike", "joe"];

const mixedArray = ["john", 1, 12, "yam", true];

const firstElement = numberArray[10];

console.log("original array", mixedArray);
mixedArray.push("test");
mixedArray.push("jane");
mixedArray[0] = "james";
mixedArray[3] = "nice";
console.log("array", mixedArray);

console.log("original nunber array", numberArray);
numberArray.map((number) => {
  console.log(number + 10);
});

// pop - removes the value last from the array
// push - add a value to the end of the array
// map -
// length

// literal

("girl", "jane");

let username = " john";
let age = 30;
let color = "red";

const variableArray = [username, age, color];

console.log("var array", variableArray);

let farmer1 = {
  name: "jane",
  age: 20,
  score: 10,
};

let farmer2 = {
  name: "peter",
  age: 30,
  score: 15,
};
let farmer3 = {
  name: "john",
  age: 30,
  score: 15,
};

let farmerArray = [];

farmerArray.push(farmer1, farmer2, farmer3);

console.log("farmer array data", farmerArray);

const newfarmerArray = farmerArray.map((item) => item.score + 4);

console.log("new farmer array", newfarmerArray);

//filters

const people = [farmer1, farmer2];

console.log("people array", people);
const filterData = people.filter((item) => item.name == "peter");

console.log("filter data", filterData);

// concatenation - joins two arrays

const arrayA = [3, 5, "john"];
const arrayB = ["james", 1, 5];

const joinedArray = arrayA.concat(arrayB);

console.log("joined array value", joinedArray);

console.log("reversed", joinedArray.reverse());

// sorting arrays

let itemsArray = [4, 2, 1, 2, 1, 9, 4, 5, 3];

// copying arrays

let sortedItemArray = [...itemsArray];

console.log("unsorted", itemsArray);
console.log("sorted", sortedItemArray.sort());

let a1 = {
  color: "blue",
  name: "car",
};

let a2 = {
  color: "red",
  name: "bus",
};

let a3 = {
  name: "motorcycle",
  color: "pink",
};

// array methods
const arrayOfNames1 = ["james", "john", "esther"];
const arrayOfNames2 = [a1, a2, a3];
const unsorte1 = [1, 3, 5, 62, 6, 7, 3];

console.log(arrayOfNames1.find((item) => item === "paul"));
console.log(arrayOfNames2.find((item) => item.color === "red"));
console.log("sorted without function", unsorte1.sort());
console.log(
  "sorted with functions",
  unsorte1.sort((a, b) => a - b),
);

let fruits = ["banana", "apple", "tomato", "banana", "apple", "tomato"];
// shift
console.log("shifted", fruits.shift());
console.log("shifted", fruits.unshift("potato"));
console.log("fruits array", fruits);

// filter
console.log(fruits.filter((el) => el === "tomato"));
// forEach
fruits.forEach((item) => console.log(item));
