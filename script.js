let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

const resetButton = document.createElement("button");
resetButton.setAttribute("id","resetButton");

const buttons = document.querySelectorAll(".buttonClass");
const playerRockButton = document.querySelector("#playerRockButton");
const playerPaperButton = document.querySelector("#playerPaperButton");
const playerScissorsButton = document.querySelector("#playerScissorsButton");
const computerRockButton = document.querySelector("#computerRockButton");
const computerPaperButton = document.querySelector("#computerPaperButton");
const computerScissorsButton = document.querySelector("#computerScissorsButton");
const roundResult = document.querySelector("#roundResult");
const scoreContainer = document.querySelector("#scoreContainer");
const currentScore = document.querySelector("#currentScore");
const playerContainer = document.querySelector("#playerContainer");
const computerContainer = document.querySelector("#computerContainer");
const rockSound = document.querySelector("#playerRockButton").addEventListener("click", playRockSound);
const paperSound = document.querySelector("#playerPaperButton").addEventListener("click", playPaperSound);
const scissorsSound = document.querySelector("#playerScissorsButton").addEventListener("click", playScissorsSound);

function playRockSound() {
    const buttonPress = document.querySelector("#rockSound");
    buttonPress.play();
    buttonPress.currentTime=0;
}

function playPaperSound() {
    const buttonPress = document.querySelector("#paperSound");
    buttonPress.play();
    buttonPress.currentTime=0;
}

function playScissorsSound() {
    const buttonPress = document.querySelector("#scissorsSound");
    buttonPress.play();
    buttonPress.currentTime=0;
}

buttons.forEach((buttonClass) => {
    buttonClass.addEventListener("click", () => {
        const img = buttonClass.querySelector("img");
        playerSelection = img.alt.toLowerCase();

        playRound(playerSelection, getComputerChoice());

        if (playerScore === 5 || computerScore === 5) {
            endGame();
        }
    });
});

function getComputerChoice() {
    const randomNum = Math.random();
    if (randomNum < (1/3)) {
        return "rock"
    } else if (randomNum < (2/3)) {
        return "paper"
    } else {
        return "scissors"
    }
};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

function playRound(playerSelection, computerSelection) {
    resetHighlights();

    const upperPlayerSelection = capitalizeFirstLetter(playerSelection);
    const playerSelector = document.querySelector(`#player${upperPlayerSelection}Button`);
    const upperComputerSelection = capitalizeFirstLetter(computerSelection);
    const computerSelector = document.querySelector(`#computer${upperComputerSelection}Button`);

    if (playerSelection === computerSelection) {
        roundResult.textContent = `You both picked ${playerSelection}! This round is a tie.`;
        playerSelector.classList.add("tieHighlight");
        computerSelector.classList.add("tieHighlight");
    } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore = ++playerScore;
        roundResult.textContent = `Your ${playerSelection} beat the computer's ${computerSelection}!`;
        playerSelector.classList.add("winHighlight");
        computerSelector.classList.add("loseHighlight");
    } else {
        computerScore = ++computerScore;
        roundResult.textContent = `The computer's ${computerSelection} beat your ${playerSelection}. That's a shame.`;
        playerSelector.classList.add("loseHighlight");
        computerSelector.classList.add("winHighlight");
    }

    currentScore.textContent = `${playerScore} - ${computerScore}`;
};

function resetHighlights() {
    for (const button of buttons) {
        button.classList.remove("winHighlight");
        button.classList.remove("loseHighlight");
        button.classList.remove("tieHighlight");
    }
}

function endGame() {
    if (playerScore === 5) {
        roundResult.textContent = `YES!`;
    } else {
        roundResult.textContent = `NOOOOO!`;
    }

    playerContainer.classList.add("unclickable");
    resetButton.textContent = "GO AGAIN";
    scoreContainer.appendChild(resetButton);
    resetButton.addEventListener("click", () => resetGame());
};

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerContainer.classList.remove("unclickable");
    currentScore.textContent = "0 - 0";
    roundResult.textContent = "FIRST TO FIVE WINS!";
    resetButton.remove();
}