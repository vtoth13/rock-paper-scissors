/* jshint esversion: 8 */

//Initalize the score object to keep track of wins, losses and ties
let score = {
    wins: 0,
    losses: 0,
    ties: 0
};

//Player's name variable
let playerName = localStorage.getItem("playerName");

//Display results in UI
const resultElement = document.querySelector('.js_result');

//Variable for moves left
let movesLeft = 10;

//Get reference to the start button, result container, and game container
const startButton = document.getElementById('start-game');
const resultContainer = document.getElementById('section-results');
const gameContainer = document.getElementById('game-container');

/**Function to initiate the game */
const initiateGame = function () {

    startButton.style.display = 'none';

    resultContainer.classList.remove('hide');
    gameContainer.classList.remove('hide');

    //Prompt for player's name
    if (!playerName || playerName.trim() === "") {
        do {
            playerName = prompt("Please enter your name:");
        } while (!playerName || playerName.trim() === "");

        localStorage.setItem("playerName", playerName);
    }
};

startButton.addEventListener('click', initiateGame);

//Event listener to open popup game rules
document.getElementById('open-popup').addEventListener('click', function () {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
    document.addEventListener('keydown', handleKeyPress);
});

//Event listener to close popup
document.getElementById('close-popup').addEventListener('click', closePopup);

//Event listener to close popup when clicking overlay
document.getElementById('overlay').addEventListener('click', closePopup);

/**Function to close popup */
function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
    document.removeEventListener('keydown', handleKeyPress);
}

/**Function to handle key press Esc */
function handleKeyPress(event) {
    if (event.keyCode === 27) {
        closePopup();
    }
}

//Event listener for rock, paper and scissors button
document.getElementById('rock-button').addEventListener('click', function () {
    makeMove('rock');
});

document.getElementById('paper-button').addEventListener('click', function () {
    makeMove('paper');
});

document.getElementById('scissors-button').addEventListener('click', function () {
    makeMove('scissors');
});

//Load the saved score from localStorage
const savedScore = JSON.parse(localStorage.getItem('score'));
if (savedScore) {
    score = savedScore;
}

//Update score element in the UI
updateScoreElement();

/**Function to handle player's move */
function makeMove(playerMove) {

    //Get the computer's move
    const computerMove = pickComputerMove();

    //Determine the result of the round
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

    //Decreasing moves left
    movesLeft--;

    /**Display the moves left in the UI */
    function updateMovesLeftDisplay() {
        document.getElementById('moves-left-display').textContent = movesLeft;
    }

    // Call the function initially to display the initial value
    updateMovesLeftDisplay();

    //Display the chose move in the UI
    const movesElement = document.querySelector('.js_moves_chosen');
    movesElement.innerHTML = `
    ${playerName} <img src="assets/images/${playerMove}_emoji.png" class="move_icon"> _____
    <img src="assets/images/${computerMove}_emoji.png" class="move_icon"> Computer
    `;

    //Update the score element in the UI
    updateScoreElement();

    //Check if the game has reached 10 rounds
    if (movesLeft === 0) {
        //Show overall winner
        showWinner();
    }
    //Remove the score from localStorage
    localStorage.removeItem('score');
}

/**Function to randomly pick the computer's move */
function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove;

    if (randomNumber < (1 / 3)) {
        computerMove = 'rock';
    } else if (randomNumber < (2 / 3)) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }

    return computerMove;
}

/**Function to update the score element */
function updateScoreElement() {
    document.querySelector('.js_score').innerHTML = `
    Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}
  `;
}

//Event listener to open the popup show results
document.getElementById('open-popup').addEventListener('click', function () {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
    document.addEventListener('keydown', handleKeyPress);
});

// Event listener to close the popup
document.getElementById('close-popup').addEventListener('click', closePopup);

// Event listener to close the popup when clicking on the overlay
document.getElementById('overlay').addEventListener('click', closePopup);

/**Function to close the popup */
function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
    document.removeEventListener('keydown', handleKeyPress);
}

/**Function to handle key presses */
function handleKeyPress(event) {
    if (event.keyCode === 27) {
        closePopup();
    }
}

/**Function to show overall winner */
function showWinner() {
    const resultElement = document.getElementById('winner');
    const popupResult = document.getElementById('popup-result');

    if (score.wins > score.losses) {
        resultElement.innerHTML = `${playerName} is the overall winner!<br>Do you want to play again?`;
    } else if (score.losses > score.wins) {
        resultElement.innerHTML = 'Computer is the overall winner!<br>Do you want to play again?';
    } else {
        resultElement.innerHTML = 'The game ends in a tie!<br>Do you want to play again?';
    }

    popupResult.style.display = 'block';


    //Hide the rock, paper and scissors buttons
    document.getElementById('rock-button').style.display = 'none';
    document.getElementById('paper-button').style.display = 'none';
    document.getElementById('scissors-button').style.display = 'none';
}

//Reload page when play again or not

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('start-again').addEventListener('click', function () {
        location.reload();
    });
    document.getElementById('reload-button').addEventListener('click', function () {
        alert("Thanks for playing!");
        location.reload();
        localStorage.removeItem('playerName');
    });
});