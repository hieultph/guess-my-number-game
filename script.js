'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // If the user not entered their guess number
  if (!guess) {
    displayMessage('🚫 No number!');

    // If the user won the game
  } else if (guess === secretNumber) {
    displayMessage('🏆 Congratulation!!!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // If the guess number is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? '📉 Lower value...' : '📈 Higher value...'
      );
      document.querySelector('.score').textContent = --score;
    } else {
      displayMessage('😢 You lose!!!');
      document.querySelector('.score').textContent = 0;
    }
  }

  //   // If the guess number lower than secret number
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Higher value...';
  //     document.querySelector('.score').textContent = --score;
  //   } else {
  //     document.querySelector('.message').textContent = '😢 You lose!!!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // If the guess number greater than secret number
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Lower value...';
  //     document.querySelector('.score').textContent = --score;
  //   } else {
  //     document.querySelector('.message').textContent = '😢 You lose!!!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

// Play again button
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
});
