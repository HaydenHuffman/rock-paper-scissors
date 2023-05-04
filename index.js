let rps = ["rock", "paper", "scissors"]
let myScore = 0;
let compScore = 0;

function getComputerChoice(){
    return computerSelection = rps[Math.floor(Math.random()* 3)];
}

function playRound(playerSelection, computerSelection) {


    if (playerSelection === computerSelection) {
      return ("It's a draw!");
    } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
      myScore = myScore + 1;
      return ("You win! Rock beats scissors");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      compScore = compScore + 1;
      return ("You lose! Paper beats rock");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      myScore = myScore + 1;
      return ("You win! Paper beats rock");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
      compScore = compScore + 1;
      return ("You lose! Scissors beat paper");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
      myScore = myScore + 1;
      return ("You win! Scissors beat paper");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      compScore = compScore + 1;
      return ("You lose! Rock beats scissors");
    }
  }
function game () {
  while (myScore < 5 && compScore < 5) {
    let playerSelection = prompt("Choose Your Weapon");
    console.log("The computer plays " + getComputerChoice());
    console.log(playRound(playerSelection, computerSelection)); 
    console.log("Your score is " + myScore + " and the computer's score is " + compScore)
  } if (myScore == 5) {
    console.log("You Win!")
    alert("You beat the computer.")
  } else {
    console.log("The computer wins!")
    alert("The computer beat you.")
  }
}

game();



