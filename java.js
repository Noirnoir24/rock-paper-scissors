let max= 3;
let min= 1;

function getComputerChoice() {
    let computerChoice= Math. floor(Math. random() * (max - min + 1)) + min;
    switch (computerChoice) {
        case 1: 
        computerChoice="rock"
        break;
        case 2: 
        computerChoice="paper"
        break;
        case 3:
        computerChoice="scissors"
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
    let draw= "Draw!"
    let winner= "You win!"
    let loser= "You lose..."
    if (humanChoice=== "rock" && computerChoice=== "scissors") {
        humanScore= humanScore+1
        console.log("Your score: "+humanScore, "Computer Score: "+computerScore)
        return winner
    }
    else if (humanChoice=== "scissors" && computerChoice==="paper") {
        humanScore= humanScore+1
        console.log("Your score: "+humanScore, "Computer Score: "+computerScore)
        return winner
    }
    else if (humanChoice=== "paper" && computerChoice==="rock") {
        humanScore= humanScore+1
        console.log("Your score: "+humanScore, "Computer Score: "+computerScore)
        return winner
    }
    else if (humanChoice === computerChoice) {
        console.log("Your score: "+humanScore, "Computer Score: "+computerScore)
        return draw
    }
    else {
        computerScore= computerScore+1
        console.log("Your score: "+humanScore, "Computer Score: "+computerScore)
        return loser}
   }

const humanSelection= getHumanChoice();
const computerSelection= getComputerChoice();

playRound(humanSelection,computerSelection);

