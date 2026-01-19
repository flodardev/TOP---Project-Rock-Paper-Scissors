console.log("This is a rock paper scissors game");

// Variables
let round = 0; // To track how many rounds has been played
let humanScore = 0; // To track human's score
let computerScore = 0; // To track computer's score
const ROCK = "Rock";
const PAPER = "Paper";
const SCISSOR = "Scissor"

playRound(getHumanChoice(), getComputerChoice());


function getComputerChoice() {
    // Get a random number from 1 to 3
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let choiceText = "Computer's choice: "

    // 1 === ROCK, 2 === PAPER, 3 === SCISSOR
    switch(randomNumber) {
        case 1:
            console.log(choiceText + ROCK)
            return ROCK;
        case 2:
            console.log(choiceText + PAPER)
            return PAPER;
        case 3:
            console.log(choiceText + SCISSOR)
            return SCISSOR;
        default:
            break;
    }
}

function getHumanChoice() {
    // Prompt human for their choice, input number from 1 to 3
    let humanChoice = +prompt("Choose a number from 1 to 3, 1 is for Rock, 2 is for Paper and 3 is for Scissor")
    let choiceText = "Human's choice: "

    // 1 === ROCK, 2 === PAPER, 3 === SCISSOR
    switch(humanChoice){
        case 1:
            console.log(choiceText + ROCK)
            return ROCK;
        case 2:
            console.log(choiceText + PAPER)
            return PAPER;
        case 3:
            console.log(choiceText + SCISSOR)
            return SCISSOR;
        default:
            break;
    }

}

function playRound(humanChoice, computerChoice) {
    // Check human's choice vs. computer's choice to determine the winner
    switch(humanChoice){
        // If human chose Rock, check it against computer's choice
        case ROCK:
            if (computerChoice === PAPER) {
                console.log("You lose!")
                // Computer won, increment computer's score
                ++computerScore;
            } else if (computerChoice === SCISSOR) {
                console.log("You win!")
                // Human won, increment human's score
                ++humanScore;
            } else {
                console.log("It's a tie!")
            }
            break;
        
        // If human chose Paper, check it against computer's choice
        case PAPER:
            if (computerChoice === ROCK) {
                console.log("You win!")
                // Human won, increment human's score
                ++humanScore;
            } else if (computerChoice === SCISSOR) {
                console.log("You lose!")
                // Computer won, increment computer's score
                ++computerScoreScore;
            } else {
                console.log("It's a tie!")
            }
            break;

        // If human chose Scissor, check it against computer's choice
        case SCISSOR:
            if (computerChoice === ROCK) {
                console.log("You lose!")
                // Computer won, increment computer's score
                ++computerScore;
            } else if (computerChoice === PAPER) {
                console.log("You win!")
                // Human won, increment human's score
                ++humanScore;
            } else {
                console.log("It's a tie!")
            }
            break;
    }
}

function playGame() {
    
}
