"use strict";

let randomNumber = Math.floor(Math.random() * 21);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  //when there is no guess
  if (!guess) {
    displayMessage("No number");
  } else if (guess === randomNumber) {
    document.querySelector(".number").textContent = randomNumber;
    displayMessage("Correct Number!");

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== randomNumber) {
    if (score > 1) {
      displayMessage(
        guess > randomNumber ? "Number is too high" : "Number is too low"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost!");
      score--;
      document.querySelector(".score").textContent = score;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  randomNumber = Math.floor(Math.random() * 21);
  score = 20;
  document.querySelector(".number").textContent = randomNumber;
  document.querySelector(".score").textContent = score;

  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  displayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
