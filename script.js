const choice = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let userScore = 0;

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * choice.length);
    return choice[randomNum];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return 'Its a Tie!';
    }
    if (playerSelection === 'rock' && computerSelection == 'paper') {
        computerScore++;
        return 'Its a Lose!';
    }
    if (playerSelection === 'rock' && computerSelection == 'scissors') {
        userScore++;
        return 'Its a Win!';
    }
    if (playerSelection === 'paper' && computerSelection == 'rock') {
        userScore++;
        return 'Its a Win!';
    }
    if (playerSelection === 'paper' && computerSelection == 'scissors') {
        computerScore++;
        return 'Its a Lose!';
    }
    if (playerSelection === 'scissors' && computerSelection == 'rock') {
        computerScore++;
        return 'Its a Lose!';
    }
    if (playerSelection === 'scissors' && computerSelection == 'paper') {
        userScore++;
        return 'Its a Win!';
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let userChoise = prompt('Enter Rock, Paper or Scissors:');

        console.log(playRound(userChoise, getComputerChoice()));
        console.log(`User: ${userScore} Computer: ${computerScore}`);
    }

    if (userScore > computerScore) {
        console.log('Congratulations! You Win the game!');
    } else if (computerScore > userScore) {
        console.log('Oh no! You lost the game!');
    } else if (computerScore === userScore) {
        console.log('Its a draw game!');
    }
}