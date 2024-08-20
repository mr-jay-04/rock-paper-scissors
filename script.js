function getComputerChoice(){
    let compChoice=Math.random();

    if (compChoice<0.33){
        return "rock";
    }
    else if (compChoice<0.66){
        return "paper";
    }
    else {
        return "scissor";
    }
}


function getHumanChoice(){
    let humanChoice=prompt("What's your choice? ");
    return humanChoice;
}

function checkWinner(humanScore,compScore){
    if (humanScore>compScore) console.log("Game Over! You win");
    else if (humanScore==compScore) console.log("Game Over! It's a tie");
    else console.log("Game over! Computer wins");
}

function playGame(){

    let humanScore = 0;
    let compScore = 0;

    function playRound(humanChoice, compChoice){
        if (humanChoice.toLowerCase()==compChoice){
            console.log("Tie");
        }
    
        else if (humanChoice.toLowerCase()=="rock" && compChoice=="paper"){
            console.log("You lose! Paper beats rock");
            compScore+=1;
        }
        else if (humanChoice.toLowerCase()=="rock" && compChoice=="scissor"){
            console.log("You win! Rock beats scissor");
            humanScore+=1;
        }
        else if (humanChoice.toLowerCase()=="paper" && compChoice=="scissor"){
            console.log("You lose! Scissor beats paper");
            compScore+=1;
        }
        else if (humanChoice.toLowerCase()=="paper" && compChoice=="rock"){
            console.log("You win! Paper beats rock");
            humanScore+=1;
        }
        else if (humanChoice.toLowerCase()=="scissor" && compChoice=="rock"){
            console.log("You lose! Rock beats scissor");
            compScore+=1;
        }
        else if (humanChoice.toLowerCase()=="scissor" && compChoice=="paper"){
            console.log("You win! Paper beats rock");
            humanScore+=1;
        }
    }

    for (let i=0; i<5; i++){
        compChoice = getComputerChoice();
        console.log(compChoice);
        humanChoice = getHumanChoice();
        console.log(humanChoice);

        playRound(humanChoice,compChoice);
    }

    console.log(humanScore);
    console.log(compScore);
    checkWinner(humanScore,compScore);
}

playGame();