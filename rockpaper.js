
//Ask user to type rock paper or scissors
let rock;
let paper;
let scissors;

function userChoice(){

    let input = prompt("Chooce rock, paper, or scissors: ");
    if(input === "rock"){
        let rock = "rock";
        console.log(rock);
    }
    else if(input === "paper"){
        let paper = "paper";
        console.log(paper);
    }
    else if(input === "scissors"){
        let scissors = "scissors";
        console.log(scissors);
    }
    else console.log("Please choose between rock, paper or scissors!")
}
userChoice();

//Make a random number generator
//Assign rock-paper-scissors to the numbers
//Present the generator's choise in the console
function computerChoice(){
    let randomNumber = Math.random()*100+1;

    if(randomNumber <= 33.3333333333){
        let rock = randomNumber;
        console.log("Rock");
        return rock;
    }
    else if(randomNumber > 33.3333333333 && randomNumber < 66.6666666666){
        let paper = randomNumber;
        console.log("Paper");
        return paper;
    }
    else{ 
        let randomNumber = scissors;
        console.log('Scissors');
        return scissors;
        }
}
computerChoice();

//Announce the winner