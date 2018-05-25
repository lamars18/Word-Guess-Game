// Guess the word one letter at a time.
// Each player is only allowed 10 guesses
var wordList = ["chrome", "firefox", "codepen", "javascript", "jquery", "twitter", "github", "wordpress", "opera", "sass", "layout", "standards", "semantic", "designer", "developer", "module", "component", "website", "creative", "banner", "browser", "screen", "mobile", "footer", "header", "typography", "responsive", "programmer", "css", "border", "compass", "grunt", "pixel", "document", "object", "ruby", "modernizr", "bootstrap", "python", "php", "pattern", "ajax", "node", "element", "android", "application", "adobe", "apple", "google", "microsoft", "bookmark", "internet", "icon", "svg", "background", "property", "syntax", "flash", "html", "font", "blog", "network", "server", "content", "database", "socket", "function", "variable", "link", "apache", "query", "proxy", "backbone", "angular", "email", "underscore", "cloud"];
// Create a variable to store the number of bad guesses
var bad_guesses = 0;
// Create another array to store good guesses
var good_guesses = [];
//Create varaiable to store number of times user successfully guesses the word
var wins = 0;
//Create varaiable to store number of times user fails to guess the word
var losses = 0;
//Create varaiable to store number of guesses user has
var numGuesses = 10;
//Create varaiable to store the users guesses 
var guessChoices = [];

//Loop that starts game on key entry by selectng a random word from the wordlist, 


document.onkeyup = function(event) {

    var userGuess = event.key;

    var secret_word = wordList[Math.floor(Math.random() * wordList.length)];

    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

// Fill this array with placeholders for guessing
for (i = 0; i < secret_word.length; i++) {
  good_guesses.push("_");
  
  

}

// Start a loop that continues as long as the person has
// not guessed wrong ten times, or all of the letters have
// been guessed.
while (bad_guesses !== 10 && good_guesses.indexOf("_") !== -1) {

  // Prompt Player to guess a letter and store as
  // a variable.
  // put this in a loop until a valid response is received.
 

  var guess = prompt("Number of Guesses Remaining =" +  numGuesses + "\n\n" + "Guesses so Far:" + guessChoices + "\n\n" + good_guesses.join(" ") + "\n\n" + "Player 2: Guess a letter." );
  

  // If the letter does not exist in the word,
  // add it to the bad guesses.
  if (secret_word.indexOf(guess) === -1) {
    guessChoices.push(userGuess);
    bad_guesses++;
    numGuesses--;
    alert("Bad guess!");

  // If the letter exists in the word, we need to
  // add it to the good guesses array
  } else {
    for (i = 0; i < secret_word.length; i++) {
      // Each time the guess letter is found, we
      // add it as a good guess in the same spot
        if (secret_word[i] === guess) {
          good_guesses[i] = guess;
        }
    }
  }
}



// Once the player has exited the loop, congratulate
// them on a win, or tell them they have lost and show
// the secret word.
if (bad_guesses === 10 && numGuesses === 0) {
    losses++;
    alert("Sorry, please play again!");
    good_guesses = [];
    bad_guesses = [];
    guessChoices = [];
    numGuesses = 10;

} else {
    wins++;
  alert("Congratulations on your win!");
  good_guesses = [];
  bad_guesses = [];
  guessChoices = [];
  numGuesses = 10;
   
}
alert("The secret word was " + secret_word);
alert("PRESS OK AND THEN PRESS ANY LETTER KEY TO PLAY AGAIN");

//Finally, show results in HTML 

var html = 
			"<h1> The Word Guess Game </h1>" +
			"<p>Guess what word I'm thinking of!</p>" +
			"<p>Wins: " + wins + "</p>" +
			"<p>Losses: " + losses + "</p>" +
			"<p>Guesses Left: " + numGuesses + "</p>" +
			"<p>Your Guesses so far: " + guessChoices.join(",") + "</p>";

            document.querySelector("#game").innerHTML = html;


}
