'use strict';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function again() {
  numberToGuess = getRandomInt(21);
  document.querySelector('.score').textContent = 20;

  document.querySelector('.message').innerText = 'Start guessing ...';
  document.querySelector('body').style.backgroundColor = '#333';
  lost = false;
}

function scoreMinusOne() {
  let actualscore = Number(document.querySelector('.score').textContent);
  document.querySelector('.score').textContent = actualscore - 1;
  if (actualscore == 1) {
    document.querySelector('.message').innerText = ' 💥 You lost the game!';
    lost = true;
  }
}

let numberToGuess = getRandomInt(21);
let lost = false;

function checkNumber() {
  const givenNumber = document.querySelector('.number').value;

  if (givenNumber === '') {
    console.log('No Number');
    document.querySelector('.message').innerText = '⛔️ No Number';
  } else {
    if (Number(givenNumber) > numberToGuess && !lost) {
      document.querySelector('.message').innerText = '📈 Too high !';
      scoreMinusOne();
    } else if (Number(givenNumber < numberToGuess && !lost)) {
      document.querySelector('.message').innerText = ' 📉 Too Low !';
      scoreMinusOne();
    } else if (!lost) {
      document.querySelector('.message').innerText = '🎉 Correct Number !';
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.hiddenNumber').innerText = numberToGuess;

      let lastHighScore = Number(
        document.querySelector('.highscore').textContent
      );
      let actualscore = Number(document.querySelector('.score').textContent);
      console.log(`actual is ${actualscore}`);
      console.log(`the last high score is ${lastHighScore}`);
      if (actualscore > lastHighScore) {
        document.querySelector('.highscore').innerText = actualscore;
      }
    }
  }
}
