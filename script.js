function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  return computerChoice = choice[Math.floor(Math.random() * 3)];
}

function roundCounter() {
  round += 1;
  roundsPlayed.textContent = `Round ${round}`;
}

function roundOutcome() {
  chosenChoices.textContent = `You chose ${playerChoice} and the computer chose ${computerChoice}...`;
  switch (true) {
    case (playerChoice == computerChoice):
      outcome.textContent = `Tie! No one wins this round.`;
      break;
    case (playerChoice == 'rock' && computerChoice == 'scissors'):
    case (playerChoice == 'paper' && computerChoice == 'rock'):
    case (playerChoice == 'scissors' && computerChoice == 'paper'):
      firstWord = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
      outcome.textContent = `${firstWord} beats ${computerChoice}! Nice one.`;
      playerWins++;
      break;
    case (playerChoice == 'rock' && computerChoice == 'paper'):
    case (playerChoice == 'paper' && computerChoice == 'scissors'):
    case (playerChoice == 'scissors' && computerChoice == 'rock'):
      firstWord = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
      outcome.textContent = `${firstWord} beats ${playerChoice}! Unlucky...`;
      computerWins++;
      break;
  }
}

function hasGameEnded() {
  if (playerWins == 5 || computerWins == 5) {
    const endMessage = document.createElement('h3');
    buttons.forEach(button => button.setAttribute('disabled', ""));
    if (playerWins == 5) {
      endMessage.textContent = "Congratulations! You won the best of 5 in Rock-Paper-Scissors!";
    }
    else {
      endMessage.textContent = "Bummer! Better luck next time!";
    }
    results.appendChild(endMessage);
  }
}

var round = 0, playerChoice, computerChoice, firstWord, playerWins = 0, computerWins = 0;

const introMessage = document.querySelector('.intro');
const buttons = document.querySelectorAll('button');
const results = document.querySelector('.results');
const roundsPlayed = document.createElement('h2');
results.appendChild(roundsPlayed);
const chosenChoices = document.createElement('h2');
results.appendChild(chosenChoices);
const outcome = document.createElement('p');
results.appendChild(outcome);
const playerScore = document.createElement('p');
results.appendChild(playerScore);
const computerScore = document.createElement('p');
results.appendChild(computerScore);

buttons.forEach(button => button.addEventListener('click', () => {
  playerChoice = button.getAttribute('class');
  introMessage.textContent = "";
  getComputerChoice();
  roundCounter();
  roundOutcome();
  hasGameEnded();
  playerScore.textContent = `Player score = ${playerWins}`;
  computerScore.textContent = `Computer score = ${computerWins}`
}));

