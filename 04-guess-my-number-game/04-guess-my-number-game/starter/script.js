'use strict';

console.log('=== GAME DEVELOPMENT: GUESS MY NUMBER ===');

console.log('=== DOM ELEMENT SELECTION ===');

const messageE1 = document.querySelector('.message');
console.log(messageE1);
console.log(messageE1.textContent);
messageE1.textContent = 'Hello from javascript';

const scoreE1 = document.querySelector('.score');
console.log(scoreE1);
// scoreE1.textContent = 50;

const numberEl = document.querySelector('.number');
// numberEl.textContent = 15;

const highscoreEl = document.querySelector('.highscore');
// highscoreEl.textContent = 100;

const guessEl = document.querySelector('.guess');
// guessEl.value = 12;

let secretNumber = Math.trunc(Math.random() * 20);
console.log(`Secret Number: `, secretNumber);

// track the current score// this is your current score
let score = 20;
let highscore = 0;

// change the value of score UI dynamically
document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

console.log('Game state initialized');

// BASIC GAME LOGIC
document.querySelector('.check').addEventListener('click', function () {
  // once check button is clicked, do this below
  console.log('Check butotn is clicked');
  const guess = Number(document.querySelector('.guess').value);
  console.log('Players guessed:', guess);

  if (guess === secretNumber) {
    console.log('Your guess is correct!');

    document.querySelector('.message').textContent = 'Correct Number 🥳';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > secretNumber) {
    console.log('Too high!');
    document.querySelector('.message').textContent = 'Too High 😣';
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
      document.querySelector('.message').textContent =
        'You lost! Try again! ┌( ´_ゝ` )┐';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelectore('.guess').disabled = true;
      document.querySelector('.check').disabled = true;
    }
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too Low 😛';
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
      document.querySelector('.message').textContent =
        'You lost! Try again! ┌( ´_ゝ` )┐';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelectore('.guess').disabled = true;
      document.querySelector('.check').disabled = true;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log('New secret number:', secretNumber);
  // RESTART THE MESSAGE DISPLAY
  document.querySelector('.message').textContent = 'Start guessing';
  // RESTART QUESTION MARK
  document.querySelector('.number').textContent = '?';
  // UPDATE THE SCORE IN THE UI
  document.querySelector('.score').textContent = score;
  // restart guess input value
  document.querySelector('.guess').value = '';
  document.querySelector('.guess').disabled = false;
  document.querySelector('.check').disabled = false;
});
