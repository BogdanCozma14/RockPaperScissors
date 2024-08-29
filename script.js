// function for randomising computer's choice
function getComputerChoice(){
    let randomChoice = Math.floor(Math.random() * 3 + 1);
    let computerChoice;
    if (randomChoice === 1) {
        computerChoice = "rock";
    }
    else if(randomChoice === 2) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    return computerChoice;
}
// variables for buttons
document.addEventListener("DOMContentLoaded", () => {
    const rockButton = document.querySelector(".rock");
    const paperButton = document.querySelector(".paper");
    const scissorsButton = document.querySelector(".scissors");
    rockButton.addEventListener("click", () => {
        playRound("rock");
    });
    paperButton.addEventListener("click", () => {
        playRound("paper");
    });
    scissorsButton.addEventListener("click", () => {
        playRound("scissors");
    });
});

// variables for keeping track of the scores between the person and the computer
let humanScore = 0;
let computerScore = 0;
// function for playing a single round
function playRound(playerChoice) {
    const results = document.querySelector(".results");
    let computerChoice = getComputerChoice();
    let humanChoice = playerChoice;
    const gameScore = document.querySelector(".score");
    while (gameScore.firstChild) {
        gameScore.removeChild(gameScore.firstChild);
    }    
    while (results.firstChild) {
        results.removeChild(results.firstChild);
    }
    const humanPlay = document.createElement("p");
    const computerPlay = document.createElement("p");
    const roundResult = document.createElement("p");
    humanPlay.innerText = `Your choice was "${humanChoice}"`;
    computerPlay.innerText = `The computer chose "${computerChoice}"`;
    if (computerChoice === "rock") {
        if (humanChoice === "rock") {
            roundResult.innerText = "Draw!";
        }
        else if (humanChoice === "paper") {
            roundResult.innerText = "You win this round!";
            humanScore += 1;
        }
        else {
            roundResult.innerText ="The computer wins this round!";
            computerScore += 1;
        }    
    }
    else if (computerChoice === "paper") {
        if (humanChoice === "rock") {
            roundResult.innerText = "The computer wins this round!";
            computerScore += 1;
        }
        else if (humanChoice === "paper") {
           roundResult.innerText ="Draw!";
        }
        else {
            roundResult.innerText ="You win this round!";
            humanScore += 1;
        }
    }
    else if (computerChoice === "scissors"){
        if (humanChoice === "rock") {
            roundResult.innerText ="You win this round!";
            humanScore += 1;
        }
        else if (humanChoice === "paper") {
            roundResult.innerText = "The computer wins this round!";
            computerScore += 1;
        }
        else {
            roundResult.innerText ="Draw!";
        }       
    }
    results.appendChild(humanPlay);
    results.appendChild(computerPlay);
    results.appendChild(roundResult);
    const humanPoints = document.createElement("h1");
    const computerPoitns = document.createElement("h1");
    humanPoints.innerText = `Your score:  ${humanScore} points`;
    computerPoitns.innerText = `Computer's score:  ${computerScore} points`;
    gameScore.appendChild(humanPoints);
    gameScore.appendChild(computerPoitns);
    // check if the game needs to be ended (someone has 5 points)
    if (humanScore === 5 || computerScore === 5) {
        endGame();
    }
}
// function for ending the game
function endGame() {
    const rockButton = document.querySelector(".rock");
    const paperButton = document.querySelector(".paper");
    const scissorsButton = document.querySelector(".scissors");
    // disable all buttons so that you can't play after the game is ended
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    // display message with the final result of the game
    const results = document.querySelector(".results");
    const winnerMessage = document.createElement("h2");
    if (humanScore === 5) {
        winnerMessage.innerText = "Congratulations! You won the game!";
    }
    else {
        winnerMessage.innerText = "Game Over! The computer won this game!";
    }
    results.appendChild(winnerMessage);
}