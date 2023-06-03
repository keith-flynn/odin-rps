
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

function getPlayerChoice() {
  // ask promt user to choose, save it as lowercase
  let rawPlayerSelection = prompt("Rock, paper, or scissors?");
  let playerSelection = rawPlayerSelection.toLowerCase();

  // make sure player gives an actual anser:
  if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
    return playerSelection;
  } else {
    alert("Invalid choice! Please choose either rock, paper, or scissors.");
  }

}

function playRound(playerSelection, computerSelection) {
  
}

function game() {
  return
}


let computerSelection = getComputerChoice();
console.log(computerSelection);
let playerSelection = getPlayerChoice();
console.log(playerSelection);