//code to initialize all my variables


//On each document.onkeyup event:

    //ignore duplicate guesses
    //if (userLetter is not in GuessesMade array) {
    
        //add userLetter to guessesMade
        //update HTML to show guessesMade

        //if (userLetter is inside secretWord) {
           // correct guess, update HTML to show correct guess
        //}
        //else {
            //guessesLeft = guessesLeft - 1;
            // wrong guess, update HTML to show fewer tries left
        //}
    //}

    //if (guessesLeft == 0) {
        // reset variables for next game
    //}

  // Sets the computer choices 

  var presidents = [
    "WASHINGTON",
    "ADAMS", 
    "JEFFERSON",
    "MADISON",
    "MONROE",
    "JACKSON",
    "VANBUREN",
    "HARRISON",
    "TYLER",
    "POLK",
    "TAYLOR",
    "FILLMORE",
    "PIERCE",
    "BUCHANAN",
    "LINCOLN",
    "JOHNSON",
    "GRANT",
    "HAYES",
    "GARFIELD",
    "ARTHUR",
    "CLEVELAND",
    "HARRISON",
    "MCKINLEY",
    "ROOSEVELT",
    "TAFT",
    "WILSON",
    "HARDING",
    "COOLIDGE",
    "HOOVER",
    "TRUMAN",
    "EISENHOWER",
    "KENNEDY",
    "NIXON",
    "FORD",
    "CARTER",
    "REAGAN",
    "BUSH",
    "CLINTON",
    "OBAMA"
    ];

  // Declares the tallies to 0 
 // var wins = 0; //++the number of words correctly guessed
  //var badLetters = 0; //++the number of wrong letters;
  //var goodLetters = 0; //++the number of good letters;
  //var emptyArray = []; //++underscore 
  //var badArray = []; //putting the bad letters in an array;
  //var goodArray = [];//putting the good letters in an array;
  //var guessesRemain = 7 - badLetters;//not sure this will stay this way as I am guessing I need a loop that increments down.

  //Recording the keypress and then sets it to userguess.

  
  

  document.onkeyup = function(event) {
  var userGuess = String.fromCharCode(event.keyCode).toUpperCase();

  console.log(userGuess);

  //var word = presidents[Math.floor(Math.random() * presidents.length)];
  
  // This sets the president name chosen to random and stores as word.
  


  //push, do this later
 // badArray.push("badLetters");

//If the guess is in the bad array or if it is in the good array, do nothing other than alert the user they have already guessed it.
  //if ((guessesMade.indexOf(userGuess>-1)) || (goodLetters.indexOf(userGuess>-1))) {
   // alert("You already guessed that letter!")
  //}

//If the userGuess is in the word, add to the good array.
  //if(guessesMade)

  
  
  //if (word.indexOf(userGuess)>-1) {
    //console.log ("Found" + userGuess "in the" + word);


 // Taking the tallies and displaying them in HTML
   // var html = "<p>=Press a letter key to guess a letter in the current puzzle and begin the game</p>" +
   // "<p>Wins: " + 
   // wins + 
   // "</p>" +

    //"<p>word:_ _ _ _ _ " //number of dashes should be the number of letters in the length of the string of the word. Replace dashes with correct letters guessed.
    //"</p>" +
    //"<p>Number of guesses remaining: " + 
    //guessesRemain 
    //"</p>";

    //"<p>Letters already guessed: " + userGuess //-correct guesses in the puzzle.
   
  // Placing the html into the game ID
    document.querySelector('#letters').innerHTML = html;
}

