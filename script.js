let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNum = Math.random();
    if (randomNum < (1/3)) {
        return "rock"
    } else if (randomNum < (2/3)) {
        return "paper"
    } else {
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            const resultHeader = document.createElement("h1");
            resultHeader.textContent = `You picked ${playerSelection} and the computer picked ${computerSelection}. The score is now ${playerScore} to ${computerScore}.`;
            resultDiv.appendChild(resultHeader);
        } else if (computerSelection === "paper") {
            computerScore = ++computerScore;
            const resultHeader = document.createElement("h1");
            resultHeader.textContent = `You picked ${playerSelection} and the computer picked ${computerSelection}. The score is now ${playerScore} to ${computerScore}.`;
            resultDiv.appendChild(resultHeader);
        } else {
            playerScore = ++playerScore;
            const resultHeader = document.createElement("h1");
            resultHeader.textContent = `You picked ${playerSelection} and the computer picked ${computerSelection}. The score is now ${playerScore} to ${computerScore}.`;
            resultDiv.appendChild(resultHeader);
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore = ++playerScore;
            const resultHeader = document.createElement("h1");
            resultHeader.textContent = `You picked ${playerSelection} and the computer picked ${computerSelection}. The score is now ${playerScore} to ${computerScore}.`;
            resultDiv.appendChild(resultHeader);
        } else if (computerSelection === "paper") {
            const resultHeader = document.createElement("h1");
            resultHeader.textContent = `You picked ${playerSelection} and the computer picked ${computerSelection}. The score is now ${playerScore} to ${computerScore}.`;
            resultDiv.appendChild(resultHeader);
        } else {
            computerScore = ++computerScore;
            const resultHeader = document.createElement("h1");
            resultHeader.textContent = `You picked ${playerSelection} and the computer picked ${computerSelection}. The score is now ${playerScore} to ${computerScore}.`;
            resultDiv.appendChild(resultHeader);
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerScore = ++computerScore;
            const resultHeader = document.createElement("h1");
            resultHeader.textContent = `You picked ${playerSelection} and the computer picked ${computerSelection}. The score is now ${playerScore} to ${computerScore}.`;
            resultDiv.appendChild(resultHeader);
        } else if (computerSelection === "paper") {
            playerScore = ++playerScore;
            const resultHeader = document.createElement("h1");
            resultHeader.textContent = `You picked ${playerSelection} and the computer picked ${computerSelection}. The score is now ${playerScore} to ${computerScore}.`;
            resultDiv.appendChild(resultHeader);
        } else {
            const resultHeader = document.createElement("h1");
            resultHeader.textContent = `You picked ${playerSelection} and the computer picked ${computerSelection}. The score is now ${playerScore} to ${computerScore}.`;
            resultDiv.appendChild(resultHeader);
        }
    }
}

// function game() {
//     for (let counter = 0; counter < 5; counter++) {
//         let playerSelection = prompt("Choose rock, paper or scissors: ", "");
//         let computerSelection = getComputerChoice();
//         if (counter < 4) {
//             alert(`${playRound(playerSelection, computerSelection)} The score is ${playerScore} - ${computerScore}.`);
//         } else {
//             if (playerScore > computerScore) {
//                 alert(`The computer picked ${computerSelection}. You won the match! The final score was ${playerScore} - ${computerScore}.`);
//             } else if (playerScore < computerScore) {
//                 alert(`The computer picked ${computerSelection}. You lost the match! The final score was ${playerScore} - ${computerScore}.`);
//             } else {
//                 alert(`The computer picked ${computerSelection}. It was a tie! The final score was ${playerScore} - ${computerScore}.`)
//             }
//         }
//     }
//     playerScore = 0;
//     computerScore = 0;
// }

const buttonsDiv = document.createElement("div");
const resultDiv = document.createElement("div");
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");

document.body.appendChild(buttonsDiv);
document.body.appendChild(resultDiv);
buttonsDiv.appendChild(rockBtn);
buttonsDiv.appendChild(paperBtn);
buttonsDiv.appendChild(scissorsBtn);

rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorsBtn.textContent = "Scissors";

rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));