// Variables
var startQuiz = document.querySelector(".start-quiz");
var quizQuestions = document.querySelector(".quiz-questions");
var feedback = document.querySelector(".feedback");
var fbCorrect = document.querySelector(".correct");
var fbWrong = document.querySelector(".wrong");
var endScreen = document.querySelector(".end-screen");
var hideStart = document.querySelector("#hide-start");
var hideQuestions = document.querySelector("#hide-questions");
var hideEndScreen = document.querySelector("#hide-endscreen");


console.log(hideStart);

// Hide function
function hideSection(someElement) {
    let classArray = Array.from(someElement.classList);
    if (classArray.includes("hidden")) {
        someElement.classList.remove("hidden");
    } else {
        someElement.classList.add("hidden");
    }
}

function hello() {
    console.log("hello");
}
hideStart.addEventListener("click", function() {
    hideSection(startQuiz);
});

hideQuestions.addEventListener("click", function() {
    hideSection(quizQuestions);
});

hideEndScreen.addEventListener("click", function() {
    hideSection(endScreen);
});



