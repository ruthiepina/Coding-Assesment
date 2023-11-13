var questionSet = [
   {
      question: "What statement do you use to exit or end a loop?",
      answers: ["Break statement", "Falter statement", "Close statement", "Conditional statement"],
      correctAnsIndex: 0,
   },
   {
      question: "Commonly used data types do NOT include:",
      answers: ["Strings", "Alerts", "Booleans", "Numbers"],
      correctAnsIndex: 2,
   },
   {
      question: "Arrays in JavaScript can be used to store:",
      answers: ["Numbers and strings", "Booleans", "Other arrays", "All of the above"],
      correctAnsIndex: 3,
   },
   {
      question: "What data type(s) are assigned to numeric values?",
      answers: ["Number", "Decimal", "Float", "Integer"],
      correctAnsIndex: 0,
   },
   {
      question: "Name the index of the item 'pineapple' in this array: ['grape', 'pineapple', 'banana', 'kiwi']",
      answers: ["0", "2", "1", "3"],
      correctAnsIndex: 2,
   },
   {
      question: "If let a = {}; and let b = [];, which statement is true:",
      answers: [
         "a is a String and b is an Object",
         "a is an Object and b is an Array",
         "a is an Array and b is an Object",
         "a is undefined and b is also undefined",
      ],
      correctAnsIndex: 1,
   },
   {
      question: "What command is used to remove the last item in an array?",
      answers: ["splice()", "join()", "shift()", "pop()"],
      correctAnsIndex: 3,
   },
   {
      question: "What command sends data back to the code that called the function?",
      answers: ["return", "dispatch", "update", "respond"],
      correctAnsIndex: 0,
   },
   {
      question: "Every node in the DOM represents what?",
      answers: ["a link", "an HTML element", "a section", "a view"],
      correctAnsIndex: 1,
   },
   {
      question: "Which method selects the 1st matching element in the document?",
      answers: [
         "document.querySelectorAll()",
         "document.getElementsByClass()",
         "document.querySelector()",
         "document.getElementsByTagName()",
      ],
      correctAnsIndex: 2,
   },
];
{
var quizIntroSectionEl = null;
var quizQuestionSectionEl = null;
var quizAllDoneSectionEl = null;
var quizHighScoresSectionEl = null;
var parentEl = document.getElementById("main");
}
//* Makes High score section hidden or visible
function hideShowHighScores(showHide) {
   if (showHide === "hide") {
      quizHighScoresSectionEl = parentEl.removeChild(document.getElementById("high-scores"));
   } else {
      parentEl.appendChild(quizHighScoresSectionEl);
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

// TODO Initialize/clear screen
initializeQuizApp();

// TODO Display intro to quiz page
hideShowIntro("show");

// TODO  Process start quiz button - display quiz page



//* Trying to create timer function for all pages
var timerEl = document.getElementById("countdown");

// todo move to button listener
var timeLeft = 10;

function myTimer() {
   if (timeLeft > 0) {
      //* As long as the 'timeLeft' is greater than 1
      timerEl.textContent = timeLeft + " seconds remaining"; //* Set the 'textContent' of 'timerEl' to show remaining seconds
      timeLeft--; //* Decrement 'timeLeft' by 1
   } else {
      timerEl.textContent = "0 seconds remaining"; //* Once 'timeLeft' gets to 0, set 'timerEl' to empty string
      clearInterval(timeInterval); //* Use 'clearInterval()' to stop the timer
   }
}
var timeInterval = setInterval(myTimer, 1000);

// TODO Display quiz page until all questions are processed or timed out
// TODO Display All Done screen
