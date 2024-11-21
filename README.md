# Rock, Paper, Scissors CLI Game

This is a simple Rock, Paper, Scissors game implemented in JavaScript for the command line interface (CLI).

## Game Description

The game allows a user to play Rock, Paper, Scissors against the computer. The user is prompted to enter their choice, and the computer randomly generates its choice. The game then determines the winner and displays the result. The user can choose to play again after each round.

## How to Play

1. Run the script in a JavaScript runtime environment that supports `prompt` and `confirm` functions (e.g. deno).
2. Follow the prompts to enter your choice:
  - Enter `1` for Rock 🪨
  - Enter `2` for Paper 📰
  - Enter `3` for Scissors ✂️
3. Confirm your choice when prompted.
4. The computer will randomly select its choice.
5. The result of the game will be displayed:
  - "It's a tie ⚠️" if both choices are the same.
  - "You won 🥳" if the user wins.
  - "Computer won 😭" if the computer wins.
6. Choose to play again or exit the game.

## Code

```javascript
const ROCK = 1;
const PAPER = 2;
const SCISSOR = 3;
const INVALIDCHOICE = "Invalid Input❗";
const TIE = 0;
const USERWON = 1;
const COMPUTERWON = 2;

function getChoiceVisual(choice) {
  switch (choice) {
   case ROCK:
    return "🪨";
   case PAPER:
    return "📰";
   case SCISSOR:
    return "✂️";
   default:
    return INVALIDCHOICE;
  }
}

function generateComputerChoice() {
  const randomChoice = Math.round(Math.random() * 100) % 3 + 1;
  let choiceVisual = getChoiceVisual(randomChoice);

  console.log("Computer has chosen: " + choiceVisual);

  return randomChoice;
}

function userChoice() {
  const userInput = +prompt(
   "Enter " +
    ROCK +
    " for Rock 🪨\nEnter " +
    PAPER +
    " for paper 📰\nEnter " +
    SCISSOR +
    " for scissor ✂️\nChoice:"
  );

  let choiceVisual = getChoiceVisual(userInput);

  if (choiceVisual === INVALIDCHOICE) {
   console.clear();
   console.log(choiceVisual);
   return userChoice();
  }

  console.log("You choose " + choiceVisual);

  if (!confirm("Please confirm your Choice:")) {
   console.clear();
   return userChoice();
  }

  return userInput;
}

function generateResultMsg(result) {
  switch (result) {
   case TIE:
    return "It's a tie ⚠️";
   case USERWON:
    return "You won 🥳";
   case COMPUTERWON:
    return "Computer won 😭";
  }
}

function gameResult(userChoose, computerChoose) {
  const resultMsg = generateResultMsg((userChoose - computerChoose + 3) % 3);
  console.log(resultMsg);
}

function game() {
  const userChoose = userChoice();
  const computerChoose = generateComputerChoice();

  gameResult(userChoose, computerChoose);

  if (confirm("Want to play again❓ : ")) {
   console.clear();
   game();
  }
}

game();
```