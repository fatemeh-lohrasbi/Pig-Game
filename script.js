'use strict';

/* Selecting elements */
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
let currentScore = 0;

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
        current0El.textContent = currentScore;//change later    

        // if it is 1 switch to next player
    }else{

    }
});