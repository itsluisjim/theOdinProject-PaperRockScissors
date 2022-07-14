function computerPlay(){
    const gameChoices = ['paper','rock','scissors'];

    let computerOption = gameChoices[Math.floor(Math.random() * 3)];

    return computerOption;
}

function playRound (playerSelection, computerSelection){

    if(playerSelection.toLowerCase() == 'rock'){
        switch(computerSelection){
            case "paper":
                return "You lost! Paper beats rock";
            case "scissors":
                return "You won! Rock beats scissors";
            default:
                return "Tie";
        }
    }
    else if (playerSelection.toLowerCase() == 'paper'){
        switch(computerSelection){
            case "rock":
                return "You won! Paper beats rock";
            case "scissors":
                return "You lost! Scissors beats paper";
            default:
                return "Tie";
        }
    }
    else if (playerSelection.toLowerCase() == 'scissors'){
        switch(computerSelection){
            case "rock":
                return "You lost! Rock beats scissors";
            case "paper":
                return "You won! Scissors beats paper";
            default:
                return "Tie";
        }
    }
    else {
        return "Not a valid answer!";
    }
}