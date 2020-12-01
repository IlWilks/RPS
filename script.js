console.log("script.js loaded");

let user = {name: "Player", choice: ["Rock", "Paper", "Scissors"], wins: 0};
let computer = {name: "Computer", choice: ["Rock", "Paper", "Scissors"], wins: 0};
let gameResults = ["win", "lose", "tie"]
let imageSources = [`<img src="https://cdn.vox-cdn.com/thumbor/2yltsYkqhIIiu6NxFLEqvHmyaoQ=/69x0:856x525/1400x1050/filters:focal(69x0:856x525):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/50263513/Screen_Shot_2016-08-01_at_12.34.21_PM.0.0.png" width=300></img>`,
                    `<img src="https://external-preview.redd.it/BDj-z_BuGW6eIdtXsMnd9QQdPWteI1_jZ7dUBHtq02Y.jpg?auto=webp&s=ce75d56cfaab50e8905385cb72fdb2efd3fc026f" width=300></img>`,
                    `<img src="https://i.insider.com/5fbfc9a2037cbd00186127de?width=600&format=jpeg&auto=webp" width=300></img>`];

let state = {
  headerText: "Rock Paper Scissors",
  players: [user, computer],
  sortBy: "name",
};

const winAdds = (result) => {
  if (result == "win") {
    state.players[0].wins++;
  }
  else if (result == "lose") {
    state.players[1].wins++;
  }
};

const playRps = (selection) => {
  console.log("Play game"); //need to add dropdown for player choice
  let cpuchoice = computer.choice[Math.floor(Math.random()*3)];  //calls random answer from computer choice
  let results = playResults(selection, cpuchoice);
  console.log(results);
  alert(`You chose ${selection}, and the computer chose ${cpuchoice}. You ${results}.`);
  winAdds(results);
  render();
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

const renderGame = () => {
  let htmlString = `<div class='list'>`;
  state.players[0].choice.forEach((choice, i=0) => {
    htmlString += `<div class="choice">
                      <div onclick='playRps("${choice}")'>${imageSources[i]}</div>
                    </div>`;  
                    i++;               
  });
  htmlString += `</div>`;
  return htmlString;
};


const render = () => {
  console.log("Render called");
  let root = document.getElementById("root");
  let htmlString = `<h1 class="header">Rock Paper Scissors</h1></br>`
  htmlString += `
                  <div class="info">
                    <p>Your Wins: ${state.players[0].wins}</p>
                    <p>Computer Wins: ${state.players[1].wins}</p>
                    <p>Click a selection below to play!</p>
                  </div>
                `;
  htmlString += renderGame();
 
  
  root.innerHTML = htmlString;
};

render();