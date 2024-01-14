let score = {
    wins: 0,
    losses: 0,
    ties: 0
};

const savedScore = JSON.parse(localStorage.getItem('score'));
if (savedScore) {
    score = savedScore;
}

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