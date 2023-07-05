let randomNumber = parseInt(Math.random()*100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const prevGuesses = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prev = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',function (e) {
        e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }
    else if(guess<1) {
        alert('Please enter a number more than 1');
    }
    else if(guess>100){
        alert('Please enter a number less than 100');
    }else{
        prev.push(guess);
        if(numGuess === 11){
             displayGuess(guess);
             displayMessage(`Game Over, Random Number was ${randomNumber}`);
             endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){

    if(guess === randomNumber){
        displayMessage('You guessed it Right');
        endGame();
    }else if(guess < randomNumber){
        displayMessage('Number is too Low');
    }else if(guess > randomNumber){
        displayMessage('Number is too High');
    }

}

function displayGuess(guess){
  
    userInput.value = '';
    prevGuesses.innerHTML += `${guess}  `;
    numGuess++;
    remaining.innerHTML = `${11-numGuess} `;
}

function displayMessage(message){
   lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = '<h2 id="newGame">Start new Game</h2>'
    startOver.appendChild(p);
    playGame = false
    newGame();
}

function newGame(){
 const newGameButton = document.querySelector('#newGame')
 newGameButton.addEventListener('click',function (e) {
    randomNumber = parseInt(Math.random()*100 + 1);
    prev =[]
    numGuess = 1
    prevGuesses.innerHTML = ''
    remaining.innerHTML = `${11-numGuess} `;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p);
    playGame = true
 })
}




