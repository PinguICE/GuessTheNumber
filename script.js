// Variables
let randomNumber = Math.floor(Math.random() * 101);
let attempts = 0;
let guesses = [];
let wins = 0;
let winStreak = 0;

// Link to HTML
const guessInput = document.getElementById('guessInput');
const submitGuessButton = document.getElementById('submitGuess');
const feedback = document.getElementById('feedback');
const attemptsDisplay = document.getElementById('attempts');
const guessesDisplay = document.getElementById('guesses');
const winsDisplay = document.getElementById('wins');
const winStreakDisplay = document.getElementById('winStreak');
const wizardImage = document.querySelector('.ImgMainStyle');

const nonValidSound = new Audio('sounds/NonValidSound.mp3');
const victorySound = new Audio('sounds/VictorySound.mp3');
const wrongSound = new Audio('sounds/WrongSound.mp3');

// Events 
submitGuessButton.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);

    // Validate the user's input if is good
    if (isNaN(userGuess) || userGuess < 0 || userGuess > 100) {
        feedback.textContent = "Please enter a number between 0 and 100.";
        wizardImage.src = "img/WrongWizard.png";
        nonValidSound.play();
        return;
    }
    
    attempts++;
    guesses.push(userGuess);
    attemptsDisplay.textContent = attempts;
    guessesDisplay.textContent = guesses.join(', ');

    // Check if the user's guess is correct
    if (userGuess === randomNumber) {
        feedback.textContent = "Congratulations! You guessed it right!";
        wins++;
        winStreak++;
        winsDisplay.textContent = wins;
        winStreakDisplay.textContent = winStreak;
        wizardImage.src = "img/AnswerWizard.png";
        victorySound.play();
        resetGame();
    } else if (userGuess < randomNumber) {
        feedback.textContent = "Too low! Try again.";
        wizardImage.src = "img/WrongWizard.png";
        wrongSound.play();
    } else {
        feedback.textContent = "Too high! Try again.";
        wizardImage.src = "img/WrongWizard.png";
        wrongSound.play();
    }
});

// Function to reset the game
function resetGame() {
    randomNumber = Math.floor(Math.random() * 101);
    attempts = 0;
    guesses = [];
    guessInput.value = '';
    attemptsDisplay.textContent = attempts;
    guessesDisplay.textContent = '';
    wizardImage.src = "img/MainWizard.png";
}
