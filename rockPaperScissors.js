"use-strict";

// Scorekeeping
let wins = 0;
let losses = 0;
let ties = 0;

// Assign 1, 2, 3 to Rock, Paper, Scissors and RNG to roll a result
function getComputerChoice() {
  // roll 1-3
  let computerRoll = Math.floor(Math.random() * 3) + 1;

  // assign roll to string value of Rock/Paper/Scissors and return
  let computerSelection = "";
  if (computerRoll === 1) {
    computerSelection = "Rock";
  } else if (computerRoll === 2) {
    computerSelection = "Paper";
  } else {
    computerSelection = "Scissors";
  }

  return computerSelection;
}

// Run a single round of a Rock, Paper, Scissors match
function playRound(playerSelection) {
  let computerSelection = getComputerChoice();

  if (playerSelection === "Rock") {
    if (computerSelection === "Rock") {
      ties++;
      console.log("Tie.");
    } else if (computerSelection === "Paper") {
      losses++;
      console.log("You lose.");
    } else {
      wins++;
      console.log("You win.");
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      wins++;
      console.log("You win.");
    } else if (computerSelection === "Paper") {
      ties++;
      console.log("Tie.");
    } else {
      losses++;
      console.log("You lose.");
    }
  } else {
    if (computerSelection === "Rock") {
      losses++;
      console.log("You lose.");
    } else if (computerSelection === "Paper") {
      wins++;
      console.log("You win.");
    } else {
      ties++;
      console.log("Tie");
    }
  }
  updateScore();
}

// Called at the end of playRound() to update variable
function updateScore() {
  const resultsDiv = document.getElementById('results')
  resultsDiv.replaceChildren();
  const scoreboard = document.createElement('h2')
  scoreboard.innerText = `Wins: ${wins} Losses: ${losses} Ties: ${ties}.`;
  resultsDiv.appendChild(scoreboard);

  if (wins === 5) {
    alert('You Win!');
  } else if (losses === 5) {
    alert('You Lose!');
  }
}

// Button event listeners
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.innerHTML);
  });
});
