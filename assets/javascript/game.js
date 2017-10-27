
  // Creates an array of possible choices for the computer
  var allLetters = "abcdefghijklmnopqrstuvwxyz".split('');
  let randomLetter = () => allLetters[Math.floor(Math.random() * allLetters.length)];

// Creating variables to hold the number of wins, losses. They start at 0.
  const NUM_GUESSES = 10;
  let wins = 0;
  let losses = 0;
	let computerGuess = randomLetter();
  const alreadyGuessed = [];
  alreadyGuessed.push = function(data) {
    let ret = Array.prototype.push.call(this, data);
      update_guesses();
		return ret;
  }

  // Update all of the text fields
  function update_guesses() {
    Array.prototype.forEach.call(document.getElementsByClassName('guesses_left'), function(elem) {
			elem.textContent = NUM_GUESSES - alreadyGuessed.length;
		});
		Array.prototype.forEach.call(document.getElementsByClassName('letters_guessed'), function(elem) {
			elem.textContent = alreadyGuessed.join(",");
		});
  }

    // Reset function. I call this when I have a loss or win, resetting the randomizer, the number of guessed left, and making my array empty again.
  function reset() {
    alreadyGuessed.splice(0);  // This trick will keep the 'push' function on the array and delete it
    computerGuess = randomLetter();
    console.log("The right answer is: " + computerGuess);

    update_guesses();
		Array.prototype.forEach.call(document.getElementsByClassName('win_count'), function(elem) {
			elem.textContent = wins;
		});
		Array.prototype.forEach.call(document.getElementsByClassName('loss_count'), function(elem) {
			elem.textContent = losses;
		});
  }

  // This function is run whenever the user presses a key. We "document" the event when the user releases a key. We will pass the function an argument, the event, which is the key that the user presses.
  document.onkeyup = function(event) {
		// Determines which key was pressed.We're making a variable to store the event.
		let userGuess = event.key;
		if(!allLetters.includes(userGuess)){return;};
    if (alreadyGuessed.includes(userGuess)){
	    alert("yo dum dum. that answer still isn't right...")
    	return;
    };
    alreadyGuessed.push(userGuess);

		if(NUM_GUESSES - alreadyGuessed.length <= 0) {
			losses++;
			alert("YOU LOSE!");
      reset();
		}
    // If the userGuess is the same as the random computer guess AND they have more than 0 guesses left, the user has won. We alert them, add 1 to their wins, and call the reset function.
		else if(computerGuess === userGuess) {
      wins++;
      alert("You win!");
			reset();
    }
    // If they've guessed wrong but they have >0 guesses left, we want to take their event.key and push it into the empty already guessed aray. We also want to keep track of all the guesses and eventually display it the user as a string.
		else{
      console.log("Nope: " + userGuess + " is not right!");
    }
  }
  reset();
