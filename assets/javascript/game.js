var userGuess = "";
var computerGuess = "";
var done = false;
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuessSofar= "";
var alphabetString = "abcdefghijklmnopqrstuvwxyz";
var computerGuess = alphabetString[Math.floor(Math.random() * alphabetString.length)];

var playButton = document.getElementById("button");

playButton.onclick = function(){
    location.reload();
}
playButton.style.display = "none";
document.onkeyup = function(event) {

    if (!done) { // if the user has guesses left done will be false.
       //get user entered key
        userGuess = event.key.toLowerCase();
        
        //if user pressed a valid key, let the game go on. 
        if (alphabetString.indexOf(userGuess)>=0){

            // if the user gets it, 
            // 1. increase win and 
            // 2. reset guesses left to 9
            // 3. select a new letter to mach
            if (userGuess === computerGuess) {
                wins++;
                guessesLeft = 9;
                document.getElementById("my-thought").innerHTML = "Good Job!!! You may be a Pshycic. ";
                computerGuess = alphabetString[Math.floor(Math.random() * alphabetString.length)];
            } else { // user did not guess correctly. Increase losses and decriment guesses left
                losses++;
                guessesLeft--;
            }

            // Avoid leading "," when concatnating chars.
            if (yourGuessSofar.length == 0){
                yourGuessSofar += userGuess;
            }
            else{
                yourGuessSofar += (", " + userGuess);
            }

            // Display game results / stats
            document.getElementById("wins-text").innerHTML = wins;
            document.getElementById("losses-text").innerHTML = losses;
            document.getElementById("guessleft-text").innerHTML= guessesLeft;
            document.getElementById("guessedsofar-text").innerHTML = yourGuessSofar;

            if (parseInt(guessesLeft) <= 0){
                //Game is over, deliver bad news to the player.
                document.getElementById("my-thought").innerHTML = "Sorry, you are not a Pshycic!! I was thinking of: ";
                document.getElementById("the-letter").innerHTML = computerGuess;
                done = true;                        // set the game state to done
                playButton.style.display = "block" // display replay button
            }
            //document.getElementById("the-letter").innerHTML = computerGuess;
                
        } 
    }
    
}