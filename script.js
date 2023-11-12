//* Makes High score section hidden or visible
function hideVisibleHighScores(visibility) {
   document.getElementById("high-scores-heading").style.visibility = visibility;
   document.getElementById("scores-list").style.visibility = visibility;
   document.getElementById("go-back-btn").style.visibility = visibility;
   document.getElementById("clear-btn").style.visibility = visibility;
}
//* Makes All Done section hidden or visible
function hideVisibleAllDone(visibility) {
   document.getElementById("all-done-heading").style.visibility = visibility;
   document.getElementById("final-score").style.visibility = visibility;
   document.getElementById("initials-label").style.visibility = visibility;
   document.getElementById("initials").style.visibility = visibility;
   document.getElementById("score-submit").style.visibility = visibility;
}
//* Makes question section hidden or visible
function hideVisibleQuestion(visibility) {
   document.getElementById("question").style.visibility = visibility;
   document.getElementById("answer-buttons").style.visibility = visibility;
   document.getElementById("grade").style.visibility = visibility;
}
//* Makes intro section hidden or visible.
function hideVisibleIntro(visibility) {
   document.getElementById("heading").style.visibility = visibility;
   document.getElementById("quiz-intro").style.visibility = visibility;
   document.getElementById("start-quiz-btn").style.visibility = visibility;
}

function initializeQuizApp() {
   hideVisibleIntro("visible");
   hideVisibleQuestion("visible");
   hideVisibleAllDone("visible");
   hideVisibleHighScores("visible");
}

// TODO Initialize/clear screen
initializeQuizApp();

// TODO Display intro to quiz page
// TODO  Process start quiz button - display quiz page
// TODO Display quiz page until all questions are processed or timed out
// TODO Display All Done screen
