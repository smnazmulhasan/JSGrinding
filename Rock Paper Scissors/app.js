const options = ['rock', 'paper', 'scissors'];


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

function getComputerChoice (){
    const choise = options[Math.floor(Math.random() * options.length)];
    return choise;
}

function getPlayerChoice() {
    let validatedInput = false;
    while(validatedInput == false){
        const choise = prompt("Rock, Paper or Scissors?").toLowerCase();
        if (choise == null) continue;
        if (options.includes(choise)){
            validatedInput = true;
            return choise;
        }

    }
}
function game() {
    let playerScore = 0;
    let computerScore = 0;
    console.log('Gmae Starts')
    for (let i = 0; i < 5; i++){
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();
        console.log(PlayRound(playerSelection, computerSelection));
        const round = CheckWinner(playerSelection, computerSelection);
        if (round == 'Player'){
            playerScore++;
        }
        else if (round == 'computer'){
            computerScore++;
        }
    }
    console.log('Game Ends');
    if (playerScore > computerScore){
        console.warn('You won the game!')
    }
    else if (playerScore < computerScore){
        console.warn('You are a loser!')
    }
    else{
        console.warn('Game tie! No one wins!')
    }
}

game();