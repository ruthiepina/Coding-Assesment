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
   var timeLeft = 100; //* Allotted quiz time
   var timeInterval = null; //* Timer variable

   var questionIndex = 0;
   var score = 0;
   var scoresArray = [];

   var clearScoresEl = document.getElementById("clear-btn");
   var finalScoreEl = document.getElementById("final-score-span");
   var goBackBtnEl = document.getElementById("go-back-btn");
   var initialsEl = document.getElementById("initials");
   var questionAnswerEl = document.getElementById("answer-buttons");
   var questionEl = document.getElementById("question");
   var quizAllDoneSectionEl = document.getElementById("all-done-c");
   var quizHighScoresSectionEl = document.getElementById("high-scores");
   var quizIntroSectionEl = document.getElementById("start-quiz");
   var quizQuestionSectionEl = document.getElementById("quiz-question");
   var scoresListEl = document.getElementById("scores-list");
   var scoreSubmitEl = document.getElementById("score-submit");
   var startQuizBtnEl = document.getElementById("start-quiz-btn");
   var timerEl = document.getElementById("countdown");
   var viewHighScoresEl = document.getElementById("view-hs-link");
}

initializeQuizApp(); //* Initialize/clear screen
showIntro(); //* Displays intro page

startQuizBtnEl.addEventListener("click", startQuiz);
questionAnswerEl.addEventListener("click", processEachQuestion);
scoreSubmitEl.addEventListener("click", submitScore);
goBackBtnEl.addEventListener("click", () => {
   hideHighScores();
   showIntro();
});
clearScoresEl.addEventListener("click", clearScores);
viewHighScoresEl.addEventListener("click", () => {
   hideIntro();
   hideQuestions();
   hideAllDone();
   showHighScores();
});

function initializeQuizApp() {
   hideIntro();
   hideQuestions();
   hideAllDone();
   hideHighScores();
}

//* Process start quiz btn
function startQuiz() {
   timeLeft = 100;
   clearInterval(timeInterval);
   timeInterval = setInterval(myTimer, 1000); //* Starts timer
   questionIndex = 0;

   hideIntro();
   showQuestions();
   displayQuestion(questionIndex);
}

function displayQuestion(questionIndex) {
   var thisQuestion = questionSet[questionIndex]; //* Selects object question at question index
   questionEl.textContent = thisQuestion.question; //* Gives the question from question set array

   //* Gets answers from question set array element and writes them to buttons
   for (var i = 0; i < thisQuestion.answers.length; i++) {
      document.getElementById("btn-" + i).textContent = thisQuestion.answers[i];
   }
}

function processEachQuestion(evt) {
   gradeQuestion(evt); //* grades each question

   questionIndex++; //* Selects next question

   //* Have we finished all questions?
   if (questionIndex < questionSet.length) {
      displayQuestion(questionIndex);
   } else {
      hideQuestions();

      score = timeLeft;
      clearInterval(timeInterval);
      timerEl.textContent = score + " seconds remaining"; //* Set the 'textContent' of 'timerEl' to show remaining seconds
      finalScoreEl.textContent = score;

      showAllDone();

      initialsEl.value = "";
   }
}

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

function submitScore() {
   if (initialsEl.value.length === 0) {
      alert("ERROR: Initials field cannot be left empty. Try again.");
   } else {
      var currentScore = {
         initials: initialsEl.value,
         score: score,
      };
      scoresArray.push(currentScore);

      // localStorage.setItem("allScores", JSON.stringify(scoresArray));
      hideAllDone();
      showHighScores();
      displayAllScores();
   }
}

function displayAllScores() {
   scoresArray.sort((a, b) => b.score - a.score); //* Sorts scores array by desc

   clearScoresList();

   //* Creates list of scores elements
   for (var i = 0; i < scoresArray.length; i++) {
      var scoreItem = scoresArray[i].initials + " - " + scoresArray[i].score;
      const listItem = document.createElement("li");
      listItem.textContent = scoreItem;
      scoresListEl.appendChild(listItem);
   }
}

function clearScoresList() {
   while (scoresListEl.firstChild) {
      scoresListEl.removeChild(scoresListEl.firstChild);
   }
}

function clearScores() {
   clearScoresList();
   scoresArray.length = 0;
}

function myTimer() {
   if (timeLeft > 0) {
      timeLeft--; //* Decrement 'timeLeft' by 1
      timerEl.textContent = timeLeft + " seconds remaining"; //* Set the 'textContent' of 'timerEl' to show remaining seconds
   } else {
      clearInterval(timeInterval); //* Use 'clearInterval()' to stop the timer
      hideQuestions(); //* Time runs out, hides questions
      showAllDone(); //* Time ran out, displays All Done page
   }
}

//* Makes High score section hidden or visible
function hideHighScores() {
   quizHighScoresSectionEl.style.display = "none";
}
function showHighScores() {
   quizHighScoresSectionEl.style.display = "";
}
//* Makes All Done section hidden or visible
function hideAllDone() {
   quizAllDoneSectionEl.style.display = "none";
}
function showAllDone() {
   quizAllDoneSectionEl.style.display = "";
}
//* Makes question section hidden or visible
function hideQuestions() {
   quizQuestionSectionEl.style.display = "none";
}
function showQuestions() {
   quizQuestionSectionEl.style.display = "";
}
//* Makes intro section hidden or visible.
function hideIntro() {
   quizIntroSectionEl.style.display = "none";
}
function showIntro() {
   quizIntroSectionEl.style.display = "";
}
