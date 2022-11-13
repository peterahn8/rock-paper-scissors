let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector(".rockButton");
const paperButton = document.querySelector(".paperButton");
const scissorsButton = document.querySelector(".scissorsButton");
const roundResult = document.querySelector("#roundResult");
const scoreContainer = document.querySelector("#scoreContainer");
const currentScore = document.querySelector("#currentScore");

rockButton.addEventListener("click", () => {
    const img = document.querySelector("img");
    playerSelection = img.alt;

    playRound(playerSelection, getComputerChoice());

    if (playerScore === 5 || computerScore === 5) {
        endGame();
    }
})

paperButton.addEventListener("click", () => {
    const img = document.querySelector("img");
    playerSelection = img.alt;

    playRound(playerSelection, getComputerChoice());

    if (playerScore === 5 || computerScore === 5) {
        endGame();
    }
})

scissorsButton.addEventListener("click", () => {
    const img = document.querySelector("img");
    playerSelection = img.alt;

    playRound(playerSelection, getComputerChoice());

    if (playerScore === 5 || computerScore === 5) {
        endGame();
    }
})

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
    if (playerSelection === computerSelection) {
        roundResult.textContent = `You both picked ${playerSelection}! This round is a tie.`;
    } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore = ++playerScore;
        roundResult.textContent = `Your ${playerSelection} beat the computer's ${computerSelection}!`;
    } else {
        computerScore = ++computerScore;
        roundResult.textContent = `The computer's ${computerSelection} beat your ${playerSelection}. That's a shame.`
    }
    currentScore.textContent = `${playerScore} - ${computerScore}`;
}

function endGame() {
    if (playerScore === 5) {
        roundResult.textContent = `YES! The final score was ${playerScore} - ${computerScore}.`;
    } else {
        roundResult.textContent = `NOOOOO! The final score was ${playerScore} - ${computerScore}.`;
    }
    playerScore = 0;
    computerScore = 0;
}

// function game() {
//     for (let gamesPlayed = 0; gamesPlayed < 5; gamesPlayed++) {

//     }
//     playerScore = 0;
//     computerScore = 0;
//     gamesplayed = 0;
// }

