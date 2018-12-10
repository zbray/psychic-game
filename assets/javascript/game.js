//Variables
var wins = 0;
var losses = 0;
var guessesLeft = 9; //Every round begins with 9 chances to win
var guessedLetters = []; //An array to hold guessed letters
var alphabet = "abcdefghijklmnopqrstuvwxyz"; //Alphabet, playing pieces for the user and computer

//Make the computer make a choice at random from alphabet and consolog.log its choice
var randomLetter = Math.floor(Math.random() * alphabet.length);
var computerChoice = alphabet[randomLetter];
console.log(computerChoice);


function reset(){ // this code showed up twice so I'm saving the space by making it a function
    guessesLeft = 9; //this resets the guess counter
    guessedLetters = ""; //this removes the displayed guesses from the previous round
}

//Game Program

//Listener to register guesses
document.onkeyup = function(event) { //runs the game on key up
    var userGuess = String.fromCharCode(event.keycode).toLowerCase(); //storing userGuess as a lower case to compare to computerChoice later
    guessedLetters.push(userGuess); //displaying to user the letters they guessed
    guessesLeft--; //everytime the user guesses the counter subtracts 1

//Game Win Condition
    if (userGuess == computerChoice){
        wins++;
        alert("You must be psychic! Congratulations on guessing correctly. You've won this round!");
        reset();
}
    

if (userGuess === !computerChoice){
    ;
}
}