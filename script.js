//* Makes intro section hidden or visible.
function hideVisibleIntro(visibility) {
   document.getElementById("heading").style.visibility = visibility;
   document.getElementById("quiz-intro").style.visibility = visibility;
   document.getElementById("start-quiz-btn").style.visibility = visibility;
}

function clearScreen() {
   hideVisibleIntro("visible");

   document.getElementById("question").style.visibility = "hidden";
   document.getElementById("answer-buttons").style.visibility = "hidden";
   document.getElementById("grade").style.visibility = "hidden";

   document.getElementById("all-done-heading").style.visibility = "hidden";
   document.getElementById("final-score").style.visibility = "hidden";
   document.getElementById("initials-label").style.visibility = "hidden";
   document.getElementById("initials").style.visibility = "hidden";
   document.getElementById("score-submit").style.visibility = "hidden";

   document.getElementById("high-scores-heading").style.visibility = "hidden";
   document.getElementById("scores-list").style.visibility = "hidden";
   document.getElementById("go-back-btn").style.visibility = "hidden";
   document.getElementById("clear-btn").style.visibility = "hidden";
}

// TODO Initialize/clear screen
clearScreen();

// TODO Display intro to quiz page
// TODO  Process start quiz button - display quiz page
// TODO Display quiz page until all questions are processed or timed out
// TODO Display All Done screen
