let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    computerSelection = Math.random();
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
            computerScore = ++computerScore;
            return "Computer picked paper. You lose!";
        } else {
            playerScore = ++playerScore;
            return "Computer picked scissors. You win!";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore = ++playerScore;
            return "Computer picked rock. You win!";
        } else if (computerSelection === "paper") {
            return "You both picked paper. Tie!";
        } else {
            computerScore = ++computerScore;
            return "Computer picked scissors. You lose!";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerScore = ++computerScore;
            return "Computer picked rock. You lose!";
        } else if (computerSelection === "paper") {
            playerScore = ++playerScore;
            return "Computer picked paper. You win!";
        } else {
            return "You both picked scissors. Tie!";
        }
    }
}

function game() {
    for (let counter = 0; counter < 5; counter++) {
        let playerSelection = prompt("Choose rock, paper or scissors: ", "");
        let computerSelection = getComputerChoice();
        if (counter < 4) {
            alert(`${playRound(playerSelection, computerSelection)} The score is ${playerScore} - ${computerScore}.`);
        } else {
            if (playerScore > computerScore) {
                alert(`The computer picked ${computerSelection}. You won the match! The final score was ${playerScore} - ${computerScore}.`);
            } else if (playerScore < computerScore) {
                alert(`The computer picked ${computerSelection}. You lost the match! The final score was ${playerScore} - ${computerScore}.`);
            } else {
                alert(`The computer picked ${computerSelection}. It was a tie! The final score was ${playerScore} - ${computerScore}.`)
            }
        }
    }
    playerScore = 0;
    computerScore = 0;
}