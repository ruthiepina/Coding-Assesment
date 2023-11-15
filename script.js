var questionSet = [
   {
      question: "Which method selects the 1st matching element in the document?",
      answers: [
         "document.querySelectorAll()",
         "document.getElementsByClass()",
         "document.querySelector()",
         "document.getElementsByTagName()",
      ],
      correctAnsIndex: "2",
   },
   {
      question: "What statement do you use to exit or end a loop?",
      answers: ["Break statement", "Falter statement", "Close statement", "Conditional statement"],
      correctAnsIndex: "0",
   },
   {
      question: "Commonly used data types do NOT include:",
      answers: ["Strings", "Alerts", "Booleans", "Numbers"],
      correctAnsIndex: "2",
   },
   {
      question: "Arrays in JavaScript can be used to store:",
      answers: ["Numbers and strings", "Booleans", "Other arrays", "All of the above"],
      correctAnsIndex: "3",
   },
   {
      question: "What data type(s) are assigned to numeric values?",
      answers: ["Number", "Decimal", "Float", "Integer"],
      correctAnsIndex: "0",
   },
   {
      question: "Name the index of the item 'pineapple' in this array: ['grape', 'pineapple', 'banana', 'kiwi']",
      answers: ["0", "2", "1", "3"],
      correctAnsIndex: "2",
   },
   {
      question: "If let a = {}; and let b = [];, which statement is true:",
      answers: [
         "a is a String and b is an Object",
         "a is an Object and b is an Array",
         "a is an Array and b is an Object",
         "a is undefined and b is also undefined",
      ],
      correctAnsIndex: "1",
   },
   {
      question: "What command is used to remove the last item in an array?",
      answers: ["splice()", "join()", "shift()", "pop()"],
      correctAnsIndex: "3",
   },
   {
      question: "What command sends data back to the code that called the function?",
      answers: ["return", "dispatch", "update", "respond"],
      correctAnsIndex: "0",
   },
   {
      question: "Every node in the DOM represents what?",
      answers: ["a link", "an HTML element", "a section", "a view"],
      correctAnsIndex: "1",
   },
];
{
   var quizIntroSectionEl = null;
   var quizQuestionSectionEl = null;
   var quizAllDoneSectionEl = null;
   var quizHighScoresSectionEl = null;
   var parentEl = document.getElementById("main");
   var finalScoreEl = document.getElementById("final-score-span");
}
function mySortArray(a, b) {
   return a.score - b.score;
}
function displayAllScores() {
   console.log("🚀 ~ file: script.js:74 ~ displayAllScores ~ scoresArray:", scoresArray);
   scoresArray.sort(mySortArray(a, b));
   console.log("🚀 ~ file: script.js:74 ~ displayAllScores ~ scoresArray:", scoresArray);
}

//* Makes High score section hidden or visible
function hideShowHighScores(showHide) {
   if (showHide === "hide") {
      quizHighScoresSectionEl = parentEl.removeChild(document.getElementById("high-scores"));
   } else {
      parentEl.appendChild(quizHighScoresSectionEl);
      displayAllScores();
   }
}
//* Makes All Done section hidden or visible
function hideShowAllDone(showHide) {
   if (showHide === "hide") {
      quizAllDoneSectionEl = parentEl.removeChild(document.getElementById("all-done-c"));
   } else {
      parentEl.appendChild(quizAllDoneSectionEl);
   }
}
//* Makes question section hidden or visible
function hideShowQuestions(showHide) {
   if (showHide === "hide") {
      quizQuestionSectionEl = parentEl.removeChild(document.getElementById("quiz-question"));
   } else {
      parentEl.appendChild(quizQuestionSectionEl);
   }
}
//* Makes intro section hidden or visible.
function hideShowIntro(showHide) {
   if (showHide === "hide") {
      quizIntroSectionEl = parentEl.removeChild(document.getElementById("start-quiz"));
   } else {
      parentEl.appendChild(quizIntroSectionEl);
   }
}

function initializeQuizApp() {
   hideShowIntro("hide");
   hideShowQuestions("hide");
   hideShowAllDone("hide");
   hideShowHighScores("hide");
}

initializeQuizApp(); //* Initialize/clear screen

hideShowIntro("show"); //* Displays intro page

//* Initialize timer variables and start quiz btn
var timerEl = document.getElementById("countdown");
var timeLeft = 100;
var startQuizBtn = document.getElementById("start-quiz-btn");
startQuizBtn.addEventListener("click", startQuiz);

var questionIndex = 0;
var timeInterval = null;
var score = 0;

var scoresArray = [];

//* Process start quiz btn
function startQuiz() {
   hideShowIntro("hide");
   hideShowQuestions("show");

   timeInterval = setInterval(myTimer, 1000);

   displayQuestion(questionIndex);

   //* Gets parent element of answer buttons for the "bubbling"
   var questionAnswerEl = document.getElementById("answer-buttons");
   //* Adds event listener to parent element of answer buttons on click
   //* with event handler gradeQuestion
   questionAnswerEl.addEventListener("click", processEachQuestion);
}

function processEachQuestion(evt) {
   gradeQuestion(evt);
   questionIndex++;
   if (questionIndex < questionSet.length) {
      displayQuestion(questionIndex);
   } else {
      hideShowQuestions("hide");

      score = timeLeft;
      clearInterval(timeInterval);
      timerEl.textContent = score + " seconds remaining"; //* Set the 'textContent' of 'timerEl' to show remaining seconds

      finalScoreEl.textContent = score;

      hideShowAllDone("show");
      initialsEl = document.getElementById("initials");
      scoreSubmitEl = document.getElementById("score-submit");
      scoreSubmitEl.addEventListener("click", submitScore);
   }
}

var initialsEl = null;

var scoreSubmitEl = null;
function submitScore() {
   console.log("initialsEl.value ", initialsEl.value);
   if (initialsEl.value.length === 0) {
      alert("ERROR: Initials field cannot be left empty. Try again.");
   } else {
      var currentScore = {
         initials: initialsEl.value,
         score: score,
      };
      scoresArray.push(currentScore);

      localStorage.setItem("allScores", JSON.stringify(scoresArray));
      hideShowAllDone("hide");
      hideShowHighScores("show");
   }
}

//* Grades question answer as correct or wrong
function gradeQuestion(evt) {
   //* Gives us portion of the button element id that is an index to the button
   //* that was clicked on
   var answerId = evt.target.id; //* Gets the id of the child element that was clicked on - btn-x
   var answerIndex = answerId.substring(4, 5); //* Removes "btn-" and gets index (0-3) only
   if (answerIndex === questionSet[questionIndex].correctAnsIndex) {
      document.getElementById("grade").textContent = "Correct!";
   } else {
      document.getElementById("grade").textContent = "Wrong...";
      timeLeft -= 10; //* Time penalty for incorrect answer
   }
}

function displayQuestion(questionIndex) {
   //* Selects question field at element p
   var questionEl = document.getElementById("question");
   //* Selects object question at question index
   var thisQuestion = questionSet[questionIndex];
   questionEl.textContent = thisQuestion.question; //* Gives the question from question set array
   //* Gets answers from question set array element and writes them to buttons
   for (var i = 0; i < thisQuestion.answers.length; i++) {
      document.getElementById("btn-" + i).textContent = thisQuestion.answers[i];
   }
}
// todo move to button listener
function myTimer() {
   if (timeLeft > 0) {
      timeLeft--; //* Decrement 'timeLeft' by 1
      timerEl.textContent = timeLeft + " seconds remaining"; //* Set the 'textContent' of 'timerEl' to show remaining seconds
   } else {
      clearInterval(timeInterval); //* Use 'clearInterval()' to stop the timer
      hideShowQuestions("hide"); //* Time runs out, hides questions
      hideShowAllDone("show"); //* Time ran out, displays All Done page
   }
}

// TODO Display quiz page until all questions are processed or timed out
// TODO Display All Done screen
