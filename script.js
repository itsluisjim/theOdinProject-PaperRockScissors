// computerPlay() randonly picks a choice for the computer
function computerPlay(){
    const gameChoices = ['paper','rock','scissors'];

    let computerOption = gameChoices[Math.floor(Math.random() * 3)];

    return computerOption;
}
/* playRound() takes user choice and the randomly generated choice for
the computer as arguments and returns a string stating who won and why they won */
function playRound (playerSelection, computerSelection){

    if(playerSelection == 'rock'){
        switch(computerSelection){
            case "paper":
                return "You lost! Paper beats rock";
            case "scissors":
                return "You won! Rock beats scissors";
            default:
                return "Tie";
        }
    }
    else if (playerSelection == 'paper'){
        switch(computerSelection){
            case "rock":
                return "You won! Paper beats rock";
            case "scissors":
                return "You lost! Scissors beats paper";
            default:
                return "Tie";
        }
    }
    else {
        switch(computerSelection){
            case "rock":
                return "You lost! Rock beats scissors";
            case "paper":
                return "You won! Scissors beats paper";
            default:
                return "Tie";
        }
    }
}

// calls for a game of paper, rock, scissors
function game() {

    // keeps track of user and computers points
    let userPoints = 0;
    let computerPoints= 0;

    //controls the while loop
    let gameRunner = true;

    // while loop will run until a player reaches 5 points
    while(gameRunner){

        // prompts user for a choice and stores in variable
        let userSelection = prompt("paper, rock, or scissors? ").toLowerCase();

        if(userSelection == 'paper'|| userSelection == 'rock' || userSelection == 'scissors'){
            // plays one round, and returns a string stating who won and stores in a variable
            let matchResult = playRound(userSelection, computerPlay());

            //seaches if the string returned by playRound has 'You won' or 'You lost' and adds a point accordingly
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

            /* checks if any player has reached 5 points, if so it will
            change the condition that runs the while loop and end it */
            if(userPoints == 5 || computerPoints == 5){
                gameRunner = false;
            }
        }
        else {
            window.alert("Invalid choice! Try agian!")
        }
    }

    // checks who has more points and prints a message staing who won
    if(userPoints > computerPoints){
        console.log("You won with " + userPoints + "points");
    }
    else {
        console.log("Computer won with " + computerPoints + "points");
    }
}