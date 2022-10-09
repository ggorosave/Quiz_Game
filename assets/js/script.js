// Section Variables
var startQuiz = document.querySelector(".start-quiz");
var quizSection = document.querySelector(".quiz-questions");
var feedback = document.querySelector(".feedback");
var fbCorrect = document.querySelector(".correct");
var fbWrong = document.querySelector(".wrong");
var endScreen = document.querySelector(".end-screen");
var time = document.querySelector("#time");
var score = document.querySelector("#score");
var timeLeft = 60;

// Button Variables
var startButton = document.querySelector("#start-button");

// DELETE LATER
var hideStart = document.querySelector("#hide-start");
var hideQuestions = document.querySelector("#hide-questions");
var hideEndScreen = document.querySelector("#hide-endscreen");


time.textContent = timeLeft + " seconds";


// Hides section of page
function hideSection(someElement) {
    let classArray = Array.from(someElement.classList);
    if (classArray.includes("hidden")) {
        someElement.classList.remove("hidden");
    } else {
        someElement.classList.add("hidden");
    }
}

// Event lister for startButton
startButton.addEventListener("click", function () {

    // Question and Answer Variables
    var question = document.querySelector(".question");
    var answerOne = document.querySelector("#answer1");
    var answerTwo = document.querySelector("#answer2");
    var answerThree = document.querySelector("#answer3");
    var answerFour = document.querySelector("#answer4");

    var totalScore = 0;
    timeLeft = 60;

    // Object Array
    var questionsObjArr = [
        {
            question: "The movie was so <b>mundane</b> that the audience fell asleep from boredom.",
            answers: [
                {
                    txt: "relaxing",
                    val: "wrong"
                },
                {
                    txt: "not interesting or exciting",
                    val: "correct"
                },
                {
                    txt: "very exiting",
                    val: "wrong"
                },
                {
                    txt: "romantic",
                    val: "wrong"
                }
            ]
        },
        {
            question: "The headlights car <b>emitted</b> a blinding light, so no one could see who the driver was.",
            answers: [
                {
                    txt: "to cause confusion",
                    val: "wrong",
                },
                {
                    txt: "to move quickly",
                    val: "wrong",
                },
                {
                    txt: "to play loud music",
                    val: "wrong",
                },
                {
                    txt: "to send out something such as light",
                    val: "correct",
                }
            ]
        },
        {
            question: "The student felt nothing but <b>disdain</b> for her classmate who tried to copy her answers.",
            answers: [
                {
                    txt: "feeling like something or someone does not deserve your respect",
                    val: "correct",
                },
                {
                    txt: "feeling happy for someone",
                    val: "wrong",
                },
                {
                    txt: "feeling like you want to cry",
                    val: "wrong",
                },
                {
                    txt: "feeling hungry for something",
                    val: "wrong",
                }
            ]
        },
        {
            question: "By the end of his hike through the desert, the man had <b>depleted</b> nearly all of the water in his bottle.",
            answers: [
                {
                    txt: "to reduce something by a large amount",
                    val: "correct",
                },
                {
                    txt: "to refill something",
                    val: "wrong",
                },
                {
                    txt: "to throw away",
                    val: "wrong",
                },
                {
                    txt: "to feel hot",
                    val: "wrong",
                }
            ]
        },
        {
            question: "The <b>persistent</b> dog chased lizards in the garden all day despite never catching any.",
            answers: [
                {
                    txt: "determined to do something even though it is difficult",
                    val: "correct",
                },
                {
                    txt: "easily tricked",
                    val: "wrong",
                },
                {
                    txt: "smart and quick",
                    val: "wrong",
                },
                {
                    txt: "hungry",
                    val: "wrong",
                }
            ]
        },
        {
            question: "The lion roared with such <b>ferocity</b> that the zoo guests shook with fear.",
            answers: [
                {
                    txt: "aggressive behavior",
                    val: "wrong",
                },
                {
                    txt: "sharp teeth",
                    val: "wrong",
                },
                {
                    txt: "cute expressions",
                    val: "correct",
                },
                {
                    txt: "slow movements",
                    val: "wrong",
                }
            ]
        },
        {
            question: "I did not forgive him because his apology seemed so <b>insincere</b>.",
            answers: [
                {
                    txt: "saying or doing something that you do not believe",
                    val: "correct",
                },
                {
                    txt: "so stinky you vomit",
                    val: "wrong",
                },
                {
                    txt: "showing a lot of respect",
                    val: "wrong",
                },
                {
                    txt: "not clean or organized",
                    val: "wrong",
                }
            ]
        },
        {
            question: "The teacher’s <b>perpetual</b> criticism of his work made the student hopeless and depressed.",
            answers: [
                {
                    txt: "very encouraging",
                    val: "wrong",
                },
                {
                    txt: "continuing for a long time without stopping",
                    val: "correct",
                },
                {
                    txt: "full of song",
                    val: "wrong",
                },
                {
                    txt: "only happening once",
                    val: "wrong",
                }
            ]
        },
        {
            question: "The evil sorcerer <b>conjured</b> spirits to attack the village at night. ",
            answers: [
                {
                    txt: "to make something appear with magic",
                    val: "correct",
                },
                {
                    txt: "to throw with force",
                    val: "wrong",
                },
                {
                    txt: "to shoot from a gun",
                    val: "wrong",
                },
                {
                    txt: "to eat slowly and savor",
                    val: "wrong",
                }
            ]
        },
        {
            question: "We can only <b>speculate</b> who the evil sorcerer is since we have no clues to help us.",
            answers: [
                {
                    txt: "to look around",
                    val: "wrong",
                },
                {
                    txt: "to understand completely",
                    val: "wrong",
                },
                {
                    txt: "to guess the truth without knowing any details or facts",
                    val: "correct",
                },
                {
                    txt: "to fall down quickly",
                    val: "wrong",
                }
            ]
        }
    ]

    // Function Declarations

    // Function that randomly chooses a question and loads it into the question section.
    function getQuestion() {
        // Chooses random question
        let chosenQuestion = questionsObjArr[Math.floor(Math.random() * questionsObjArr.length)]

        // Targets the answers object array of current question
        let questionAns = chosenQuestion.answers;

        // Loads question text on screen
        question.textContent = chosenQuestion.question;

        // Randomly selects answers from the array in the answer object and renders it into the answer buttons
        function getAnswer(answerBtn) {
            let randomAns = questionAns[Math.floor(Math.random() * questionAns.length)];
            answerBtn.textContent = randomAns.txt;
            answerBtn.setAttribute("value", randomAns.val);
            questionAns.splice(questionAns.indexOf(randomAns), 1);
            return questionAns;
        }

        // Calls getAnswer function to select answer and load it to each button
        getAnswer(answerOne);

        getAnswer(answerTwo);

        getAnswer(answerThree);

        getAnswer(answerFour);

        // DELETE LATER
        console.log(questionsObjArr);

        // Removes current question from array 
        questionsObjArr.splice(questionsObjArr.indexOf(chosenQuestion), 1);

        return questionsObjArr;
    }

    // Checks value of answer runs revealFeeback function
    function checkAnswer(event) {
        target = event.target;

        // Displays feedback at a set interval
        function revealFeedback(userFb) {
            var i = 1;
            var rep = setInterval(function () {
                i--;
                hideSection(feedback);
                hideSection(userFb);
                if (i === 0) {
                    clearInterval(rep);
                }
            }, 500);
            hideSection(feedback);
            hideSection(userFb);
        }

        // Checks if questionsObjArr is empty and jumps to the end screen if true. Gets another question if not.
        function getAnotherOrEnd() {
            if (questionsObjArr.length <= 0) {
                clearInterval(startTimer);
                endGame();
            } else {
                getQuestion();
            }
        }

        // Displays feedback, adds or subtracts from score and time, and calls getQuestion function again
        if (target.value === "correct") {
            // Calls revealFeedback function for correct answers
            revealFeedback(fbCorrect);
            totalScore++;
            timeLeft += 15;
            // DELETE
            console.log("Score:" + totalScore);
            getAnotherOrEnd();
        } else {
            // Calls revealFeedback function for wrong answers
            revealFeedback(fbWrong);
            totalScore--;
            timeLeft -= 15;
            // DELETE
            console.log("Score:" + totalScore);
            getAnotherOrEnd();
        }

    }

    //End Game Function
    function endGame() {
        //Loads endsceen and score
        hideSection(quizSection);
        hideSection(endScreen);

        score.textContent = totalScore;
    }

    // Hide start quiz section
    hideSection(startQuiz);

    // Reveals quiz section
    hideSection(quizSection);

    // Genereates first question
    getQuestion();

    // WORK HERE
    //Starts timer
    var startTimer = setInterval(function () {
        timeLeft--;
        // Changes display text from "seconds" to "second" at 1 second left
        if (timeLeft === 1) {
            time.textContent = timeLeft + " second";
        }
        time.textContent = timeLeft + " seconds";

        // Game Over when time hits 0
        if (timeLeft <= 0 || totalScore < 0) {
            totalScore = 0;
            timeLeft = 0;
            clearInterval(startTimer);
            // Ends game
            endGame();

        }

        // Checks answers while time is greater than 0
        if (timeLeft > 0) {
            // Caps timer at 60
            if (timeLeft > 60) {
                timeLeft = 60;
            }

            //Event listeners for answer buttons 
            answerOne.addEventListener("click", checkAnswer);
            answerTwo.addEventListener("click", checkAnswer);
            answerThree.addEventListener("click", checkAnswer);
            answerFour.addEventListener("click", checkAnswer);
        }

    }, 1000);
})

// DELETE LATER
hideStart.addEventListener("click", function () {
    hideSection(startQuiz);
});

hideQuestions.addEventListener("click", function () {
    hideSection(quizSection);
});

hideEndScreen.addEventListener("click", function () {
    hideSection(endScreen);
});