"use strict";

const Player0El = document.querySelector(".player--0");
const Player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");

let currentScore, activePlayer, playing, scores;

const init = function () {
  scores = [0, 0];

  currentScore = 0;
  activePlayer = 0;
  playing = true;
  diceEl.classList.add("hidden");

  document.querySelector(`#score--0`).textContent = 0;
  document.querySelector(`#score--1`).textContent = 0;
  document.querySelector(`#current--0`).textContent = 0;
  document.querySelector(`#current--0`).textContent = 0;

  Player0El.classList.remove("player--winner");
  Player0El.classList.remove("player--winner");
  Player0El.classList.add("player--active");
  Player1El.classList.remove("player--active");
};
init();

const switchPlayers = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  Player1El.classList.toggle("player--active");
  Player0El.classList.toggle("player--active");
};
//Initial values

btnRoll.addEventListener("click", function () {
  if (playing) {
    //1. generate a random number between 1-6
    let diceNumber = Math.floor(Math.random() * 6) + 1;

    //2.display dice picture
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${diceNumber}.png`;

    //3. reflect the same on score
    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to another player
      switchPlayers();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    //1.add current score to active player's score when hits hold
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. check if players score is >= 100...player wins the game
    if (scores[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      diceEl.classList.add("hidden");

      console.log(`Player ${activePlayer + 1} is the winner`);
    }

    //3.switch player when hits hold
    switchPlayers();
  }
});

btnNew.addEventListener("click", function () {
  init();
});
