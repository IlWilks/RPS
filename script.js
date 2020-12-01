console.log("script.js loaded");

let playerchoice = ["Rock", "Paper", "Scissors"];
let computerchoice = ["Rock", "Paper", "Scissors"];
let gameResults = ["Win", "Lose", "Tie"]

const playRps = () => {
  console.log("Play game");
  let choice = prompt("Player choice"); //need to add dropdown for player choice
  let computer = computerchoice[Math.floor(Math.random()*3)];  //calls random answer from computer choice
  let results = playResults(choice, computer);
  console.log(results);
};

const playResults = (choice, computer) => {
  if (choice == "Rock") {
    if (computer == "Rock"){
      return gameResults[2];
    }
    else if (computer == "Paper"){
      return gameResults[1];
    }
    else if (computer == "Scissors"){
      return gameResults[0];
    }
  }
  else if (choice == "Paper") {
    if (computer == "Rock"){
      return gameResults[0];
    }
    else if (computer == "Paper"){
      return gameResults[2];
    }
    else if (computer == "Scissors"){
      return gameResults[1];
    }
  }
  else if (choice == "Scissors"){
    if (computer == "Rock"){
      return gameResults[1];
    }
    else if (computer == "Paper"){
      return gameResults[0];
    }
    else if (computer == "Scissors"){
      return gameResults[2];
    }
  }
};


const render = () => {
  console.log("Render called");
  let root = document.getElementById("root");
  let htmlString = `<h1 class="header">Rock Paper Scissors</h1>`
  htmlString += `<button id='play' onclick='playRps()'>PLAY</button>`;
  root.innerHTML = htmlString;
};

render();