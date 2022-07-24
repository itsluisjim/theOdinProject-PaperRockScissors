const btn = document.querySelectorAll('button');
btn.forEach(item => item.addEventListener('click', playRound))

//used to display the message
let message = document.getElementById('message');

//used to display current score
let userTally = document.getElementById('userPoints');
let computerTally = document.getElementById('computerPoints');

// keeps track of user and computers points
let userPoints = 0;
let computerPoints= 0;

// computerPlay() randonly picks a choice for the computer
function computerPlay(){
    const gameChoices = ['paper','rock','scissors'];
    let computerOption = gameChoices[Math.floor(Math.random() * 3)];
    return computerOption;
}
function addPoint(whoWonMessage){
    if(whoWonMessage.search('You won') >= 0){
        userPoints+=1;
        userTally.textContent = `${userPoints}`;
    }
    else if(whoWonMessage.search('You lost') >= 0){
        computerPoints+=1;
        computerTally.textContent = `${computerPoints}`;
    }
}

/* whoWins() takes two parameters and evaluates who won by comparing strings
based on the given conditions */ 
function whoWins(userChoice, computerChoice){

    if(userChoice == 'rock'){
        switch(computerChoice){
            case "paper":
                return "You lost! Paper beats rock";
            case "scissors":
                return "You won! Rock beats scissors";
            default:
                return "Tie";
        }
    }
    else if (userChoice == 'paper'){
        switch(computerChoice){
            case "rock":
                return "You won! Paper beats rock";
            case "scissors":
                return "You lost! Scissors beats paper";
            default:
                return "Tie";
        }
    }
    else {
        switch(computerChoice){
            case "rock":
                return "You lost! Rock beats scissors";
            case "paper":
                return "You won! Scissors beats paper"
            default:
                return "Tie";
        }
    }
};

/* playRound() is fired if any of the three buttons is clicked
and runs a match of r.p.s */
function playRound (e){

    //will not run if whats being clicked doesnt have a button parent 
    if(!e.target.classList.contains('btn')) return;

    //generates a random option and stores it in a variable
    let computerSelection = computerPlay();

    //retrieves the id/user-option of the button
    let playerSelection = e.target.id;

    //used to store message to be displyed 
    let localMessage = whoWins(playerSelection, computerSelection);
    
    //display message stating round winner
    message.textContent = localMessage;

    //seaches if the localmessage has 'You won' or 'You lost' and adds a point accordingly
    addPoint(localMessage);

    determineAWinner();
    
}
function determineAWinner() {
    if(userPoints == 5 || computerPoints == 5) {
        if(userPoints > computerPoints){
            message.textContent = "You won with " + userPoints + " points";
        }
        else {
            message.textContent = "Computer won with " + computerPoints + " points";
        }
        //disables buttons and stops game
        btn.forEach(item => item.setAttribute('disabled', 'true'))
        document.removeEventListener('click', playRound);
    }
}