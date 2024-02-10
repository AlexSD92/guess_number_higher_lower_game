let userGuess;
let userAttempts = 4;
let randomNumber;
let testNumber = 13;
let resetBtn = document.createElement("input");
let submitBtn = document.querySelector("#submit");
const message = document.querySelector("#message");

function getUserGuess() {
  userGuess = Number(document.querySelector("#number").value);
  console.log(userGuess);
}

generateRandomNumber = () => {
  return Math.floor(Math.random() * 20);
};

function clearMessage() {
  document.querySelector("#message").innerHTML = "";
}

function compareNumbers() {
  getUserGuess();
  if (userGuess === randomNumber) {
    console.log("match");
    message.textContent = `you guessed the number with ${userAttempts} attempt(s) remaining! if you would like to play again, click reset`;
    document.querySelector("#reset").addEventListener("click", playAgain);
  } else if (userGuess < randomNumber) {
    message.textContent = `guess higher, ${userAttempts} attempt(s) remaining`;
    userAttempts--;
  } else {
    message.textContent = `guess lower, ${userAttempts} attempt(s) remaining`;
    userAttempts--;
  }
}

function playAgain() {
  message.textContent = "";
  userAttempts = 5;
  randomNumber = generateRandomNumber();
  document.querySelector("#number").value = "";
  console.log(randomNumber);
}

function continueGame() {
  if (userAttempts > 0) {
    compareNumbers();
  } else {
    resetBtn.type = "submit";
    resetBtn.value = "Reset";
    resetBtn.id = "reset";
    submitBtn.after(resetBtn);

    message.textContent = `game over, ${userAttempts} attempt(s) remaining, if you would like to play again, click reset`;
    document.querySelector("#reset").addEventListener("click", playAgain);
  }
}

randomNumber = generateRandomNumber();
console.log(randomNumber);

document.querySelector("#submit").addEventListener("click", continueGame);
document.querySelector("#number").addEventListener("keydown", clearMessage);
