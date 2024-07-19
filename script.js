let humanScore = 0;
let computerScore = 0;
const choices = ["rock", "scissor", "paper"];
let randomNumber = Math.trunc(Math.random() * 3);

// Computer
const getComputerChoice = function () {
  return choices[randomNumber];
};

// user
const getHumanChoice = function () {
  const userChoice = prompt(
    "Enter your choice ('rock','scissor','paper'): "
  ).toLowerCase();
  return userChoice;
};

const playRound = function (humanChoice, computerChoice) {
  if (humanChoice === computerChoice) console.log("It's a Tie! Try Again.");
  else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }
};

let computerSelection = getComputerChoice();

const playGame = function () {
  for (let i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    console.log("You : " + humanSelection);
    randomNumber = Math.trunc(Math.random() * 3);
    computerSelection = getComputerChoice();
    console.log("Computer : " + computerSelection);
    playRound(humanSelection, computerSelection);

    console.log(
      `Current Score: \nYou : ${humanScore}\nComputer : ${computerScore}`
    );
  }

  if (humanScore === computerScore) return "It's a tie";
  return humanScore > computerScore
    ? `You Win! (${humanScore} > ${computerScore}) `
    : `Computer Win! (${computerScore} > ${humanScore}) `;
};

console.log(playGame());
