// Section Variables
var startQuiz = document.querySelector(".start-quiz");
var quizSection = document.querySelector(".quiz-questions");
var feedback = document.querySelector(".feedback");
var fbCorrect = document.querySelector(".correct");
var fbWrong = document.querySelector(".wrong");
var endScreen = document.querySelector(".end-screen");
var time = document.querySelector("#time");
var score = document.querySelector("#score");

// Button Variables
var startButton = document.querySelector("#start-button");
var submitScore = document.querySelector("#submit-score");

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

    // Resets time and score when game starts
    var totalScore = 0;
    var timeLeft = 15;

    // Object Array
    var questionsObjArr = [
        {
            question: "The movie was so ____________ that the audience fell asleep from boredom.",
            answers: [
                {
                    txt: "relaxing",
                    val: "wrong"
                },
                {
                    txt: "mundane",
                    val: "correct"
                },
                {
                    txt: "exciting",
                    val: "wrong"
                },
                {
                    txt: "romantic",
                    val: "wrong"
                }
            ]
        },
        {
            question: "The headlights car ____________ a blinding light, so no one could see who the driver was.",
            answers: [
                {
                    txt: "conjured",
                    val: "wrong",
                },
                {
                    txt: "depleted",
                    val: "wrong",
                },
                {
                    txt: "tooted",
                    val: "wrong",
                },
                {
                    txt: "emitted",
                    val: "correct",
                }
            ]
        },
        {
            question: "The student felt nothing but ____________ for her classmate who tried to copy her answers.",
            answers: [
                {
                    txt: "disdain",
                    val: "correct",
                },
                {
                    txt: "mundane",
                    val: "wrong",
                },
                {
                    txt: "envy",
                    val: "wrong",
                },
                {
                    txt: "nausea",
                    val: "wrong",
                }
            ]
        },
        {
            question: "By the end of his hike through the desert, the man had ____________ nearly all of the water in his bottle.",
            answers: [
                {
                    txt: "depleted",
                    val: "correct",
                },
                {
                    txt: "emitted",
                    val: "wrong",
                },
                {
                    txt: "swam",
                    val: "wrong",
                },
                {
                    txt: "smelled",
                    val: "wrong",
                }
            ]
        },
        {
            question: "The ____________ dog chased lizards in the garden all day despite never catching any.",
            answers: [
                {
                    txt: "persistent",
                    val: "correct",
                },
                {
                    txt: "mundane",
                    val: "wrong",
                },
                {
                    txt: "hopeless",
                    val: "wrong",
                },
                {
                    txt: "lazy",
                    val: "wrong",
                }
            ]
        },
        {
            question: "The lion roared with such ____________ that the zoo guests shook with fear.",
            answers: [
                {
                    txt: "ferocity",
                    val: "correct",
                },
                {
                    txt: "adorable eyes",
                    val: "wrong",
                },
                {
                    txt: "silly dances",
                    val: "wrong",
                },
                {
                    txt: "joy",
                    val: "wrong",
                }
            ]
        },
        {
            question: "I did not forgive him because his apology seemed so ____________.",
            answers: [
                {
                    txt: "insincere",
                    val: "correct",
                },
                {
                    txt: "honest",
                    val: "wrong",
                },
                {
                    txt: "stinky",
                    val: "wrong",
                },
                {
                    txt: "disorganized",
                    val: "wrong",
                }
            ]
        },
        {
            question: "The teacher’s ____________ criticism of his work made the student hopeless and depressed.",
            answers: [
                {
                    txt: "mundane",
                    val: "wrong",
                },
                {
                    txt: "perpetual",
                    val: "correct",
                },
                {
                    txt: "glowing",
                    val: "wrong",
                },
                {
                    txt: "joyful",
                    val: "wrong",
                }
            ]
        },
        {
            question: "The evil sorcerer ____________ spirits to attack the village at night. ",
            answers: [
                {
                    txt: "conjured",
                    val: "correct",
                },
                {
                    txt: "threw",
                    val: "wrong",
                },
                {
                    txt: "smelled",
                    val: "wrong",
                },
                {
                    txt: "digested",
                    val: "wrong",
                }
            ]
        },
        {
            question: "We can only ____________ who the evil sorcerer is since we have no clues to help us.",
            answers: [
                {
                    txt: "spuddle",
                    val: "wrong",
                },
                {
                    txt: "destroy",
                    val: "wrong",
                },
                {
                    txt: "speculate",
                    val: "correct",
                },
                {
                    txt: "assert",
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
            // Choosese random question from questionAns array
            let randomAns = questionAns[Math.floor(Math.random() * questionAns.length)];

            // Sets button text to answer text from array
            answerBtn.textContent = randomAns.txt;

            // Gives button a value
            answerBtn.setAttribute("value", randomAns.val);

            // Removes answer from array
            questionAns.splice(questionAns.indexOf(randomAns), 1);
            return questionAns;
        }

        // Iterates through the answerBtnArray and runs the getAnswer function for each button
        function getAnswers() {

            let answerBtnArray = [answerOne, answerTwo, answerThree, answerFour];

            for (i = 0; i < answerBtnArray.length; i++) {
                getAnswer(answerBtnArray[i]);
            }
        }

        // Calls getAnswers function
        getAnswers();

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
            }, 1000);
            hideSection(feedback);
            hideSection(userFb);
        }

        // Checks if questionsObjArr is empty and jumps to the end screen if true. Gets another question if not.
        function getAnotherOrEnd() {

            //If there are no more questions in the array, the game ends. Otherwise, it gets another question. 
            if (questionsObjArr.length <= 0) {
                timeLeft = 0;
                time.textContent = timeLeft + " seconds";
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
            // Add one to score
            totalScore++;

            // Adds 5 seconds to time

            // Checks if there are anymore questions and gets a question or ends
            getAnotherOrEnd();
        } else {
            // Calls revealFeedback function for wrong answers
            revealFeedback(fbWrong);

            // Subtracts one from score
            totalScore--;

            // Subtracts five secons from time
            timeLeft -= 5;

            // Checks if there are anymore questions and gets a question or ends
            getAnotherOrEnd();
        }

    }

    //End Game Function
    function endGame() {
        //Loads endsceen and score
        hideSection(quizSection);
        hideSection(endScreen);

        // Resets score to 0 if negative
        if (totalScore < 0) {
            totalScore = 0;
        }

        // Resets time to 0 if negative
        if (timeLeft < 0) {
            timeLeft = 0;
        }
        
        // Displays time
        time.textContent = timeLeft + " seconds";
        
        // Displays score
        score.textContent = totalScore;
    }

    // **Function Calls**
    // Hide start quiz section
    hideSection(startQuiz);

    // Reveals quiz section
    hideSection(quizSection);

    // Genereates first question
    getQuestion();

    //Starts timer
    var startTimer = setInterval(function () {
        timeLeft--;

        // Changes display text from "seconds" to "second" at 1 second left
        if (timeLeft === 1) {
            // Changes display text
            time.textContent = timeLeft + " second";
        }

        // Displays time left
        time.textContent = timeLeft + " seconds";

        // Game Over when time hits 0
        if (timeLeft <= 0) {

            clearInterval(startTimer);
            // Ends game
            endGame();

        }

        // Caps time at 15 seconds
        if (timeLeft > 15) {
            timeLeft = 15;
            time.textContent = timeLeft + " seconds";
            return timeLeft;
        }

        // Ends game if score is less than 0;
        if (totalScore < 0) {
            timeLeft = 0;
            clearInterval(startTimer);
            // Ends game
            endGame();
        }

        // Checks answers while time is greater than 0
        if (timeLeft > 0 && totalScore >= 0) {
            //Event listeners for answer buttons 
            answerOne.addEventListener("click", checkAnswer);
            answerTwo.addEventListener("click", checkAnswer);
            answerThree.addEventListener("click", checkAnswer);
            answerFour.addEventListener("click", checkAnswer);
        }


    }, 1000);
})

// Move UP
var userInitials = document.querySelector("#user-initials");

// Event lister for submit score button
submitScore.addEventListener("click", function (event) {
    event.preventDefault();

    // Adds initial and score to local storage
    var userScore = {
        name: userInitials.value.trim(),
        score: score.textContent
    }

    localStorage.setItem("userScore", JSON.stringify(userScore));
    window.location = ("./scores.html");
})