# *Rock Paper Scissors Game*

Welcome to the Rock Paper Scissors game! This simple web-based game allows you to play the classic Rock, Paper, Scissors game against the computer. The game keeps track of your wins, losses, and ties, and it provides an overall winner after a set number of rounds.

## User Stories

- As a player, I want to have fun with the game.

- As a player, I want to be prompted to enter my name if it's my first time playing or if my name hasn't been set.

- As a player, I want to see the result of each round displayed on the screen, indicating whether I won, lost, or it's a tie.

- As a player, I want to see the current score (wins, losses, ties) updated after each round.

- As a player, I want to view the rules of the game by clicking on the "Game Rules" button.

- As a player, I want to know the overall winner after a set number of rounds.

- As a player, I want the option to play again after seeing the overall winner.

- As a player, I want to be able to close the game rules popup by pressing the 'Esc' key.

## Getting Started

To start playing the game, simply click the "Start Game" button. If it's your first time playing or if your name hasn't been set, you will be prompted to enter your name. Your name will be saved for future sessions.

## How to Play

After starting the game, you can choose Rock, Paper, or Scissors by clicking on the respective buttons.
 - The computer will randomly select its move.
 - The result of the round will be displayed, indicating whether you won, lost, or it's a tie.
 - The score will be updated accordingly.
 - After 10 rounds it is shown who the overall winner is

## Game Rules

Objective: The objective of Rock, Paper, and Scissors is to defeat your opponent by choosing an item that beats their chosen item.

### Items:
- Rock: Represented by a closed fist, rock crushes scissors.
- Paper: Represented by an open hand, paper covers rock.
- Scissors: Represented by a fist with the index and middle finger extended, scissors cut paper.

### Winning and Losing
1. Rock crushes scissors, so if you choose a rock and your opponent chooses scissors, you win.
2. Paper covers rock, so if you choose paper and your opponent chooses rock, you win.
3. Scissors cut paper, so if you choose scissors and your opponent chooses paper, you win.
#### Ties: If both players choose the same item, the game is a tie, and it is usually played again to determine the winner.

## Features
- **Score Tracking:** The game keeps track of wins, losses, and ties for each player.
- **Player Initialization:** Allows players to input their names to personalize the game experience.
- **UI Display:** Results are displayed in the user interface (UI) for easy understanding.
- **Moves Left Counter:** Displays the number of moves left for the player.
- **Game Rules Popup:** Provides a popup with game rules for player reference.
- **Responsive Design:** The game UI is responsive and adjusts well to different screen sizes.
- **LocalStorage:** Utilizes localStorage to save and load the player's name and score between sessions.
- **Random Computer Moves:** The computer opponent makes random moves (rock, paper, or scissors).
- **Overall Winner Announcement:** At the end of the game, announce the overall winner or if it's a tie.
- **Play Again Option:** Allows players to choose to play again, resetting the game.
- **Esc Key Handling:** This enables closing the popup with the Esc key.

#### If you want to play again, click the "Yes" button in the popup after determining the overall winner. If you decide not to play again, click the "No" button. By clicking the "No" button, the name is going to be removed, and a new player name can be entered.

## Testing
### Responsive Testing
- [Mobile](documentation/chrome_phone.PNG)
- [Desktop](documentation/safari_computer.png)

### Compatibility Testing
- [Google Chrome - Desktop](documentation/chrome_desktop.png)
- [Safari - Desktop](documentation/safari_desktop.png)
- [MS Edge - Desktop](documentation/ms_edge_desktop.jpeg)
- [Google Chrome - Mobile](documentation/chrome_phone.PNG)
- [Safari Mobile](documentation/safari_phone.PNG)

## Technologies Used

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) - was used as the foundation of the site
- [CSS](https://developer.mozilla.org/en-US/docs/Web/css) - was used to add the styles and layout of the site
- [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) - was used to arrange items symmetrically on the page
- [Google Fonts](https://fonts.google.com) - were used to import fonts
- [VS Code](https://code.visualstudio.com) - was used as the main tool to write and edit code
- [GitHub](https://github.com) - was used to host the code of the website
- [GitHub Pages](https://pages.github.com) - was used to present the website
- [Canva](https://canva.com) - was used for the emojis and the planning of the game

## Acknowledgments