'use strict';

console.log('ok');

// console.log(document.querySelector('.number').textContent);
let randomNo = randomGen();
let inputNo;
let score = document.querySelector('.score').textContent;
let highscore = document.querySelector('.highscore').textContent;

console.log('score', score);
// document.querySelector('.message').textContent = "ok"
function randomGen(){
  let randomNo = Math.floor(Math.random() * 20) + 1;
  console.log("randomNo",randomNo);
  return randomNo;
}


function guessSubmit(){
  inputNo = document.querySelector('.guess').value;
  console.log(inputNo);
  displayResult(inputNo);
}


function again(){
  document.querySelector('.message').textContent="Start guessing...";
  randomNo = randomGen();
  inputNo = undefined;
  document.querySelector('.guess').value= undefined;
  document.querySelector('body').style.backgroundColor = '#222';
  score =20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';

}


function displayResult(inputNo){
  score = document.querySelector('.score').textContent;
  if (inputNo==randomNo){
   document.querySelector('.message').textContent = "correct guess";
   document.querySelector('.number').textContent = inputNo;
   document.querySelector('body').style.backgroundColor = '#60b347';
   if (score > highscore){
     document.querySelector('.highscore').textContent= score;
   }

  }else if(inputNo > randomNo){
   document.querySelector('.message').textContent="your guess is greater";
   document.querySelector('.number').textContent = '>';
   score--
   document.querySelector('.score').textContent = score;
  }else{
   document.querySelector('.message').textContent="your guess is lower";
   document.querySelector('.number').textContent = '<';
   score--
   document.querySelector('.score').textContent = score;
  }
  console.log(document.querySelector('.message').textContent);
}





