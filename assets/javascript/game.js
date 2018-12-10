//Parameters for keeping score
var wins = 0;
var losses = 0;
var guessesLeft = 9;

//An array to hold guessed letters
var guessedLetters = [];

//Alphabet, playing pieces for the user and computer
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Make the computer make a choice at random from alphabet and consolog.log its choice
var randomLetter = Math.floor(Math.random() * alphabet.length);
var computerChoice = alphabet[randomLetter];

console.log(computerChoice);

//Listener to register guesses
document.onkeyup = function(event) {
    var userGuess = event.key;
}





//Game Win/Loss Condition

if (userGuess === computerChoice){
    wins++;
}
    

if (userGuess === !computerChoice){
    ;
}