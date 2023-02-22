'use strict';

let score = 20;
let highscore = 0;



const secretNum = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = '?';

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess === secretNum) {
    document.querySelector('.message').textContent = '😎🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNum;
    if (score > highscore){
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess > secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high';
      score--;
      document.querySelector('.score').textContent = score;
      } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '💀 Game Over!';
      if (score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = score;
      }
    }
  } else if (guess < secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '💀 Game Over!';
      if (score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = score;
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function(){
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing... 🤞😉';
  document.querySelector('.score').textContent = '20';
  document.querySelector('body').style.backgroundColor = '#222'

})
