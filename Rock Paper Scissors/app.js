const options = ['rock', 'paper', 'scissors'];

function getComputerChoice (){
    const choise = options[Math.floor(Math.random() * options.length)];
    return choise;
}

let computerSelection = getComputerChoice();

function CheckWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
        return "Tie"
    }
    else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')
    ){
        return "Player"
    }
    else {
        return "computer"
    }
}

function PlayRound(playerSelection, computerSelection){
    const result = CheckWinner(playerSelection, computerSelection);
    if (result == 'Tie'){
        return `It's a Tie`
    }
    else if (result == 'Player'){
        return `You win! ${playerSelection} beats ${computerSelection}.`
    }
    else {
        return `Computer wins! ${computerSelection} beats ${playerSelection}.`
    }
}

const playerSelection = prompt("Choose:" ).toLowerCase();
console.log(PlayRound(playerSelection, computerSelection))
