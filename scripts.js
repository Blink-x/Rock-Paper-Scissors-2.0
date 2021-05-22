/* cache the DOM,  variables for user/comp score in logic, and their scores to be updated on the scoreboard --
    variables for scoreboard, caption, and div of each choice */


const userScore = 0;
const compScore = 0;
const userScore_span = document.getElementById("userScoreboard");
const compScore_span= document.getElementById("compScoreboard");
const scoreboard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

// function to assign an array of choices to a variable, then randomly choose a number between 0-2,
// then return the random number as a position in the above array
function getCompChoice () {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}


function game (userChoice) {
    const compChoice = getCompChoice ();
    console.log(compChoice);
    console.log("You chose " + userChoice);
}

game("c");

function main() 
{
    rock_div.addEventListener('click', function(){
        game("rock");
    })

    paper_div.addEventListener('click', function () {
        game("paper");
    })

    scissors_div.addEventListener('click', function () {
        game("scissors");
    })
}

main ();
