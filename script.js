// Result counter (each win adds 1 to the variable)

let playerCounter = 0;
let computerCounter = 0;

// Main function that includes one round of a game:
function oneRound() {

// Function that returns a random result (computer's choice):
let computerPlay = () => {
    let result = Math.floor(Math.random() * 3);
    if (result === 0){
        return 'rock';
    }else if (result === 1){
        return 'paper';
    }else{
        return 'scissors';
    };
};

// Getting the user's input and lowerCasing it
let userInput = prompt("Please enter rock, paper or scissors").toLowerCase();


// Saving the inputs to variables

let computerSelection = computerPlay();
let playerSelection = userInput;

// Function that compares inputs and declares the winner
let round = (computerSelection, playerSelection) => {
  
  let winText = 'Congratulations, you win!';
  let loseText = 'Sorry, you lose!';

  if (computerSelection === playerSelection){
      return 'It\'s a tie!';
  }else if( playerSelection === 'rock' && computerSelection === 'scissors'){
      return winText;
  }else if( playerSelection === 'rock' && computerSelection === 'paper'){
      return loseText;
  }else if( playerSelection === 'paper' && computerSelection === 'rock'){
      return winText;
  }else if( playerSelection === 'paper' && computerSelection === 'scissors'){
      return loseText;
  }else if( playerSelection === 'scissors' && computerSelection === 'paper'){
      return winText;
  }else if( playerSelection === 'scissors' && computerSelection === 'rock'){
      return loseText;
  };
};

// Adding to the counters of results:
if(round(computerSelection, playerSelection) === 'Congratulations, you win!'){
    playerCounter++;
}else if(round(computerSelection, playerSelection) === 'Sorry, you lose!'){
    computerCounter++;
};

// Returning the results to user

alert('The computer choice was: ' + computerSelection + ' -- ' + round(computerSelection, playerSelection));
console.log(round(computerSelection, playerSelection));

// end of game-round main function
};



// Repeating rounds 5 times / if i is true, play oneround
for( let i = 0; i <= 5; i++){
    if(i){oneRound()};
};

// Counting the results of 5 rounds and declaring the winner:

if (playerCounter > computerCounter){
    alert(`'Your result is ${playerCounter} and the computers result is ${computerCounter}. You win the game!'`);
}else if (playerCounter < computerCounter){
    alert(`'Your result is ${playerCounter} and the computers result is ${computerCounter}. You lose the game!'`);
}else if (playerCounter === computerCounter){
    alert(`'Your result is ${playerCounter} and the computers result is ${computerCounter}. The results are tied. Reload the page.'`)
};












