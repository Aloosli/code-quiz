//Initializing variables for timeLeft, currentQuestion, and score
let timeLeft = 75;
let currentQuestionIndex = 0;
let score = 0;

// Function to start the quiz
function startQuiz() {
  // Hide the start screen
  let startScreen = document.getElementById("start-screen");
  
  startScreen.classList.add("hide");

   // Show the questions screen
   let questionsScreen = document.getElementById("questions");
   questionsScreen.classList.remove("hide");

  // Show first question
  displayQuestions();
}
// Add event listener to start button to start quiz
document.getElementById("start").addEventListener("click", startQuiz);

// add timer here


// Function to handle what happens when a user clicks on a choice button

function questionClick() {
  // Check if the choice is correct
  if (this.value === questions[currentQuestionIndex].answer) {
    // Increase score
    score++;
  } else {
    // Decrease time
    timeLeft -= 15;
  }
  // Move to next question
  currentQuestionIndex++;

  // Check if there are any more questions
  if (currentQuestionIndex < questions.length) {
    // Display next question
    displayQuestions();
  } else {
    // Quiz is over, show the end screen
    endQuiz();
  }
}


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
