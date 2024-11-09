"use strict";

const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");

//Initial values
const scores = [0, 0];

let currentScore = 0;
let activePlayer = 0;

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

btnRoll.addEventListener("click", function () {
  //1. generate a random number between 1-6
  let diceNumber = Math.floor(Math.random() * 6) + 1;
  console.log(diceNumber);

  //2.display dice picture
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${diceNumber}.png`;

  //3. reflect the same on score
  if (diceNumber !== 1) {
    currentScore += diceNumber;
    console.log(currentScore);
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //switch to another player
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});

btnHold.addEventListener("click", function () {
  if ((activePlayer = 0)) {
    score0El.textContent = current0El;
  } else {
  }
});
