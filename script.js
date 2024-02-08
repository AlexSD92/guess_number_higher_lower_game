let userGuess;
let userAttempts = 5;
let randomNumber;
let testNumber = 13;
const message = document.querySelector('#message')


function getUserGuess() {
    userGuess = Number(document.querySelector('#number').value);
    console.log(userGuess);
}


generateRandomNumber = () => { return Math.floor(Math.random() * 20); }


function clearMessage() {
    document.querySelector("#message").innerHTML = "";
}


function compareNumbers() {
    getUserGuess();
    if (userGuess === randomNumber) {
        console.log("match");
        message.textContent = "match";
    } else if (userGuess < randomNumber) {
        message.textContent = `guess higher, ${userAttempts} attempt(s) remaining`;
        userAttempts--;
    } else {
        message.textContent = `guess lower, ${userAttempts} attempt(s) remaining`;
        userAttempts--;
    }
}


function continueGame() {
    if (userAttempts > 0) {
        compareNumbers();
    } else {
        message.textContent = `game over, ${userAttempts} attempt(s) remaining`;
    }
}


console.log(randomNumber);


document.querySelector('#submit').addEventListener('click', continueGame)
document.querySelector('#number').addEventListener('keydown', clearMessage)