let buttons = document.querySelectorAll('#btn');
let computerScore = document.querySelector('#computer');
let playerScore = document.querySelector('#player');

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * buttons.length);
    return buttons[randomNum].textContent;
}

function playRound(btn) {
    let playerSelection = btn.textContent.toLowerCase();
    let computerSelection = getComputerChoice().toLowerCase();

    if (playerSelection === computerSelection) {
        return 'tie';
    }
    if (playerSelection === 'rock' && computerSelection == 'paper') {
        return 'lose';
    }
    if (playerSelection === 'rock' && computerSelection == 'scissors') {
        return 'win';
    }
    if (playerSelection === 'paper' && computerSelection == 'rock') {
        return 'win';
    }
    if (playerSelection === 'paper' && computerSelection == 'scissors') {
        return 'lose';
    }
    if (playerSelection === 'scissors' && computerSelection == 'rock') {
        return 'lose';
    }
    if (playerSelection === 'scissors' && computerSelection == 'paper') {
        return 'win';
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let res = playRound(button);
        if (res == 'win') {
            playerScore.textContent = Number(playerScore.textContent) + 1;
        } else if (res == 'lose') {
            computerScore.textContent = Number(computerScore.textContent) + 1;
        }
    });
});