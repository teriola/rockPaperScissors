const choice = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let userScore = 0;

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * choice.length);
    return choice[randomNum];
}