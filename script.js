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
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0,0];
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function(){
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active'); 
}

/* rolling dice functtionality */
btnRoll.addEventListener('click', function () {
    // 1. Generating a random dice roll
    const diceNum = Math.trunc(Math.random() * 6) + 1;
    console.log(diceNum);

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceNum}.png`;



    // 3. Cheked for rolled 1 
    if(diceNum !== 1){
        //if it is not 1 add dice to current score
        currentScore += diceNum;
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;

        // if it is 1 switch to next player
    }else{
        switchPlayer();

    }
});

btnHold.addEventListener('click', function(){
    console.log('hold')
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer] ;

    // 2. Check if player's score is > 100
    // Finish the game

    // switch to the next player
    switchPlayer();

})