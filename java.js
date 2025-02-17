let max= 3;
let min= 1;

function getComputerChoice() {
    let computerChoice= Math. floor(Math. random() * (max - min + 1)) + min;
    switch (computerChoice) {
        case 1: 
        computerChoice="Rock"
        break;
        case 2: 
        computerChoice="Paper"
        break;
        case 3:
        computerChoice="Scissors"
        break;
    }
    return computerChoice
}

function caseIns(choice) {
    return choice.toLowerCase();
}

function getHumanChoice() {
    let humanChoice= prompt("Rock, paper, Scissors?");
    humanChoice= caseIns(humanChoice);
    if (humanChoice !== "rock" && humanChoice !== "scissors" && humanChoice !== "paper") {
        humanChoice= "That is not an option!"
        return humanChoice
    }
    else { 
        return  humanChoice
    }}

let humanScore=0
let computerScore=0

function playRound(humanChoice,computerChoice) {
    if (humanChoice=== rock && computerChoice===scissors)
 return 0 }