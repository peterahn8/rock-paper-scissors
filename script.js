let playerSelection;
let computerSelection;

function getComputerChoice() {
    let computerSelection = Math.random();
    if (computerSelection < (1/3)) {
        return "rock";
    } else if (computerSelection < (2/3)) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "You both picked rock. Tie!";
        } else if (computerSelection === "paper") {
            return "Computer picked paper. You lose!";
        } else {
            return "Computer picked scissors. You win!";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "Computer picked rock. You win!";
        } else if (computerSelection === "paper") {
            return "You both picked paper. Tie!";
        } else {
            return "Computer picked scissors. You lose!";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "Computer picked rock. You lose!";
        } else if (computerSelection === "paper") {
            return "Computer picked paper. You win!";
        } else {
            return "You both picked scissors. Tie!";
        }
    }
}