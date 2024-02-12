let userGuess;
let userAttempts = 5;
let randomNumber;
let testNumber = 13;
let resetBtn = document.createElement("input");
let submitBtn = document.querySelector("#submit");
let highScores = [];
let sortedScores = [];
const message = document.querySelector("#message");
const firstScore = document.querySelector("#firstScore");
const secondScore = document.querySelector("#secondScore");
const thirdScore = document.querySelector("#thirdScore");

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

function toggleSubmitBtn() {
  if (submitBtn.style.display === "none") {
    submitBtn.style.display = "inline";
  } else {
    submitBtn.style.display = "none";
  }
}

function compareNumbers() {
  getUserGuess();
  if (userGuess === randomNumber) {
    console.log("match");
    message.textContent = `you guessed the number with ${userAttempts} attempt(s) remaining! if you would like to play again, click reset`;
    addResetBtn();
    pushHighScore(userAttempts);
    toggleSubmitBtn();
    displayHighScore();
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
  document.querySelector("#reset").remove();
  toggleSubmitBtn();
  console.log(randomNumber);
}

function addResetBtn() {
  resetBtn.type = "submit";
  resetBtn.value = "Reset";
  resetBtn.id = "reset";
  submitBtn.after(resetBtn);
}

function continueGame() {
  if (userAttempts > 0) {
    compareNumbers();
  } else {
    addResetBtn();
    toggleSubmitBtn();
    message.textContent = `game over, ${userAttempts} attempt(s) remaining, if you would like to play again, click reset`;
    document.querySelector("#reset").addEventListener("click", playAgain);
  }
}

function pushHighScore(score) {
  highScores.push(score);
  highScores.sort().reverse();
  console.log(highScores);
}

function displayHighScore() {
  sortedScores = highScores.slice(0, 3);
  if (sortedScores[0]) {
    firstScore.innerHTML = `1<sup>st</sup> place: ${sortedScores[0]}`;
  }
  if (sortedScores[1]) {
    secondScore.innerHTML = `2<sup>nd</sup> place: ${sortedScores[1]}`;
  }
  if (sortedScores[2]) {
    thirdScore.innerHTML = `3<sup>rd</sup> place: ${sortedScores[2]}`;
  }
}

randomNumber = generateRandomNumber();
console.log(randomNumber);

document.querySelector("#submit").addEventListener("click", continueGame);
document.querySelector("#number").addEventListener("keydown", clearMessage);
