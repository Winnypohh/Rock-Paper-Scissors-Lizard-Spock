const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');

const scoreboard = {
     player: 0,
     computer: 0,
}

/*Game play*/
function play(e) {
     restart.style.display = 'inline-block';
     const playerChoice = e.target.id;
     const computerChoice = getComputerChoice();
     const winner = getWinner(playerChoice, computerChoice);
     showWinner(winner, computerChoice);
}

/*Comp. choice*/
function getComputerChoice() {
     const randomNumber = Math.floor(Math.random() * 5) + 1

     if (randomNumber === 1) {
          return 'rock';
     }
     if (randomNumber === 2) {
          return 'paper';
     }
     if (randomNumber === 3) {
          return 'scissors';
     }
     if (randomNumber === 4) {
          return 'lizard';
     }
     if (randomNumber === 5) {
          return 'spock';
     }
}

function getWinner(player, computer) {
     if (player === computer) {
          return 'draw';
     } else if (player === 'rock') {
          if (computer === 'paper') {
               return 'computer';
          }
          if (computer === 'spock') {
               return 'computer'
          } else {
               return 'player'
          }
     } else if (player === 'paper') {
          if (computer === 'scissors') {
               return 'computer';
          }
          if (computer === 'lizard') {
               return 'computer'
          } else {
               return 'player'
          }
     } else if (player === 'scissors') {
          if (computer === 'rock') {
               return 'computer';
          }
          if (computer === 'spock') {
               return 'computer'
          } else {
               return 'player'
          }
     } else if (player === 'lizard') {
          if (computer === 'scissors') {
               return 'computer'
          }
          if (computer === 'rock') {
               return 'computer'
          } else {
               return 'player'
          }
     } else if (player === 'spock') {
          if (computer === 'paper') {
               return 'computer'
          }
          if (computer === 'lizard') {
               return 'computer'
          } else {
               return 'player'
          }
     }
}
/* Winner & ComputerChoice*/
function showWinner(winner, computerChoice) {
     if (winner === 'player') {
          scoreboard.player++;
          result.innerHTML = `
         <h1 class="text-win">You Won</h1>
         <i class="fas fa-hand-${computerChoice} fa-7x"></i>
         <p>Computer chose <strong>${computerChoice}</strong></p>
         `;
     } else if (winner === 'computer') {
          scoreboard.computer++;
          result.innerHTML = `
         <h1 class="text-lose">You Lose</h1>
         <i class="fas fa-hand-${computerChoice} fa-7x"></i>
         <p>Computer chose <strong>${computerChoice}</strong></p>
         `;
     } else {
          result.innerHTML = `
         <h1>It's A Draw</h1>
         <i class="fas fa-hand-${computerChoice} fa-7x"></i>
         <p>Computer chose <strong>${computerChoice}</strong></p>
         `;
     }
     /*Score*/
     score.innerHTML = `
       <p>Player: ${scoreboard.player}</p>
       <p>Computer: ${scoreboard.computer}</p>
       `;

     result.style.display = 'block';
}

function restartGame() {
     scoreboard.player = 0;
     scoreboard.computer = 0;
     score.innerHTML = `
       <p class="player">Player: 0</p>
       <p class="computer">Computer: 0</p>
       `;
}
function clearResult(e) {
     if (e.target == result) {
          result.innerHTML = 'none';
     }
}
/* Event List.*/
choices.forEach(choice => choice.addEventListener('click', play));
restart.addEventListener('click', restartGame);
