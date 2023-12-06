

// Scorekeeping
let wins = 0;
let losses = 0;
let ties = 0;
let announceScore = `Wins: ${wins} Losses: ${losses} Ties: ${ties}.`

// Assign 1, 2, 3 to rock, paper, scissors and RNG to roll a result
function getComputerChoice() {
  // roll 1-3
  let computerRoll = Math.floor(Math.random() * 3) + 1;
  console.log(computerRoll);

  // assign roll to string value of rock/paper/scissors and return
  let computerSelection = "";
  if (computerRoll === 1) {
    computerSelection = "rock";
  } else if (computerRoll === 2) {
    computerSelection = "paper";
  } else {
    computerSelection = "scissors";
  }

  return computerSelection;
}

// Prompt user to choose rock, paper, or scissors
function getPlayerChoice() {
  // ask promt user to choose, save it as lowercase
  let rawPlayerSelection = prompt("Rock, paper, or scissors?");
  let playerSelection = rawPlayerSelection.toLowerCase();

  // make sure player gives an actual anser:
  if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
    return playerSelection;
  } else {
    alert("Invalid choice! Please choose either rock, paper, or scissors.");
    return getPlayerChoice();
  }

}

// Run a single round of a rock, paper, scissors match
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      ties++;
      console.log("Tie.");

    } else if (computerSelection === "paper") {
      losses++;
      console.log("You lose.");
    } else {
      wins++;
      console.log("You win.");
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      wins++;
      console.log("You win.");
    } else if (computerSelection === "paper") {
      ties++;
      console.log("Tie.");

    } else {
      losses++;
      console.log("You lose.");
    }
  } else {
    if (computerSelection === "rock") {
      losses++;
      console.log("You lose.");
    } else if (computerSelection === "paper") {
      wins++;
      console.log("You win.");
    } else {
      ties++;
      console.log("Tie")

    }
  }
  updateScore();
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log(button.innerText);
  });
});
