//Initialize game stats; 
var wins = 0;
var losses = 0;
var wrong = 7;
var right = 0;
var guesses = 0;
var wrongArray = [];

// Initialize property values for game;
var game = {
  presidents: [
    'WASHINGTON',
    'ADAMS', 
    'JEFFERSON',
    'MADISON',
    'MONROE',
    'JACKSON',
    'VANBUREN',
    'HARRISON',
    'TYLER',
    'POLK',
    'TAYLOR',
    'FILLMORE',
    'PIERCE',
    'BUCHANAN',
    'LINCOLN',
    'JOHNSON',
    'GRANT',
    'HAYES',
    'GARFIELD',
    'ARTHUR',
    'CLEVELAND',
    'HARRISON',
    'MCKINLEY',
    'ROOSEVELT',
    'TAFT',
    'WILSON',
    'HARDING',
    'COOLIDGE',
    'HOOVER',
    'TRUMAN',
    'EISENHOWER',
    'KENNEDY',
    'NIXON',
    'FORD',
    'CARTER',
    'REAGAN',
    'BUSH',
    'CLINTON',
    'OBAMA'
  ],

//Is there a win?
winTest: function () {
  if ((wrong > 0) && (right = word.length)) {
    alert('You win!');
    wins++;
    document.getElementById('wins').innerHTML = 'Wins: ' + wins;
  }
    game.resetGame();
  },

//Update the word and spaces if there is a win, loss, or right guess
wordUpdate: function () {
  var wordArray = "";
      console.log(wordArray);
      document.getElementById('word').innerHTML = 'Word: ' + wordArray;
      },

//reset game if there is a win or loss
  resetGame: function () {
    wrongLetter = 7;
    document.getElementById('guessesLeft').innerHTML = "Number of guesses left: " + wrong;
    word = game.presidents[Math.floor(Math.random() * game.presidents.length)];
    console.log(word);
    var wrongArray = [];
    var wordArray = "";
    document.getElementById('wrong').innerHTML = "Wrong letters" + wrongArray;
    },
  	      
//Check userGuess to see if it is in the word.
	
	checkLetter: function() {
	var indexLetter = word.indexOf('userGuess');
	if(wrongArray.indexOf('userGuess') > -1)
    {//do nothing

    }

    else if(indexLetter == -1) {
      alert: 'Try again!';
       wrong--;
       console.log(wrong);
       wrongArray.push(userGuess);
       console.log(wrongArray);
   		}

   	else if(indexLetter > -1) {
   		alert: 'Yay, you got a letter!'
   		wordArray = wordArray.splice(indexLetter, 1, userGuess);
   		console.log(wordArray);
   		right++;
   		console.log(right);
   		}
	}
}

//Beginning counts;
document.getElementById("wins").innerHTML = "Wins: " + wins;
document.getElementById('losses').innerHTML = "Losses: " + losses;
document.getElementById('guessesLeft').innerHTML = "Number of Guesses Left: " + wrong;
document.getElementById('wrong').innerHTML = "Wrong letters: " + wrongArray;

	
//game setup and procedures
	
	
//UserGuess letter
	document.onkeyup = function(event) {
		var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
		console.log(userGuess);
    game.winTest();
    game.wordUpdate();
    game.resetGame();

	}


	

	





