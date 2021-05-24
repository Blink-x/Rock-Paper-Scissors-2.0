/*
cache the DOM, establishing variables for the different DOM elements we will be changing
as well as the variables within the JavaScript
*/

let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('userScoreboard');
const compScore_span = document.getElementById('compScoreboard');
const result_p = document.querySelector('.result > p')
const scoreboard_div = document.querySelector('scoreboard');
const rock_div = document.getElementById('Rock');
const paper_div = document.getElementById('Paper');
const scissors_div = document.getElementById('Scissors');

/*
function creates an array of "rock, paper scissors" and stores it in a variable

we then use the math floor.math random function to randomly choose between 3 numbers
and store into variable

we then take the array variable, and whatever random number variable from above,
and take the position of the array that is that random number variable, to randomly
choose that position in the array
*/

function getCompChoice () {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

function playRound (userChoice) 
{
    const compChoice = getCompChoice(); 
    switch (userChoice + compChoice)
    {
        case 'RockScissors':
        case 'PaperRock':
        case 'ScissorsPaper':
            win(userChoice, compChoice);
            break;
        case 'RockPaper':
        case 'PaperScissors':
        case 'ScissorsRock':
            lose(userChoice, compChoice);
            break;
        case 'RockRock':
        case 'PaperPaper':
        case 'ScissorsScissors':
            draw(userChoice, compChoice);
            break;
    }
}

/*
tell the window to listen for clicks on each div
funs anon func to pass that choice as an argument into playround func, and runs that func
*/

function main () 
{
    rock_div.addEventListener('click', () => playRound ('Rock'));      

    paper_div.addEventListener('click', () => playRound('Paper'));

    scissors_div.addEventListener('click', () => playRound('Scissors'));   
}

function win(userChoice, compChoice) 
{
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${userChoice} beats ${compChoice}, you WIN! 😻👍`;
    userChoice_div.classList.add('green-glow');
    document.querySelector('.scoreboard').classList.add('green-glow');
    setTimeout
    (function() 
        {
            userChoice_div.classList.remove('green-glow');
            document.querySelector('.scoreboard').classList.remove('green-glow');
        }, 500
    )
}

function lose(userChoice, compChoice)
{
    compScore++;
    userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${userChoice} loses to ${compChoice}, you LOST! 😡`;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    userChoice_div.classList.add('red-glow');
    document.querySelector('.scoreboard').classList.add('red-glow');
    setTimeout
    (function() 
        {
            userChoice_div.classList.remove('red-glow');
            document.querySelector('.scoreboard').classList.remove('red-glow');
        }, 500
    )
}

function draw(userChoice, compChoice) 
{
    userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `Wow, you both had the same idea! It's a tie!`;
    userChoice_div.classList.add('gray-glow');
    document.querySelector('.scoreboard').classList.add('gray-glow');
    setTimeout
    (function() 
        {
            userChoice_div.classList.remove('gray-glow');
            document.querySelector('.scoreboard').classList.remove('gray-glow');
        }, 500
    )
}

main ();