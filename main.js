import './style.css'


const form = document.querySelector('form')
const input = document.querySelector('input')
const button = document.querySelector('button')
const result = document.querySelector('.result')
const remains = document.querySelector('.remains')
const tried = document.querySelector('.tried')
const wins = document.querySelector('.wins')
const lost = document.querySelector('.lost')


let totalAttemps = 5
let attemps = 0;
let totalWins = 0;
let totalLost = 0;



button.addEventListener('click', function(e){
  e.preventDefault();
  execution()
})

form.addEventListener('submit', function(e){
  e.preventDefault()
  execution()
})

function execution(){
  
  attemps++;

  if(attemps === 5){
    input.disabled = true;
    button.disabled = true
  }
  
  if(attemps < 6){

    const inputValue = Number(input.value)
    checkResult(inputValue)
    remains.innerHTML = `Remains: ${totalAttemps - attemps}`
    tried.innerHTML = `Tried: ${attemps}`
  }
  input.value = ""
}


function getRandomNumber(){
  const randomNum = Math.floor(Math.random()*5) + 1;
  return randomNum
}

function checkResult(inputValue){
  const randomNumb = getRandomNumber()
  if(inputValue === randomNumb){

    totalWins++
    wins.innerHTML = `Wins: ${totalWins}`
    result.innerHTML = ` <p>
          Congratulations! You have won.
          </p>`
  } else{

    totalLost++
    lost.innerHTML = `Lost: ${totalLost}`
   result.innerHTML = `
    <p>
    Ohh No! You have lost. Random Number Was: ${randomNumb}
    </p> `
  }
}


