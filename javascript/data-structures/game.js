let luckyNumbers = [2, 4, 5, 0, 1, 3, 10, 20];
let luckyYou = {
  name: "juan",
  score: 12,
};

// (initializer;condition;increment)
// is even or odd
// always check that the condition will end
// && - and operator
// || - or operator
// ?? - nullish coalescing operator

for (let n = 0; n < luckyNumbers.length - 1; n = n + 1) {
  if (luckyNumbers[n] % 2 !== 0 && luckyNumbers[n] === 3) {
    luckyYou.score = luckyYou.score + 3;
  }

  console.log("lucky you now is", luckyYou);
}
