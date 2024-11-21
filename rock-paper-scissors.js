//Rock, Paper, Scissors

const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;
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
    case SCISSORS:
      return "✂️";
    default:
      return INVALIDCHOICE;
  }
}

function generateComputerChoice() {
  const randomChoice = (Math.round(Math.random() * 100) % 3) + 1;
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
      SCISSORS +
      " for scissors ✂️\nChoice:"
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
