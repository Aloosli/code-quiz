//Initializing variables for timeLeft, currentQuestion, and score
let timeLeft = 75;
let currentQuestionIndex = 0;
let score = 0;

// Function to start the quiz
function startQuiz() {
  // Hide the start screen
  let startScreen = document.getElementById("start-screen");
  
  startScreen.setAttribute("class", "hide");

  // Show first question
  displayQuestions();
}
// Add event listener to start button to start quiz
document.getElementById("start").addEventListener("click", startQuiz);

// add timer here

// Function to display questions

function displayQuestions() {
  // Get current question object from array
  let currentQuestionData = questions[currentQuestionIndex];

  // Update title with current question
  let title = document.getElementById("question-title");
  title.textContent = currentQuestionData.title;

  // Clear out any old question choices
  let choices = document.getElementById("choices");
  choices.innerHTML = "";

  // Loop over choices
  currentQuestionData.choices.forEach(function(choice, i) {
    // Create new button for each choice
    let choiceButton = document.createElement("button");
    choiceButton.setAttribute("class", "choice");
    choiceButton.setAttribute("value", choice);

    choiceButton.textContent = i + 1 + ". " + choice;

    // Attach click event listener to each choice
    choiceButton.onclick = questionClick;

    // Display on the page
    choices.appendChild(choiceButton);
  });
};
