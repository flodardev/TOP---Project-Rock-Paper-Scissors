// Variables
let currentRound = 0; // To track how many rounds has been played
let humanScore = 0; // To track human's score
let computerScore = 0; // To track computer's score
const COMPUTER = "Computer";
const HUMAN = "Human";
const TIE = "Tie"
const ROCK = "Rock";
const PAPER = "Paper";
const SCISSOR = "Scissor"
const MAX_ROUNDS = 5;

function getComputerChoice() {
    // Get a random number from 1 to 3
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let choiceText = "Computer's choice: "

    // 1 === ROCK, 2 === PAPER, 3 === SCISSOR
    switch(randomNumber) {
        case 1:
            return ROCK;
        case 2:
            return PAPER;
        case 3:
            return SCISSOR;
        default:
            console.log("Error in getComputerChoice function")
            break;
    }
}

function playRound(humanChoice, computerChoice) {
    // Check human's choice vs. computer's choice to determine the winner
    switch(humanChoice){
        // If human chose Rock, check it against computer's choice
        case ROCK:
            if (computerChoice === PAPER) {
                ++computerScore;
                return COMPUTER;
            } else if (computerChoice === SCISSOR) {
                ++humanScore;
                return HUMAN;
            } else {
                return TIE;
            }
        
        // If human chose Paper, check it against computer's choice
        case PAPER:
            if (computerChoice === ROCK) {
                // Human won, increment human's score
                ++humanScore;
                return HUMAN;
            } else if (computerChoice === SCISSOR) {
                // Computer won, increment computer's score
                ++computerScore;
                return COMPUTER;
            } else {
                return TIE;
            }

        // If human chose Scissor, check it against computer's choice
        case SCISSOR:
            if (computerChoice === ROCK) {
                // Computer won, increment computer's score
                ++computerScore;
                return COMPUTER;
            } else if (computerChoice === PAPER) {
                // Human won, increment human's score
                ++humanScore;
                return HUMAN;
            } else {
                return TIE;
            }

        default:
            console.log("Error in playRound function");
            break;
    }
}

function checkState() {
    if (currentRound === MAX_ROUNDS){
        document.body.innerHTML = ""
        const body = document.querySelector("body");
        let header = document.createElement("h1");
        let para = document.createElement("h2");
        let button = document.createElement("button");
        button.textContent = "RESET";
        button.addEventListener("click", x => window.location.reload());

        header.textContent = "GAME OVER!";

        if (humanScore > computerScore) {
            para.textContent = "Human won!";
            body.append(header);
            body.append(para);
            body.append(button);

        } else if (computerScore > humanScore) {
            para.textContent = "Computer won!";
            body.append(header);
            body.append(para);
            body.append(button);
        
        } else {
            para.textContent = "It's a tie!";
            body.append(header);
            body.append(para);
            body.append(button);
        }
    }}

// BUTTONS
const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissor = document.querySelector("#scissor")

// Results DIV
const divResults = document.querySelector(".results");

// Announcement DIV
const divAnnouncement = document.querySelector(".announcement");

// Results Computer and Human score DIV
const divHumanScore = document.querySelector(".human-score");
const divComputerScore = document.querySelector(".computer-score");

// Round DIV
const divRound = document.querySelector(".current-round")

// Rock
buttonRock.addEventListener("click", e => {
    // Get winner and update DOM
    e.preventDefault();

    const winner = playRound(ROCK, getComputerChoice());
    
    switch(winner){
        case HUMAN:
            divAnnouncement.textContent = "Human won!";
            break;
        case COMPUTER:
            divAnnouncement.textContent = "Computer won!";
            break;
        case TIE:
            divAnnouncement.textContent = "It's a tie!";
    }

    // Update score
    divHumanScore.textContent = humanScore;
    divComputerScore.textContent = computerScore;

    // Update round
    currentRound++;
    divRound.textContent = currentRound;

    // Check current state
    checkState();
})

// Paper
buttonPaper.addEventListener("click", e => {
    // Get winner and update DOM
    e.preventDefault();

    const winner = playRound(PAPER, getComputerChoice());
    
    switch(winner){
        case HUMAN:
            divAnnouncement.textContent = "Human won!";
            break;
        case COMPUTER:
            divAnnouncement.textContent = "Computer won!";
            break;
        case TIE:
            divAnnouncement.textContent = "It's a tie!";
    }

    // Update score UI
    divHumanScore.textContent = humanScore;
    divComputerScore.textContent = computerScore;

    // Update round UI
    currentRound++;
    divRound.textContent = currentRound;

    // Check current state
    checkState();
})

// Scissor
buttonScissor.addEventListener("click", e => {
    // Get winner and update DOM
    e.preventDefault();

    const winner = playRound(SCISSOR, getComputerChoice());
    
    switch(winner){
        case HUMAN:
            divAnnouncement.textContent = "Human won!";
            break;
        case COMPUTER:
            divAnnouncement.textContent = "Computer won!";
            break;
        case TIE:
            divAnnouncement.textContent = "It's a tie!";
    }

    // Update score UI
    divHumanScore.textContent = humanScore;
    divComputerScore.textContent = computerScore;

    // Update round UI
    currentRound++;
    divRound.textContent = currentRound;

    // Check current state
    checkState();
})