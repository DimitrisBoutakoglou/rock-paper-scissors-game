
//Make a random number generator
//Assign rock-paper-scissors to the numbers

function computerChoice(){
    let randomNumber = Math.random()*100+1;

    if(randomNumber <= 33.3333333333){
        console.log('Rock');
    }
    else if(randomNumber > 33.3333333333 && randomNumber < 66.6666666666){
        console.log('Paper');
    }
    else console.log('Scissors');
}
console.log(computerChoice());


//Ask user to type rock paper or scissors
//Present user's choise in the console
//Present the generator's choise in the console
//Announce the winner