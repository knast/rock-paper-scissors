function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber == 1) {
        return "Rock";
    } else if (randomNumber == 2) {
        return "Paper";
    } else if (randomNumber == 3) {
        return "Scissors";
    }
}


function playRound(playersChoice, computersChoice) {
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


function capitalizedLetter(string) {
    let firstLetter = string.charAt(0);
    let stringWithoutFirst = string.substring(1);
    let downcasedString = stringWithoutFirst.toLowerCase();
    let capitalizedString = firstLetter.concat(downcasedString)
    return capitalizedString;
}

let playerChoice = prompt('Choose Rock/Paper/Scissors');
let finalPlayerChoice = playerChoice.toString();
let computerChoice = getComputerChoice();

console.log(playRound(playerChoice, computerChoice));

