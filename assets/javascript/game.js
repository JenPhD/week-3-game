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

  
  var word = presidents[Math.floor(Math.random() * presidents.length)];
  console.log(word);

//Game begins. Game runs as long as the # of wrongAllowed is greater than 0
//and as long the number of goodLetters is less than the length of the word.

//variables
var game = { 
  wrongAllowed: 7,
  goodLetters: 0,
  wordArray: [],
  badArray: [], 
  wins: 0,
  
//functions

//while (wrongAllowed > 0 && goodLetters < word.length) Do I need this?
 
  
  //Writing the number of dashes based on word length.
  for (var i = 0; i < word.length; i++) {
    wordArray[i] = "_";
  }

//Recording the keypress and then sets it to userguess.
    document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toUpperCase();

//First make sure key pressed has not already been guessed. Not sure this needs to be here.
//if ((guessesMade.indexOf(userGuess>-1)) || (goodLetters.indexOf(userGuess>-1))) {
   // alert("You already guessed that letter!")

//If the guess is in the bad array or if it is in the good array, do nothing other than alert the user they have already guessed it.
  //if ((guessesMade.indexOf(userGuess>-1)) || (goodLetters.indexOf(userGuess>-1))) {
   // alert("You already guessed that letter!")
  //}

//Check to see if userGuess is in the word.
      var indexLetter = word.indexOf("userGuess");
      if(indexLetter == -1)
      {
        alert: "Try again!";
        wrongAllowed--;
        badArray.push("userGuess");
      }
      else (indexLetter > -1)
      {
        wordArray.splice(indexLetter, 1, "userguess");
        goodLetters++
      }
    }
}
   console.log(wordArray);
   console.log(badArray);

 // Taking the tallies and displaying them in HTML
   var html = "<p>Press a letter key to guess a letter in the current puzzle and begin the game</p>" +
   "<p>Wins: " + wins + 
   "</p>" +
   "<p>word:_ _ _ _ _ " //number of dashes should be the number of letters in the length of the string of the word. Replace dashes with correct letters guessed.
    "</p>" +
    "<p>Number of guesses remaining: " + 
    //guessesRemain 
    "</p>";

    //"<p>Letters already guessed: " + userGuess //-correct guesses in the puzzle.
   
  // Placing the html into the game ID
    document.querySelector('#letters').innerHTML = html;
}
//}
