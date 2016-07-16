
// Initialize property values for hangmanGame

var hangmanGame = {
    userGuess: "",
    word: "",
    wrongAllowed: 7,
  	goodLetters: 0,
  	wordArray: [],
  	badArray: [], 
  	wins: 0,
  	presidents: [
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
],

//Is there a win?
winCheck:function {
	if (this.goodLetters=this.lastIndexOf())

},

//Start with picking a random president.
	pickWord: function(){
	this.word = hangmanGame.presidents[Math.floor(Math.random() * hangmanGame.presidents.length)];
	console.log(this.word);
	},

//Draw underscores for the length of the word.

	drawSpaces: function () {
		var i;
		for (var i = 0; i < hangmanGame.word.length; i++) {
     		this.wordArray[i] = "_"};
     	console.log(this.wordArray);
     	},


   
//Update gamestats for hangmanGame
    //showGuess: function(keyPressed) {
    //alert(keyPressed);
    //this.userGuess++;
    //console.log(this.userGuess);
    
//Check userGuess to see if it is in the word.
	
	checkLetter: function() {
	var indexLetter = this.word.indexOf("this.userGuess");
	if(indexLetter == -1) {
       alert: "Try again!";
       this.wrongAllowed--;
       console.log(this.wrongAllowed);
       this.badArray.push("this.userGuess");
       console.log(this.badArray);
   		}

   	else if(indexLetter > -1) {
   		alert: "Yay, you got a letter!"
   		this.wordArray.splice(indexLetter, 1, "this.userGuess");
   		//console.log(this.wordArray);
   		this.goodLetters++;
   		//console.log(this.goodLetters);
   		}
	}
  }
//game setup and procedures
	hangmanGame.pickWord(); 

//UserGuess letter
document.onkeyup = function(event) {
		var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
		console.log(userGuess);
	}
	hangmanGame.drawSpaces();

	hangmanGame.checkLetter();





