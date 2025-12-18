let randomNumber = Math.floor(Math.random() * 100) + 1;
//Math.floor--->rounds down the decimal value
//Math.random()-->generates random no between 0 and 1
//*100 +1-->gives no between 1 to 100

let attemptCount = 0;

function checkGuess() {
    const userGuess = Number(document.getElementById("guessInput").value);
    const message = document.getElementById("message");
    const attempts = document.getElementById("attempts");

    if (!userGuess) {
        message.textContent = "⚠️ Please enter a number!";
        return;
    }

    attemptCount++;

    if (userGuess === randomNumber) {
        message.textContent = "🎉 Correct! You guessed the number!";
        message.style.color = "green";
    } 
    else if (userGuess < randomNumber) {
        message.textContent = "📉 Too low! Try again.";
        message.style.color = "orange";
    } 
    else {
        message.textContent = "📈 Too high! Try again.";
        message.style.color = "red";
    }

    attempts.textContent = `Attempts: ${attemptCount}`;
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attemptCount = 0;

    document.getElementById("guessInput").value = "";
    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = "";
}
