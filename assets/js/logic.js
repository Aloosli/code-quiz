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
   let questionScreen = document.getElementById("question-screen");
   questionScreen.removeAttribute("class");
  
    displayQuestions();
 
};

// add event listener to start button to start quiz
document.getElementById("start").addEventListener("click", startQuiz);



