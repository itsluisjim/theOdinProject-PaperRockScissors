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

function game() {

    let userPoints = 0;
    let computerPoints= 0;
    let gameRunner = true;

    while(gameRunner){
        let userSelection = prompt("paper, rock, or scissors? ");

        let matchResult = playRound(userSelection, computerPlay());

        if(matchResult.search('You won') >= 0){
            userPoints+=1;
            console.log("You win a point!");
        }
        else if(matchResult.search('You lost') >= 0){
            computerPoints+=1;
            console.log("Computer wins a point!");
        }
        else {
            console.log("Tie no points for either party");
        }

        if(userPoints == 5 || computerPoints == 5){
            gameRunner = false;
        }
    }

    if(userPoints > computerPoints){
        console.log("You won with " + userPoints + "points");
    }
    else {
        console.log("Computer won with " + computerPoints + "points");
    }
}