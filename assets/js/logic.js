//Initializing variables for timeLeft,timerInterval, currentQuestion, and score
let timeLeft = 75;
let timerInterval;
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

  // Start timer
  startTimer();
  


  // Show first question
  displayQuestions();
}
// Add event listener to start button to start quiz
document.getElementById("start").addEventListener("click", startQuiz);

// Function to start the timer
function startTimer() {
  timerInterval = setInterval(function() {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}



// Function to handle what happens when the quiz ends
function endQuiz() {
  // Hide questions section
  let questionsScreen = document.getElementById("questions");
  questionsScreen.classList.add("hide");

  // Show end screen
  let endScreen = document.getElementById("end-screen");
  endScreen.classList.remove("hide");

  // Show final score
  let finalScore = document.getElementById("final-score");
  finalScore.textContent = score;
}

// Create an audio element for correct answers
let correctAudio = new Audio("./assets/sfx/correct.wav");
// Create an audio element for Incorrect answers
let inCorrectAudio = new Audio("./assets/sfx/incorrect.wav");

// Function to handle what happens when a user clicks on a choice button

function questionClick() {
  // Check if the choice is correct
  if (this.value === questions[currentQuestionIndex].answer) {
    // Increase score
    score++;
     // Play the correct sound
     correctAudio.play();
  } else {
    // Decrease time
    timeLeft -= 15;
     // Play the incorrect sound
     inCorrectAudio.play();
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
