let userGuess;
let randomNumber = Math.floor(Math.random() * 20);
let testNumber = 13;
const message = document.querySelector('#message')


function getUserGuess() {
    userGuess = Number(document.querySelector('#number').value);
    console.log(userGuess);
}

function clearMessage() {
    document.querySelector("#message").innerHTML = "";
}

function compareNumbers() {

    getUserGuess();
    if (userGuess === testNumber) {
        console.log("match");
        message.textContent = "match";
    } else if (userGuess < testNumber) {
        message.textContent = "guess higher"
    } else {
        console.log("no match");
        message.textContent = "guess lower";
    }
}

document.querySelector('#submit').addEventListener('click', compareNumbers)
document.querySelector('#number').addEventListener('keydown', clearMessage)

console.log(randomNumber);



