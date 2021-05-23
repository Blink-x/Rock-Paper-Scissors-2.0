/* cache the DOM,  variables for user/comp score in logic, and their scores to 
update on the scoreboard -- variables for scoreboard, caption, and div of each choice */

let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("userScoreboard");
const compScore_span= document.getElementById("compScoreboard");
const scoreboard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

// function to assign an array of choices to a variable, then randomly choose a number between 0-2,
// then return the random number as a position in the above array
function getCompChoice () {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}


function win(userChoice, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${userChoice} beats ${compChoice}, you win! 👍`;
}

function lose(userChoice, compChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${userChoice} loses to ${compChoice}, you lost this round! 😡`;
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = `What the fuck! It's a tie! 🤔`;
}

//function to take the random choice of computer, and the choice of a human based off what button
// is clicked and compares the two choices

// userChoice is a variable that is assigned from event listener of each button,
// when it is clicked it assigns the id of that button to the variable in the game function
function game (userChoice) {
    const compChoice = getCompChoice ();

    switch(userChoice + compChoice) 
        {
            case "RockScissors":
            case "PaperRock":
            case "ScissorsPaper":
                win(userChoice, compChoice);
                break;
            case "ScissorsRock":
            case "RockPaper":
            case "PaperScissors":
                lose(userChoice, compChoice);
                break;
            case "RockRock":
            case "PaperPaper":
            case "ScissorsScissors":
                draw(userChoice, compChoice);
                break;
        }
}

function main() 
{
    rock_div.addEventListener('click', function(){
        game("Rock");
    })

    paper_div.addEventListener('click', function () {
        game("Paper");
    })

    scissors_div.addEventListener('click', function () {
        game("Scissors");
    })
}

main ();
