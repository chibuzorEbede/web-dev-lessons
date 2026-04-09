class DiceGame {
  // private properties
  #dice = 0;
  //   #scores = 0;
  constructor(player, level, score) {
    this.player = player;
    this.level = level;
    this.score = score;
  }

  //   get getPlayerScore() {
  //     let newScore = (this.#scores += 1);
  //     return newScore;
  //   }

  get rollDice() {
    let randomNumber = Math.ceil(Math.random() * 6);
    this.#dice = randomNumber;

    if (this.level > 5) {
      this.#dice += 1;
    }
    return randomNumber;
  }
}

const gameobject = new DiceGame("john", 0, 0);

console.log("new score", gameobject.getPlayerScore);

gameobject.score = 20;

console.log("the currnet gameobject", gameobject);
