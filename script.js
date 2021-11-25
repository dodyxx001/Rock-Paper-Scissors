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
let userInput = prompt().toLowerCase();

// Saving the inputs to variables
let computerSelection = computerPlay();
let playerSelection = userInput;

// Round of game
let round = (computerSelection, playerSelection) => {
  
  let winText = 'Congratulations, you win!';
  let loseText = 'Sorry, you lose!';

  if (computerSelection === userInput){
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
  
let playerCounter = 0;
let computerCounter = 0;

if(round(computerSelection, playerSelection) === 'Congratulations, you win!'){
    playerCounter++;
}else if(round(computerSelection, playerSelection) === 'Sorry, you lose!'){
    computerCounter++;
};



alert(computerSelection);
console.log(round(computerSelection, playerSelection));




