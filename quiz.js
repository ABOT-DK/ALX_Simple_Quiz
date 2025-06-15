// Function to check the user's answer
function checkAnswer() {
    // Identify the correct answer
    const correctAnswer = "4";

    // Retrieve the user's answer
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selectedRadio ? selectedRadio.value : null;

    // Get the feedback element
    const feedbackElement = document.getElementById('feedback');

    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.style.color = "red";
    }
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);