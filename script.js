function computerPlay(){
    const gameChoices = ['paper','rock','scissors'];

    let computerOption = gameChoices[Math.floor(Math.random() * 3)];

    return computerOption;
}