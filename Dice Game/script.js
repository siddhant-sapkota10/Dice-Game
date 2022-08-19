"use strict";
// selecting elements
const player0El = document.querySelector(".player--0")
const player1El = document.querySelector(".player--1")
const score0El = document.querySelector("#score--0")
const score1El = document.getElementById("score--1")
const current0El = document.getElementById("current--0")
const current1El = document.getElementById("current--1")
const diceEl = document.querySelector(".dice")
const btnNew = document.querySelector(".btn--new")
const btnRoll = document.querySelector(".btn--roll")
const btnHold = document.querySelector(".btn--hold")
// starting conditions
let scores, currentScore, activePlayer, playing
const init = function(){
  currentScore = 0;
  activePlayer = 0; 
  playing = true;
  scores = [0,0]
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add("hidden");
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    player0El.classList.add("player--active")
    player1El.classList.remove("player--active")
    player0El.classList.remove("player--winner");
    player1El.classList.remove("player--winner");
}
init()
const switchPlayer = function(){
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      currentScore = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      player0El.classList.toggle("player--active");
      player1El.classList.toggle("player--active");
}
// rolling dice funtionality

btnRoll.addEventListener("click", function(){
    if(playing){
    // log "button clicked to the console"
    console.log("button clicked!")
    // 1. Generate RDR
const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. display dice
diceEl.classList.remove("hidden")
diceEl.src = `dice-${dice}.png`
console.log(`you just rolled a ${dice}!`)
// 3. check for a rolled 1  
if(dice !== 1){
// add dice to the current score
currentScore = currentScore + dice;
document.getElementById(`current--${activePlayer}`).textContent = currentScore; 

} else{
// switch to the next player
switchPlayer()
}
    }
})

btnHold.addEventListener("click", function(){
    if(playing){
  // 1. Add current score to active player's score
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer]; 
  // 2. Check Score is already at least 100
  // Finish Game
  if (scores[activePlayer] >= 100) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--active");
      diceEl.classList.add("hidden")
       playing = false;
  } else{
  switchPlayer();
  }

  // Switch to the next player
    }
})

btnNew.addEventListener("click", init)