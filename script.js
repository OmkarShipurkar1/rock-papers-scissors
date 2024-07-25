// initial
let humanScore = 0;
let computerScore = 0;
let randomNumber = Math.trunc(Math.random() * 3);
const choices = ["rock", "scissors", "paper"];
const result = document.querySelector(".result");

const rockBtn = document.querySelector(".rock");
const scissorsBtn = document.querySelector(".scissors");
const paperBtn = document.querySelector(".paper");

const p = document.createElement("p");
const cp = document.createElement("p");
const hp = document.createElement("p");

const scores = document.querySelector(".scores");
const userScore = document.querySelector(".user-score");
const compScore = document.querySelector(".comp-score");

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

cp.classList.add("font-cp");
hp.classList.add("font-hp");

let playing = true;

const playRound = function (humanChoice, computerChoice) {
  result.classList.add("bg");
  p.style.fontSize = "3rem";
  scores.classList.add("styles");
  p.style.textAlign = "center";

  cp.textContent = `Computer Choose : ${computerChoice}`;
  hp.textContent = `You Choose : ${humanChoice}`;

  result.appendChild(hp);
  result.appendChild(cp);

  if (humanChoice === computerChoice) {
    p.textContent = "It's a Tie! Try Again.";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    p.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;

    humanScore++;
  } else {
    p.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  }

  userScore.textContent = `YOUR SCORE : ${humanScore}`;
  userScore.style.textAlign = "left";

  compScore.textContent = `COMP SCORE : ${computerScore}`;
  compScore.style.textAlign = "right";

  if (humanScore === 5) {
    scores.classList.remove("styles");
    playing = false;
    userScore.textContent = "You Win!";
    userScore.style.textAlign = "center";
    compScore.remove();
  }

  if (computerScore === 5) {
    scores.classList.remove("styles");
    playing = false;
    compScore.textContent = "Computer Win!";
    compScore.style.textAlign = "center";
    userScore.remove();
  }
  result.appendChild(p);
};

rockBtn.addEventListener("click", function () {
  randomNumber = Math.trunc(Math.random() * 3);
  const computerSelection = getComputerChoice();
  if (playing === true) playRound("rock", computerSelection);
});

scissorsBtn.addEventListener("click", function () {
  randomNumber = Math.trunc(Math.random() * 3);
  const computerSelection = getComputerChoice();
  if (playing === true) playRound("scissors", computerSelection);
});

paperBtn.addEventListener("click", function () {
  randomNumber = Math.trunc(Math.random() * 3);
  const computerSelection = getComputerChoice();
  if (playing === true) playRound("paper", computerSelection);
});
