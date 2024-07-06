'use strict';

const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '🚫 Not a number...';
  } else if (guess === number) {
    document.querySelector('.message').textContent = '🏆 Congratulation!!!';
    document.querySelector('.number').textContent = number;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';
  } else if (guess < number) {
    document.querySelector('.message').textContent = '📈 Higher value...';
    document.querySelector('.score').textContent = --score;
    if (score < 1) {
      document.querySelector('.message').textContent = '😢 You lose!!!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess > number) {
    document.querySelector('.message').textContent = '📉 Lower value...';
    document.querySelector('.score').textContent = --score;
    if (score < 1) {
      document.querySelector('.message').textContent = '😢 You lose!!!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
