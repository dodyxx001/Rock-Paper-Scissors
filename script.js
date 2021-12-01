// Assinging an event listeners to each logo
// Adding a 'clicked' class, then firing the oneRound function, then
// removing the 'clicked 'class - this action gets the user's input.

let buttons = document.querySelectorAll('.choice');

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
    e.target.classList.add('clicked');
    oneRound();
    e.target.classList.remove('clicked');
});
});


// Result counter (each win adds 1 to the variable)
let playerCounter = 0;
let computerCounter = 0;


// MAIN FUNCTION that includes one round of a game:
// _________________________________________________________________
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


// Getting the user's input  (by 'clicked' class)
let choice = document.getElementsByClassName('clicked')[0].id
let playerInput = choice;


// Saving the inputs to variables
let computerSelection = computerPlay();
let playerSelection = playerInput;


// Printing the choices in the DOM HTML:
let computerChoiceParagraph = document.querySelector('#computer-choice');
computerChoiceParagraph.textContent = computerSelection;

let playerChoiceParagraph = document.querySelector('#player-choice');
playerChoiceParagraph.textContent = playerSelection;


// Animating the background of choices in HTML:
if(playerChoiceParagraph.textContent){
    playerChoiceParagraph.classList.add('showPlayerChoice');
};
if(computerChoiceParagraph.textContent){
    computerChoiceParagraph.classList.add('showComputerChoice');
};

// Removing classes from ShowResults section so they can animate again:
let allChoices = document.querySelectorAll('.choice');
let yourChoice = document.getElementById('player-choice');
let computerChoice = document.getElementById('computer-choice');
// This timeout function removes and adds again the class to repeat the animations:
allChoices.forEach((choice) => {
    choice.addEventListener('click', () => {
        yourChoice.classList.remove('showPlayerChoice');
        computerChoice.classList.remove('showComputerChoice');
        setTimeout(function() {
            yourChoice.classList.add('showPlayerChoice');
            computerChoice.classList.add('showComputerChoice');
        }, 0.01);
        
    });
});

// Function that takes in and compares inputs and declares the winner
let round = (computerSelection, playerSelection) => {
  
  let winText = 'You win the round!';
  let loseText = 'You lose the round!';

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


// Returning the results to user - wintext paragraph
let winTextParagraph = document.querySelector('#wintext');
winTextParagraph.textContent = round(computerSelection, playerSelection);


// Animating the background of wintext:
let winText = document.querySelector('#wintext');
if(winText.textContent){
    winText.classList.add('showWinText');
};


// Adding to the counters of results:
if(round(computerSelection, playerSelection) === 'You win the round!'){
    playerCounter++;
}else if(round(computerSelection, playerSelection) === 'You lose the round!'){
    computerCounter++;
};


// Printing the current value of win-counters in the HTML DOM:
let playerCounterInHtml = document.querySelector('#player-score');
playerCounterInHtml.textContent = playerCounter;

let computerCounterInHtml = document.querySelector('#computer-score');
computerCounterInHtml.textContent = computerCounter;


// Announcement of results in the announcement section - shows only when game reaches 3 rounds:
let announceDiv = document.querySelector('.announce');
let announceWin = document.querySelector('#announce-win');
let announceLose =document.querySelector('#announce-lose');

if(playerCounter >= 3 || computerCounter >= 3){
    announceDiv.classList.add('showAnnouncement');
    let announceScoresParagraph = document.createElement('p');
    announceScoresParagraph.textContent = `Score: You: ${playerCounter}, Comp: ${computerCounter}`;
    announceDiv.appendChild(announceScoresParagraph);
}

if(playerCounter >= 3){
    announceWin.classList.add('showWin');
}

if(computerCounter >= 3){
    announceLose.classList.add('showLose');
}


// Adding blur to the body when announcement shows:
let bodyBlur = document.querySelector('body');
if(playerCounter >= 3 || computerCounter >= 3){
    bodyBlur.classList.add('bodyBlur');
}


// END OF game-round main function
// _________________________________________________________________
};


// Animating the text under logo-buttons:
let textUnderButtons = document.querySelectorAll('.choice img');

textUnderButtons.forEach((btn) => {
    btn.addEventListener('mouseover', (e) => {
        e.target.parentElement.lastElementChild.classList.add('hovering');
    });
    btn.addEventListener('mouseout', (e) => {
        e.target.parentElement.lastElementChild.classList.remove('hovering');
    });
});


// Adding reloading function to PLAY AGAIN button:
let playAgainButton = document.querySelector('#play-again');

playAgainButton.addEventListener('click', () => {
    location.reload();
})














