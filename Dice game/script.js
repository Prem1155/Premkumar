//Selecting Elements....
const scoreEl0 = document.getElementById('score--0');
const scoreEl1 = document.getElementById('score--1');

const currentEl0 = document.getElementById('current--0');
const currentEl1 = document.getElementById('current--1');

const playerEl0 = document.querySelector('.player--0');
const playerEl1 = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');
const btnNewEl = document.querySelector('.btn--new');
const btnRollEl = document.querySelector('.btn--roll');
const btnHoldEl = document.querySelector('.btn--hold');

//varaibles declared
let score, currentscore, activeplayer, player;

//reset the game functionality
let init = function () {

    currentscore = 0;
    activeplayer = 0;
    score = [0, 0];
    playing = true;

    scoreEl0.textContent = 0;
    scoreEl1.textContent = 0;
    currentEl0.textContent = 0;
    currentEl1.textContent = 0;

    diceEl.classList.add('hidden');
    playerEl0.classList.add('player--active');
    playerEl1.classList.remove('player--active');
    playerEl0.classList.remove('player--winner');
    playerEl1.classList.remove('player--winner');

}
//function call...
init();

//swtich player functionality..
const switchplayer = function () {
    document.getElementById(`current--${activeplayer}`).textContent = 0;
    currentscore = 0;
    activeplayer = activeplayer === 0 ? 1 : 0;
    playerEl0.classList.toggle('player--active');
    playerEl1.classList.toggle('player--active');

}

//hide the dice image...
diceEl.classList.add('hidden');

//Dice roll button functionality
btnRollEl.addEventListener('click', function () {
    if (playing) {

        const dice = Math.trunc(Math.random() * 6) + 1;

        diceEl.classList.remove('hidden');
        diceEl.src = `images/dice-${dice}.png`;

        if (dice !== 1) {
            // currentscore = currentscore + dice;
            currentscore += dice;
            document.getElementById(`current--${activeplayer}`).textContent = currentscore;
        } else {
            switchplayer();
        }
    }

});

//hold button functionality
btnHoldEl.addEventListener('click', function () {
    if (playing) {
        score[activeplayer] += currentscore;

        document.getElementById(`score--${activeplayer}`).textContent = score[activeplayer]; //dynamic 

        if (score[activeplayer] >= 30) {
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
            document.querySelector(`.player${activeplayer}`).classList.remove('player--active');
        }
        else {
            switchplayer();
        }
    }
});

//new game button functionality....
btnNewEl.addEventListener('click', init);


