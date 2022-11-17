function getComputerChoice() { // Getting computer's choice
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber == 1) {
        return "Rock";
    } else if (randomNumber == 2) {
        return "Paper";
    } else if (randomNumber == 3) {
        return "Scissors";
    }
}


function playRound(playersChoice, computersChoice) { // Comparison of player's and computer's choice
    if (computersChoice == 'Rock' && playersChoice == 'Paper') {
        return "You win! Paper beats Rock!";
    } else if (computersChoice == 'Scissors' && playersChoice == 'Paper') {
        return 'You lose! Scissors beat Paper!'; 
    } else if (computersChoice == 'Paper' && playersChoice == 'Paper') {
        return "It's a draw!";
    } else if (computersChoice == 'Rock' && playersChoice == 'Scissors') {
        return "You lose! Rock beats Scissors!";
    } else if (computersChoice == "Scissors" && playersChoice == 'Scissors') {
        return "It's a draw!";
    } else if (computersChoice == "Paper" && playersChoice == "Scissors") {
        return "You win! Scissors beat Paper!"; 
    } else if (computersChoice == "Rock" && playersChoice == "Rock") {
        return "It's a draw!";
    } else if (computersChoice == "Scissors" && playersChoice == "Rock") {
        return "You win! Rock beats Scissors";
    } else if (computersChoice == 'Paper' && playersChoice == "Rock") {
        return "You lose! Paper beats Rock!";
    }
}


function capitalizedLetter(string) { // Making user's input case in-sensitive

    let firstLetter = string.charAt(0);
    let capitalizedFirstLetter = firstLetter.toUpperCase();
    let stringWithoutFirst = string.substring(1);
    let downcasedString = stringWithoutFirst.toLowerCase();
    let capitalizedString = capitalizedFirstLetter.concat(downcasedString)

    return capitalizedString;
}
let playerChoice = prompt('Choose rock, paper or scissors').toString();
let capitalizedChoice = capitalizedLetter(playerChoice);

let computerChoice = getComputerChoice();

console.log(playRound(capitalizedChoice, computerChoice));

