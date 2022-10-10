// Variables
var firstPlaceName = document.querySelector("#first-name");
var firstPlaceScore = document.querySelector("#first-score");
var secondPlaceName = document.querySelector("#second-name");
var secondPlaceScore = document.querySelector("#second-score");
var thirdPlaceName = document.querySelector("#third-name");
var thirdPlaceScore = document.querySelector("#third-score");
var first = document.querySelector("#first-place");
var second = document.querySelector("#second-place");
var third = document.querySelector("#third-place");

// Array of place rows (see revealRows and hideRows function)
var placeRows = [first, second, third];

// Buttons
var clearScores = document.querySelector("#clear-scores")


// Function to render scores to the screen
function renderScores() {

    //Gets objects from local storage
    var lastScore = JSON.parse(localStorage.getItem("userScore"));
    var firstPlace = JSON.parse(localStorage.getItem("firstPlace"));
    var secondPlace = JSON.parse(localStorage.getItem("secondPlace"));
    var thirdPlace = JSON.parse(localStorage.getItem("thirdPlace"));

    // Array of functions that set local storage
    var setScores = [
        //Stores first place score in local storage
        function setFirstPlace() {

            var firstPlace = {
                name: firstPlaceName.textContent,
                score: firstPlaceScore.textContent
            }

            localStorage.setItem("firstPlace", JSON.stringify(firstPlace));
        },

        //Stores second place score in local storage
        function setSecondPlace() {

            var secondPlace = {
                name: secondPlaceName.textContent,
                score: secondPlaceScore.textContent
            }

            localStorage.setItem("secondPlace", JSON.stringify(secondPlace));
        },

        // Stores third place score in local storage
        function setThirdPlace() {

            var thirdPlace = {
                name: thirdPlaceName.textContent,
                score: thirdPlaceScore.textContent
            }

            localStorage.setItem("thirdPlace", JSON.stringify(secondPlace));
        }

    ];

    // An array of functions that load scores from local storage
    var loadScores = [

        // Loads first place score from local storage (if not replaced by last score)
        function loadFirstScore() {
            firstPlaceName.textContent = firstPlace.name;
            firstPlaceScore.textContent = firstPlace.score;
        },

        // Loads second place score from local storage (if not replaced by last score)
        function loadSecondScore() {
            secondPlaceName.textContent = secondPlace.name;
            secondPlaceScore.textContent = secondPlace.score;
        },

        // Loads third place score from local storage (if not replaced by last score)
        function loadThirdScore() {
            thirdPlaceName.textContent = thirdPlace.name;
            thirdPlaceScore.textContent = thirdPlace.score;
        }
    ];

    // Functions
    // Reveals scores using placeRows array
    function revealRows(someArray, endPoint) {
        for (i = 0; i < endPoint; i++) {
            someArray[i].classList.remove("hidden");
        }
    }
    
    // Function meant to repeat functions within an array (see setScores and loadScores)
    function repeatTask(someArray, endPoint) {
        for (i = 0; i < endPoint; i++) {
            someArray[i]();
        }
    }

    // Inserts lastScore at parameter place
    function insertScore(ordinalName, ordinalScore) {
        ordinalName.textContent = lastScore.name;
        ordinalScore.textContent = lastScore.score;
    }

    // Pushes score down one place, i.e. first place to second or second to third.
    function pushDownPlace(newPlaceName, newPlaceScore, previousPlace) {
        newPlaceName.textContent = previousPlace.name;
        newPlaceScore.textContent = previousPlace.score;
    }


    // Checks if userScore is in local storage and runs if true
    if (lastScore !== null) {

        // Checks if firstPlace does not exist in local storage and runs if true 
        if (firstPlace === null) {

            // Reveals first place row
            revealRows(placeRows, 1);

            // Inserts last score in first place
            insertScore(firstPlaceName, firstPlaceScore);

            //Stores first place in local storage
            setScores[0]();
            return;
        }

        // Checks if secondPlace does not exist and runs if true
        if (secondPlace === null) {

            // Reveals first and second place rows
            revealRows(placeRows, 2);

            // Checks if last score is greater than or equal to second and first place
            if (lastScore.score >= firstPlace.score) {

                // pushes first place to second
                pushDownPlace(secondPlaceName, secondPlaceScore, firstPlace)

                // inserts last score in first place
                insertScore(firstPlaceName, firstPlaceScore);

                //Stores first and second place in local storage
                repeatTask(setScores, 2);
                return;
            }

            // Loads first place from local storage
            loadScores[0]();

            // Inserts last score in second place
            insertScore(secondPlaceName, secondPlaceScore);

            //Stores first and Second place in local storage
            repeatTask(setScores, 2);
            return;
        }

        // Checks if thirdPlace does not exist and runs if true
        if (thirdPlace === null) {

            // Reveals first, second, and third place rows
            revealRows(placeRows, 3);

            // check if last score is greater than or equal to first
            if (lastScore.score >= firstPlace.score) {

                // push second place to third
                pushDownPlace(thirdPlaceName, thirdPlaceScore, secondPlace);

                // push first place to second
                pushDownPlace(secondPlaceName, secondPlaceScore, firstPlace);

                // insert last score in first place
                insertScore(firstPlaceName, firstPlaceScore);

                //Stores first, second, and third place in local storage
                repeatTask(setScores, 3);
                return;
            }


            // check if last score is greater than second
            if (lastScore.score >= secondPlace.score) {

                // push second place to third
                pushDownPlace(thirdPlaceName, thirdPlaceScore, secondPlace);

                // insert last score in second place
                insertScore(secondPlaceName, secondPlaceScore);

                // Loads first place from local storage
                loadScores[0]();

                //Stores first, second, and third place in local storage
                repeatTask(setScores, 3);
                return;
            }

            // Loads first and second place from local storage
            repeatTask(loadScores, 2);

            //Inserts lastScore in third place
            insertScore(thirdPlaceName, thirdPlaceScore);

            //Stores first, second, and third place in local storage
            repeatTask(setScores, 3);
            return;
        }

        // Runs if firstPlace, secondPlace, and thirdPlace already exist in local storage
        // Checks if last score is greater than first place
        if (lastScore.score >= firstPlace.score) {

            // Reveals first, second, and third place rows
            revealRows(placeRows, 3);

            // Pushes second place to third
            pushDownPlace(thirdPlaceName, thirdPlaceScore, secondPlace);

            // Pushes first place to second
            pushDownPlace(secondPlaceName, secondPlaceScore, firstPlace);

            // Inserts last score in first place
            insertScore(firstPlaceName, firstPlaceScore);

            //Stores first, second, and third place in local storage
            repeatTask(setScores, 3);
            return;
        }

        // Checks if last score is great than or equal second place
        if (lastScore.score >= secondPlace.score) {

            // Reveals first, second, and third place rows
            revealRows(placeRows, 3);

            // pushes second place to third
            pushDownPlace(thirdPlaceName, thirdPlaceScore, secondPlace);

            // inserts last score in second place
            insertScore(secondPlaceName, secondPlaceScore);

            // Loads first place from local storage
            loadScores[0]();

            //Stores first, second, and third place in local storage
            repeatTask(setScores, 3);
            return;
        }

        // Checks if last score is greater than third place
        if (lastScore.score >= thirdPlace.score) {

            // Reveals first, second, and third place rows
            revealRows(placeRows, 3);

            // Inserts last score in third place
            insertScore(thirdPlaceName, thirdPlaceScore);

            // Loads first and second place from local storage
            repeatTask(loadScores, 2);

            // Sets first, second, and third place to local storage
            repeatTask(setScores, 3);
            return;
        }

        // Runs if user score is less than first, second, and third place
        // Reveals first, second, and third place rows
        revealRows(placeRows, 3);

        // Loads first, second, and third place from local storage.
        repeatTask(loadScores, 3);
    }
}

// Renders scores on screen
renderScores();

// Clears scores from view score page
clearScores.addEventListener("click", function () {

    function hideRows(someArray, endPoint) {
        for (i = 0; i < endPoint; i++) {
            someArray[i].classList.add("hidden");
        }
    }

    hideRows(placeRows, 2);

    localStorage.clear();
    location.reload();
})