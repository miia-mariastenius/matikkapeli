'use strict'

let rand_num1 = 0
let rand_num2 = 0
const score = {
  wins :0,
  losses :0
  }

const getRandomNumberInRange = (min,max) => {
  return Math.floor(Math.random() * max) + min;
}

const randomizeNumbers = () => {
  rand_num1 = getRandomNumberInRange(1,10)
  rand_num2 = getRandomNumberInRange(1,10)
  document.querySelector('#num1').innerHTML = rand_num1
  document.querySelector('#num2').innerHTML = rand_num2
}

addEventListener("DOMContentLoaded", () => {
  randomizeNumbers()
})

document.querySelector('button').addEventListener('click', () => {
  const answer = Number(document.querySelector('input').value)
  const correctAnswer = rand_num1 + rand_num2
  if (answer === correctAnswer) {
    alert('Correct!')
    score.wins += 1
  } else {
    alert('Incorrect!')
    score.losses += 1
  }

  randomizeNumbers()
  document.querySelector('input').value=''

  document.querySelector('#correct').innerHTML = score.wins
  document.querySelector('#incorrect').innerHTML = score.losses
})


