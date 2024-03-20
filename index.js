const buttons = document.querySelectorAll("button");
const result = document.getElementById("result");
const playerScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // console.log("Your move: ", + button.id + "Computer move: " + computerMove());
    result.innerText = roundWinner(button.id, computerMove());
  });
});

function computerMove() {
  const move = Math.floor(Math.random() * buttons.length);
  return buttons[move].id;
}

function roundWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    playerScoreEl.innerText = playerScore;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    computerScoreEl.innerText = computerScore;
    return `You loose! ${computerSelection} beats ${playerSelection}`;
  }
}
