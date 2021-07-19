const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoice = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

 possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {

      userChoice = e.target.id
      userChoiseDisplay.innerHTML = userChoice
      generateComputerChoice()
      getResult()
 }))
  
function generateComputerChoice() {
     const randomNumber = Math.floor(Math.random() * 5) + 1

     if (randomNumber === 1) {
          computerChoice = 'rock'
     }
     if (randomNumber === 2) {
          computerChoice = 'paper'
     }
     if (randomNumber === 3) {
          computerChoice = 'scissors'
     }
     if (randomNumber === 4) {
          computerChoice = 'lizard'
     }
     if (randomNumber === 5) {
          computerChoice = 'spock'
     }
     computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
     if (computerChoice === userChoice) {
          result = 'Draw!'
     }
     if (computerChoice === 'rock' && userChoice === "paper") {
          result = 'You Won!'
     }
     if (computerChoice === 'rock' && userChoice === "scissors") {
          result = 'You Lost!'
     }
     if (computerChoice === 'paper' && userChoice === "scissors") {
          result = 'You Win!'
     }
     if (computerChoice === 'paper' && userChoice === "rock") {
          result = 'You Lose!'
     }
     if (computerChoice === 'scissors' && userChoice === "paper") {
          result = 'You Lose!'
     }
     resultDisplay.innerHTML = result
}