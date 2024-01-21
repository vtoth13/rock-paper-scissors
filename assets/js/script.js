/* jshint esversion: 8 */

//Initalize the score object to keep track of wins, losses and ties
let score = {
    wins: 0,
    losses: 0,
    ties: 0
};

//Player's name variable
let playerName;

//Event listener to open popup game rules
document.getElementById('openPopup').addEventListener('click', function () {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
    document.addEventListener('keydown', handleKeyPress);
});

//Event listener to close popup
document.getElementById('closePopup').addEventListener('click', closePopup);

//Event listener to close popup when clicking overlay
document.getElementById('overlay').addEventListener('click', closePopup);

//Function to close popup
function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
    document.removeEventListener('keydown', handleKeyPress);
};

//Function to handle key press Esc
function handleKeyPress(event) {
    if (event.keyCode === 27) {
        closePopup();
    }
};

//Event listener for rock, paper and scissors button
document.getElementById('rockButton').addEventListener('click', function () {
    makeMove('rock');
});

document.getElementById('paperButton').addEventListener('click', function () {
    makeMove('paper');
});

document.getElementById('scissorsButton').addEventListener('click', function () {
    makeMove('scissors');
});

//Load the saved score from localStorage
const savedScore = JSON.parse(localStorage.getItem('score'));
if (savedScore) {
    score = savedScore;
}

//Update score element in the UI
updateScoreElement();

//Function to handle player's move
function makeMove(playerMove) {

    //Prompt for player's name
    if (!playerName) {
        playerName = prompt("Please enter your name:")
    }

    //Get the computer's move
    const computerMove = pickComputerMove();
    const resultElement = document.querySelector('.js_result')

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

    //Increment the round count
    roundCount++;

    //Display the chose move in the UI
    const movesElement = document.querySelector('.js_moves_chosen');
    movesElement.innerHTML = `
    You <img src="assets/images/${playerMove}_emoji.png" class="move_icon">
    <img src="assets/images/${computerMove}_emoji.png" class="move_icon"> Computer
    `;

    //Update the score element in the UI
    updateScoreElement();

    //Check if the game has reached 10 rounds
    if (roundCount === 10) {
        //Show overall winner
        showWinner();
    }
    //Remove the score from localStorage
    localStorage.removeItem('score');
}

//Function to randomly pick the computer's move
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

//Function to update the score element
function updateScoreElement() {
    document.querySelector('.js_score').innerHTML = `
    Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}
  `;
};

//Round count variable
let roundCount = 0;

//Event listener to open the popup show results
document.getElementById('openPopup').addEventListener('click', function () {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
    document.addEventListener('keydown', handleKeyPress);
});

// Event listener to close the popup
document.getElementById('closePopup').addEventListener('click', closePopup);
document.getElementById('closeResult').addEventListener('click', closeResult);

// Event listener to close the popup when clicking on the overlay
document.getElementById('overlay').addEventListener('click', closePopup);

// Function to close the popup
function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
    document.removeEventListener('keydown', handleKeyPress);
}

// Function to handle key presses
function handleKeyPress(event) {
    if (event.keyCode === 27) {
        closePopup();
    }
}

//Function to show overall winner
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