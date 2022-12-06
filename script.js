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



const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const userScore = document.querySelector('.user-score');
const cpuScore = document.querySelector('.cpu-score');
const body = document.querySelector('body');
const scoreBox = document.querySelector('.score-box');
const announcer = document.querySelector('.announcer');



let finalUserScore = Number(userScore.textContent);
let finalCpuScore = Number(cpuScore.textContent);

let computerChoice = getComputerChoice();





rock.addEventListener('click', () => {
if(finalUserScore < 5 && finalCpuScore < 5) {
    if (computerChoice == "Paper") {
        finalCpuScore++;
        cpuScore.textContent = finalCpuScore;
        computerChoice = getComputerChoice();
    } else if (computerChoice == "Scissors") {
        finalUserScore++;
        userScore.textContent = finalUserScore;
        computerChoice = getComputerChoice();
    } else if (computerChoice == "Rock") {
        cpuScore.textContent = finalCpuScore;
        userScore.textContent = finalUserScore;
        computerChoice = getComputerChoice();
    }
    
} else if(finalUserScore == 5) {

    cpuScore.textContent = finalCpuScore;
    userScore.textContent = finalUserScore;
    announcer.textContent = 'You win!';
} else if(finalCpuScore == 5) {
    cpuScore.textContent = finalCpuScore;
    userScore.textContent = finalUserScore;
    announcer.textContent = 'You lose!';
} 
}
)

paper.addEventListener('click', () => {

    console.log(computerChoice);
if (finalUserScore < 5 && finalCpuScore < 5) {
    if(computerChoice == "Paper") {
        cpuScore.textContent = finalCpuScore;
        userScore.textContent = finalUserScore;
        computerChoice = getComputerChoice();
    } else if (computerChoice == "Scissors") {
        finalCpuScore++;
        cpuScore.textContent = finalCpuScore;
        computerChoice = getComputerChoice();
    } else if (computerChoice == "Rock") {
        finalUserScore++;
        userScore.textContent = finalUserScore;
        computerChoice = getComputerChoice();
    }
} else if(finalUserScore == 5) {
    cpuScore.textContent = finalCpuScore;
    userScore.textContent = finalUserScore;
    announcer.textContent = 'You win!';

} else if (finalCpuScore == 5) {
    cpuScore.textContent = finalCpuScore;
    userScore.textContent = finalUserScore;
    announcer.textContent = 'You lose!';
}  
}

)

scissors.addEventListener('click', () => {
    console.log(computerChoice);
if(finalUserScore < 5 && finalCpuScore < 5) {
    if(computerChoice == "Paper") {
        finalUserScore++;
        userScore.textContent = finalUserScore;
        computerChoice = getComputerChoice();
    } else if (computerChoice == "Scissors") {
        cpuScore.textContent = finalCpuScore;
        userScore.textContent = finalUserScore;
        computerChoice = getComputerChoice();
    } else if (computerChoice == "Rock") {
        finalCpuScore++;
        cpuScore.textContent = finalCpuScore;
        computerChoice = getComputerChoice();
    }
} else if(finalUserScore == 5) {
    cpuScore.textContent = finalCpuScore;
    userScore.textContent = finalUserScore;
    announcer.textContent = 'You win!';
} else if(finalCpuScore == 5) {
    cpuScore.textContent = finalCpuScore;
    userScore.textContent = finalUserScore;
    announcer.textContent = 'You lose!';
} 
}

)





