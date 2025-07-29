const max = 10;
const random = Math.floor(Math.random() * max) + 1;

const inputBox = document.querySelector('.input');
const guessBtn = document.querySelectorAll('.button')[0]; // First button (Guess)
const quitBtn = document.querySelectorAll('.button')[1];  // Second button (Quit)
const hintText = document.querySelector('.third p');

// 🟦 GUESS Button Click
guessBtn.addEventListener('click', () => {
    const guess = parseInt(inputBox.value);

    if (isNaN(guess)) {
        hintText.innerText = "❗ Please enter a number!";
        hintText.style.color = "orange";
        return;
    }

    if (guess === random) {
        hintText.innerText = `🎉 Correct! The number was ${random}`;
        hintText.style.color = "green";
    } else if (guess < random) {
        hintText.innerText = "Hint: Too small. Try again!";
        hintText.style.color = "red";
        shakeInput(); // Shake on wrong guess
    } else {
        hintText.innerText = "Hint: Too large. Try again!";
        hintText.style.color = "red";
        shakeInput(); // Shake on wrong guess
    }
});

// 🔴 QUIT Button Click
quitBtn.addEventListener('click', () => {
    hintText.innerText = "🚪 You quit the game!";
    hintText.style.color = "gray";
    inputBox.disabled = true;
    guessBtn.disabled = true;
});

// 💫 Shaking Animation Function
function shakeInput() {
    inputBox.classList.add("shake");
    setTimeout(() => {
        inputBox.classList.remove("shake");
    }, 400);
}
