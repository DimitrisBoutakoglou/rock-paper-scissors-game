
//Ask user to type rock paper or scissors
function userChoice(rock, paper, scissors){
    let choice = prompt("Choose Rock, Paper or Scissors: ");
    return choice;
}
console.log(userChoice());


/*
//Present user's choise in the console
console.log(userChoice());

//Make a random number generator
//Assign rock-paper-scissors to the numbers
function computerChoice(){
    let randomNumber = Math.random()*100+1;

    if(randomNumber <= 33.3333333333){
        let rock = randomNumber
        console.log('Rock');
    }
    else if(randomNumber > 33.3333333333 && randomNumber < 66.6666666666){
        console.log('Paper');
    }
    else console.log('Scissors');
}

//Present the generator's choise in the console
console.log(computerChoice());

function winState(){
    if((userChoice = "Rock") && (randomNumber = rock));
    console.log('tie');
}
*/




//Announce the winner