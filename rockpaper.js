
function computerChoice(){
    let randomNumber = Math.floor(Math.random() * 3) + 1; //epistrefei random arithmo apo 1-3
    if(randomNumber == 1){
        console.log("Computer chose rock");
        return "rock";
    }  
    else if(randomNumber == 2){
        console.log("Computer chose paper");
        return "paper";
    }
    else if(randomNumber == 3){
        console.log("Computer chose scissors");
        return "scissors";
    }
}



function getHumanChoice(){
    let humanChoice = prompt("Choose: ").toLowerCase();
    if(humanChoice === "rock"){
        console.log("You chose rock");
        return "rock";
    }
    else if(humanChoice === "paper"){
        console.log("You chose paper");
        return "paper";
    }
    else if(humanChoice === "scissors"){
        console.log("You chose scissors");
        return "scissors";
    }
}

function result(computerChoice, getHumanChoice){
    if (computerChoice === getHumanChoice){
        return "Tie!";
    }
    if (computerChoice=== "rock" && getHumanChoice === "paper"){
        return "You win! Paper beats rock!";
    }
    if(computerChoice === "rock" && getHumanChoice === "scissors"){
        return "You lose! Rock beats scissors!";
    }
    if(computerChoice === "paper" && getHumanChoice === "rock"){
        return "You lose! Paper beats rock!";
    }
    if(computerChoice === "paper" && getHumanChoice === "scissors"){
        return "You win! Scissors beats paper!";
    }
    if(computerChoice === "scissors" && getHumanChoice === "paper"){
        return "You lose! Scissors beats paper!";
    }
    if (computerChoice === "scissors" && getHumanChoice === "rock"){
        return "You win! Rock beats scissors!";
    }
}

console.log(result (computerChoice(), getHumanChoice()));