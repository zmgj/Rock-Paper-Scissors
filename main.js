
const options = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

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


function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie") {
        return "It's a tie"
    }
    else if(result == "Player") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } 
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function getPlayerChoice() {
    let validatedInput = false;
    while (validatedInput == false) {
        const choice = prompt("Rock, Paper, Scisssors");
        if(choice == null) {//null means empty
            continue 
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
   }
}

function game() {
    let scorePlayer = 0; 
    let scoreComputer = 0;
    console.log("Lets Play!")
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    if(checkWinner(playerSelection,computerSelection) == "Player") {
        scorePlayer++;
    }
    else if(checkWinner(playerSelection,computerSelection) == "Computer") {
        scoreComputer++;
    }
    }
    console.log("Game Over")
    if(scorePlayer > scoreComputer) {
        console.log("Player is the winner");
    }
    else if(scorePlayer < scoreComputer) {
        console.log("Computer is the winner");
    }
    else if((scorePlayer == scoreComputer)) {
        console.log("It' a Tie. Play Again");
    }
}

game();

