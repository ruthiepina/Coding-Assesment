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

var quizIntroSection = null;
var quizQuestionSection = null;
var quizAllDoneSection = null;
var quizHighScoresSection = null;
var parent = document.getElementById("main");

//* Makes High score section hidden or visible
function hideShowHighScores(showHide) {
   if (showHide === "hide") {
      quizHighScoresSection = parent.removeChild(document.getElementById("high-scores"));
   } else {
      parent.appendChild(quizHighScoresSection);
   }
}
//* Makes All Done section hidden or visible
function hideShowAllDone(showHide) {
   if (showHide === "hide") {
      quizAllDoneSection = parent.removeChild(document.getElementById("all-done-c"));
   } else {
      parent.appendChild(quizAllDoneSection);
   }
}
//* Makes question section hidden or visible
function hideShowQuestions(showHide) {
   if (showHide === "hide") {
      quizQuestionSection = parent.removeChild(document.getElementById("quiz-question"));
   } else {
      parent.appendChild(quizQuestionSection);
   }
}
//* Makes intro section hidden or visible.
function hideShowIntro(showHide) {
   if (showHide === "hide") {
      quizIntroSection = parent.removeChild(document.getElementById("start-quiz"));
   } else {
      parent.appendChild(quizIntroSection);
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
hideShowIntro("show")

// TODO  Process start quiz button - display quiz page
// TODO Display quiz page until all questions are processed or timed out
// TODO Display All Done screen
