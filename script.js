'use strict';
/* Selecting elements */
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
/* Starting condition */
let scores, currentScore, activePlayer, playing;
const init = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    diceEl.classList.add('hidden');
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}
init();
const switchPlayer = function () {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}
/* Rolling dice functtionality */
btnRoll.addEventListener('click', function () {
    if (playing) {
        // 1. Generating a random dice roll
        const diceNum = Math.trunc(Math.random() * 6) + 1;
        console.log(diceNum);
        // 2. Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${diceNum}.png`;
        // 3. Cheked for rolled 1 
        if (diceNum !== 1) {
            //if it is not 1 add dice to current score
            currentScore += diceNum;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
            // if it is 1 switch to next player
        } else {
            switchPlayer();
        }
    }
});
/* Hold button */
btnHold.addEventListener('click', function () {
    if (playing) {
        // 1. Add current score to active player's score
        scores[activePlayer] += currentScore;
        document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
        // 2. Check if player's score is > 100
        // Finish the game
        if (scores[activePlayer] >= 50) {
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            // switch to the next player
            switchPlayer();
        }
    }
})
/* Reset game */
btnNew.addEventListener('click', init);