'use strict';
// console.log(document.querySelector('.score').textContent);
// document.querySelector('.guess').value = 25;
// console.log(document.querySelector('.guess').value);

// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
// });

// GENERATE RANDOM GUESS
function guessRandom() {
  return Math.trunc(Math.random() * 20) + 1;
}

let x = guessRandom();
// let x = Math.trunc(Math.random() * 20) + 1;
console.log(x);
let s = 20;
let h;
// let y = document.querySelector('.guess').value;

// WHEN CLICKING-- CHECK
document.querySelector('.check').addEventListener('click', function () {
  function reduction(s) {
    s--;
    // console.log(s);
    // document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = s;
    return s;
  }

  const y = document.querySelector('.guess').value;

  // WHEN SCORE IS 0
  if (s === 1) {
    document.querySelector('.message').textContent = 'YOU LOST';
    document.querySelector('.score').textContent = 0;
    s = 0;
  }
  // WHEN NO INPUT
  else if (!y) {
    document.querySelector('.message').textContent = 'NO INPUT';
  }
  // WHEN CORRECT ANSWER
  else if (x == y) {
    document.querySelector('.message').textContent = 'CORRECT ANSWER';
    document.querySelector('.number').textContent = x;
    h = s;
    document.querySelector('.highscore').textContent = h;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
  // WHEN TOO HIGH
  else if (y > x + 4) {
    document.querySelector('.message').textContent = 'TOO HIGH, try again';
    s = reduction(s);
  }
  // WHEN TOO LOW
  else if (y < x - 4) {
    document.querySelector('.message').textContent = 'TOO LOW, try again';
    s = reduction(s);
  }
  // WHEN HIGH
  else if (y > x) {
    document.querySelector('.message').textContent = 'HIGH, try again';
    s = reduction(s);
  }
  // WHEN LOW
  else if (y < x) {
    document.querySelector('.message').textContent = 'LOW, try again';
    s = reduction(s);
  }
  //   console.log(document.querySelector('.guess').value);
  //   console.log(y, x);
});

// WHEN CLICKING-- AGAIN
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  s = 20;
  x = guessRandom();
  document.querySelector('.score').textContent = s;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  // let x = Math.trunc(Math.random() * 20) + 1;
  console.log(x);
});
