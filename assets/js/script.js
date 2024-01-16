/* jshint esversion: 8 */

let score = {
    wins: 0,
    losses: 0,
    ties: 0
};

document.getElementById('rockButton').addEventListener('click', function () {
    makeMove('rock');
});

document.getElementById('paperButton').addEventListener('click', function () {
    makeMove('paper');
});

document.getElementById('scissorsButton').addEventListener('click', function () {
    makeMove('scissors');
});

const savedScore = JSON.parse(localStorage.getItem('score'));
if (savedScore) {
    score = savedScore;
}

const modal = document.querySelector('#modal');
const overlay = document.querySelector('#overlay');
const btnCloseModal = document.querySelector('#closeModal');
const btnOpenModal = document.querySelector('#openModal');

document.addEventListener('DOMContentLoaded', function () {

    btnOpenModal.addEventListener('click', openModal);

    btnCloseModal.addEventListener('click', closeModal);

    overlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });

});


const openModal = function () {
    modal.classList.remove('modal_hidden');
    overlay.classList.remove('overlay_hidden');
};

const closeModal = function () {
    modal.classList.add('modal_hidden');
    overlay.classList.add('overlay_hidden');
};

updateScoreElement();

function makeMove(playerMove) {
    const computerMove = pickComputerMove();
    const resultElement = document.querySelector('.js_result')

    if (playerMove === computerMove) {
        resultElement.innerHTML = 'Tie';
        score.ties += 1;

    } else if (
        (playerMove === 'rock' && computerMove === 'scissors') ||
        (playerMove === 'paper' && computerMove === 'rock') ||
        (playerMove === 'scissors' && computerMove === 'paper')
    ) {
        resultElement.innerHTML = 'You win!';
        score.wins += 1;
    } else {
        resultElement.innerHTML = 'You lose!';
        score.losses += 1;
    }

    const movesElement = document.querySelector('.js_moves_chosen');
    movesElement.innerHTML = `
    You <img src="assets/images/${playerMove}_emoji.png" class="move_icon">
    <img src="assets/images/${computerMove}_emoji.png" class="move_icon"> Computer
    `;

    updateScoreElement();
    localStorage.removeItem('score');
}

function resetScore() {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };

    updateScoreElement();
    localStorage.removeItem('score');
}

function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = 'rock';

    if (randomNumber < (1 / 3)) {
        computerMove = 'rock';
    } else if (randomNumber < (2 / 3)) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }

    return computerMove;
}

function updateScoreElement() {
    document.querySelector('.js_score').innerHTML = `
    Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}
  `;
}