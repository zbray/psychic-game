//Parameters for keeping score
var wins = 0;
var losses = 0;
var guessesLeft = 9;

//An array to hold guessed letters
var guessedLetters = [];

//Alphabet, playing pieces for the user and computer
var alphabet = "abcdefghijklmnopqrstuvwxyz";

//Make the computer make a choice at random from alphabet and consolog.log its choice
var randomLetter = Math.floor(Math.random() * alphabet.length);
var computerChoice = alphabet[randomLetter];
console.log(computerChoice);

//Running the game program

//Listener to register guesses
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keycode).toLowerCase();
    guessedLetters.push(userGuess);
}





//Game Win/Loss Condition

if (userGuess === computerChoice){
    document.getElementById("wins").innerHTML = wins++;
    )
}
    

if (userGuess === !computerChoice){
    ;
}
