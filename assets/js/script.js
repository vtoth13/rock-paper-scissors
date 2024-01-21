/* jshint esversion: 8 */

let score = {
    wins: 0,
    losses: 0,
    ties: 0
};

let playerName;

let roundCount = 0;

document.getElementById('openPopup').addEventListener('click', function () {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
    document.addEventListener('keydown', handleKeyPress);
});

document.getElementById('closePopup').addEventListener('click', closePopup);

document.getElementById('overlay').addEventListener('click', closePopup);

function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
    document.removeEventListener('keydown', handleKeyPress);
};

function handleKeyPress(event) {
    if (event.keyCode === 27) {
        closePopup();
    }
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

updateScoreElement();

function makeMove(playerMove) {

    if (!playerName) {
        playerName = prompt("Please enter your name:")
    }

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

    roundCount++;

    const movesElement = document.querySelector('.js_moves_chosen');
    movesElement.innerHTML = `
    You <img src="assets/images/${playerMove}_emoji.png" class="move_icon">
    <img src="assets/images/${computerMove}_emoji.png" class="move_icon"> Computer
    `;

    updateScoreElement();

    if (roundCount === 10) {
        showWinner();
    }

    localStorage.removeItem('score');
}

function showWinner() {
    const resultElement = document.getElementById('winner');
    const popupResult = document.getElementById('popupResult');

    if (score.wins > score.losses) {
        resultElement.innerHTML = `$(playerName) is the overall winner!`;
    } else if (score.losses > score.wins) {
        resultElement.innerHTML = 'Computer is the overall winner!';
    } else {
        resultElement.innerHTML = 'The game ends in a tie!';
    }

    popupResult.style.display = 'block';
}

function resetScore() {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };

    playerName = null;
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
};