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
// function for getting your choice
function getHumanChoice() {
    let randomChoice = prompt("What's your choice ? Rock, paper, or scissors ? ").toLowerCase();
    while (!["rock", "paper", "scissors"].includes(randomChoice)) {
        randomChoice = prompt("Invalid choice. Please choose rock, paper, or scissors.").toLowerCase();
    }
    let humanChoice = randomChoice.toLowerCase();
    return humanChoice;
}
// variables for keeping track of the scores between the person and the computer
let humanScore = 0;
let computerScore = 0;
// function for playing a single round
function playRound() {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    console.log(`Your choice was "${humanChoice}"`)
    console.log(`The computer chose "${computerChoice}"`)
    if (computerChoice === "rock") {
        if (humanChoice === "rock") {
            console.log("Draw!")
        }
        else if (humanChoice === "paper") {
            console.log("You win this round!")
            humanScore += 1;
        }
        else {
            console.log("The computer wins this round!")
            computerScore += 1;
        }    
    }
    else if (computerChoice === "paper") {
        if (humanChoice === "rock") {
            console.log("The computer wins this round!")
            computerScore += 1;
        }
        else if (humanChoice === "paper") {
            console.log("Draw!")
        }
        else {
            console.log("You win this round!")
            humanScore += 1;
        }
    }
    else if (computerChoice === "scissors"){
        if (humanChoice === "rock") {
            console.log("You win this round!")
            humanScore += 1;
        }
        else if (humanChoice === "paper") {
            console.log("The computer wins this round!")
            computerScore += 1;
        }
        else {
            console.log("Draw");
        }       
    }
}
// function for playing a game of 5 rounds
function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    console.log(`Your score is: ${humanScore}`)
    console.log(`The computer's score is: ${computerScore}`)
    if (humanScore > computerScore) {
        console.log("Congratulations. You won this game!")
    }
    else if (humanScore < computerScore) {
        console.log("Too bad. You lost this game :(")
    }
    else {
        console.log("It's a draw.")
    }
}

playGame()