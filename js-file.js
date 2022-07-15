const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');
const div = document.querySelector('.div');
const winner = document.createElement('div');
div.appendChild(winner);

const reset = document.querySelector('.reset')
const win = document.querySelector('.win')
const declare = document.createElement('h1');

win.appendChild(declare);
win.appendChild(reset);

let playerScore = 0;
let computerScore = 0;
let computerSelection = computerPlay();


rock.addEventListener('click', () => {
    playGame('rock');
});

paper.addEventListener('click', () => {
    playGame('paper');
});

scissor.addEventListener('click', () => {
    playGame('scissor');
});



function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3);
    switch(randomNum) {
        case 0:
        return 'rock';
        break;

        case 1:
        return 'paper';
        break;

        case 2:
        return 'scissor';
    }
}

function playGame(playerSelection, computerSelection) {
    computerSelection = computerPlay().toLowerCase();
     
    if (playerScore >= 5 || computerScore >= 5) {
        return declare.textContent = 'Please reset game.'
    } else if (playerSelection == computerSelection) {
        declare.textContent = '';
        return winner.textContent = `It\'s a tie Player:${playerScore}    Computer:${computerScore}`;
    }
        else if ((playerSelection === 'rock' && computerSelection === 'scissor') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissor' && computerSelection === 'paper')) {
        playerScore++
        declare.textContent = '';
        whoWins();
        return winner.textContent = `Play wins! Player:${playerScore}    Computer:${computerScore}`;
        
     } else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissor') || (playerSelection === 'scissor' && computerSelection === 'rock')) {
        computerScore++;
        declare.textContent = '';
        whoWins();

        return winner.textContent = `Computer wins! Player:${playerScore}    Computer:${computerScore}`
     } 
    }

function whoWins() {
if (playerScore === 5) {  
    return declare.textContent = 'You win!'
} else if (computerScore === 5) {
    return declare.textContent = 'You lose!'
}
}

reset.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    winner.textContent = '';
    declare.textContent = '';
    return;
})
