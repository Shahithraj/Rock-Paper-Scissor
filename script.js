let playerScore = document.getElementById('player-score');
let hands = document.getElementById('hands');
let result = document.getElementById('result');
let endGameButton = document.getElementById('endGameButton');
let rpsButtons = document.querySelectorAll('.rpsButton');
let computerScore = document.querySelector('.computer-score');

let scores = {
  computerScore: 0,
  playerScore: 0,
};

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
// playerScore.innerHTML = 0

function getComputerChoice() {
  const rpsChoices = ['Rock', 'Paper', 'Scissors'];
  // Math.random() return => 0 to 1 multiply by 3 will return 0 to 2
  const computerChoice = rpsChoices[Math.floor(Math.random() * 3)];
  return computerChoice;
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0

function getResults(playerChoice, computerChoice) {
  let score;
  // All situation of human draws, score = 0
  if (playerChoice == computerChoice) {
    score = 0;
  }
  // human wins situation
  else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    score = 1;
  } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
    score = 1;
  } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    score = 1;
  }
  // human loses situation
  else {
    score = -1;
  }
  return score;
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score.
// Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  switch (score) {
    case 0:
      result.innerHTML = "It's a Draw";
      break;
    case 1:
      result.innerHTML = 'You Win';
      scores.computerScore += -1;
      scores.playerScore += 1;

      break;
    case -1:
      result.innerHTML = 'You Lose';
      scores.computerScore += 1;
      scores.playerScore += -1;
      break;
  }
  playerScore.innerHTML = `Your Score : ${scores.playerScore}`;
  computerScore.innerHTML = `computer Score : ${scores.computerScore}`;
  hands.innerHTML = `&#x1F466; ${playerChoice} vs &#x1F916; ${computerChoice}`;
}

function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice();
  const score = getResults(playerChoice, computerChoice);
  showResult(score, playerChoice, computerChoice);
}

function playGame() {
  // loop the button
  rpsButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      onClickRPS(e.target.value);
    });
  });
}

endGameButton.onclick = () => endGame();
function endGame() {
  playerScore.innerHTML = '';
  hands.innerHTML = '';
  result.innerHTML = '';
  computerScore.innerHTML = '';
  if (scores.playerScore > scores.computerScore) {
    alert('You win the match');
  } else if (scores.playerScore < scores.computerScore) {
    alert('You Lost');
  } else {
    alert('Match Draw');
  }
  scores.playerScore = 0;
  scores.computerScore = 0;
}

playGame();
