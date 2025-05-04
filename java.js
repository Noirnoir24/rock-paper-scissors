
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

let humanChoice

let humanScore=0
let computerScore=0


    if(humanScore>4) {
        console.log("Player wins!")
    }
    else if (computerScore>4) {
        console.log("Computer Wins!")
    }
    



const buttons= document.querySelectorAll("button");
for (const button of buttons) {
    button.addEventListener("click", () => {
        humanChoice= button.textContent;
        playRound(humanChoice, getComputerChoice())
        const result= document.querySelector("#announcer")
        if(humanScore>4) {
            result.textContent="Player wins!"
        }
        else if (computerScore>4) {
            result.textContent="Computer Wins!"
        }

        if (humanScore > 4 || computerScore > 4) {
            buttons.forEach(btn => btn.disabled = true);
        }
})
}
    

function playRound(humanChoice,computerChoice) {
    let draw= "Draw!"
    let winner= "You win!"
    let loser= "You lose..."

    const result= document.querySelector("#announcer")

    
    if (humanChoice=== "Rock" && computerChoice=== "Scissors") {
        humanScore= humanScore+1
        result.textContent= (winner + " Your score: "+humanScore + " Computer Score: "+computerScore)
        console.log (winner)
        console.log("Your score: "+humanScore, "Computer Score: "+computerScore)
        
    }
    else if (humanChoice=== "Scissors" && computerChoice==="Paper") {
        humanScore= humanScore+1
        result.textContent= (winner + " Your score: "+humanScore + " Computer Score: "+computerScore)
        console.log (winner)
        console.log("Your score: "+humanScore, "Computer Score: "+computerScore)
    }
    else if (humanChoice=== "Paper" && computerChoice==="Rock") {
        humanScore= humanScore+1
        result.textContent= (winner + " Your score: "+humanScore + " Computer Score: "+computerScore)
        console.log (winner)
        console.log("Your score: "+humanScore, "Computer Score: "+computerScore)
    }
    else if (humanChoice === computerChoice) {
        result.textContent= (draw + " Your score: "+humanScore + " Computer Score: "+computerScore)
        console.log (draw)
        console.log("Your score: "+humanScore, "Computer Score: "+computerScore)
    }
    else {
        computerScore= computerScore+1
        result.textContent= (loser + " Your score: "+humanScore + " Computer Score: "+computerScore)
        console.log (loser)
        console.log("Your score: "+humanScore, "Computer Score: "+computerScore)
        }
   }

        
        



