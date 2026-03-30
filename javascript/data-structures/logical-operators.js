// logical || OR operator
let isRaining = true;
let takeUmbrella = false;
let isSnowing = false;
let isWalking = false;

// truth table

if (isRaining || takeUmbrella) {
  console.log("statement is true");
}

// ?? nullish operator
let nullishValue = isWalking ?? "keep going";

console.log("nullish value", nullishValue);
