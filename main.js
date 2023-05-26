const btnR = document.querySelector("#rock");
const btnP = document.querySelector("#paper");
const btnS = document.querySelector("#scissors");
const outcomeDiv = document.querySelector(".outcome");

const playerScore_span = document.getElementById('playerScore');
const computerScore_span = document.getElementById('computerScore');
const restart = document.querySelector('#restart');

//refresh game for new game
restart.addEventListener('click', () => location.reload());

// Score Counter
let playerScore = 0;
let computerScore = 0;

// Get computer choice
function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

//Check winner of round
function checkWinner(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        return "Tie";
    } 
    else if(  
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {
        return "Player";
    }
    else {
        return "Computer";
    }

}

// Play round
function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie") {
        const p = document.createElement('p')
        p.innerText = `You Tied! You both picked ${playerSelection}`
        outcomeDiv.appendChild(p)
    }
    else if(result == "Player") {
        const p = document.createElement('p')
        p.innerText = `You Win! ${playerSelection} beats ${computerSelection}`
        outcomeDiv.appendChild(p)
        playerScore++
        
    } 
    else {
        const p = document.createElement('p')
        p.innerText = `You Lost! ${computerSelection} beats ${playerSelection}`
        outcomeDiv.appendChild(p)
        computerScore++
        
    }
}

//Rock, Paper & Scissors button
btnR.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "rock";
    playRound(playerSelection, computerSelection);
    checkWinner(playerSelection, computerSelection);
    updateScore();
    theWinner();
})

btnP.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "paper";
    playRound(playerSelection, computerSelection);
    checkWinner(playerSelection, computerSelection);
    updateScore();
    theWinner();
})

btnS.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "scissors";
    playRound(playerSelection, computerSelection);
    checkWinner(playerSelection, computerSelection);
    updateScore();
    theWinner();
})

//Update score
function updateScore() {
    const playerScoreNum = document.getElementById('playerScore');
    const computerScoreNum = document.getElementById('computerScore');
    playerScoreNum.textContent = `Player: ${playerScore}`;
    computerScoreNum.textContent = `Computer: ${computerScore}`;
    
    if(playerScore === 5) {
        const h3 = document.createElement("h3")
        h3.innerText = `You beat computer ${playerScore} - ${computerScore}`

    } else if(computerScore === 5) {
        const h3 = document.createElement("h3")
        h3.innerText = `You lost to computer ${computerScore} - ${playerScore}`
    }
}

function theWinner() {
    const theWinnerIs = document.querySelector('#winner');
    if(playerScore === 5) {
        theWinnerIs.innerText = "You are the Winner";
        endGame();
    } else if(computerScore === 5) {
        theWinnerIs.innerText = "You Lost";
        endGame();
    }
    
}

//disable buttons
function endGame() {
    btnP.disabled = true;
    btnR.disabled = true;
    btnS.disabled = true;
}



