var userGuess;
var chosenLetter;
var wins;
var losses;
var guessesLeft;
var yourGuessesSofar;

function resetGame () {
    wins = 0;
    guessesLeft = 9;
    losses = 0;
    chosenLetter="";
    userGuess ="";
    yourGuessesSofar = "";
}
function generateRandomLetter(){
    myAlphabet = "abcdefghijklmnopqrstuvwxyz";
    return myAlphabet[Math.floor(Math.random() * Math.floor(max))];
}

function checkLetters(userGuess, chosenLetter){
    //if not a letter or not mach
        // losses += 1;
        // guessesLeft -=1;
        // yourGuessSoFar = yourGuessesSofar + (yourGuessesSofar.length() > 0: ", " + userGuess, userGuess)
    //if mach
    //    wins +=1;
}