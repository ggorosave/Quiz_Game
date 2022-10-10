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

var goBack = document.querySelector("#back")
var clearScores = document.querySelector("#clear-scores")

// loads scores from local storage when browswer loads in
function renderScores() {
    var lastScore = JSON.parse(localStorage.getItem("userScore"));
    var firstPlace = JSON.parse(localStorage.getItem("firstPlace"));
    var secondPlace = JSON.parse(localStorage.getItem("secondPlace"));
    var thirdPlace = JSON.parse(localStorage.getItem("thirdPlace"));

    // Function Declarations
    // Reveals score
    function revealScore (someElement) {
        someElement.classList.remove("hidden");
    }
        


    // Inserts lastScore at parameter place
    function insertScore(ordinalName, ordinalScore) {
        ordinalName.textContent = lastScore.name;
        ordinalScore.textContent = lastScore.score;
    }

    // Pushes score down one place
    function pushDownPlace(newPlaceName, newPlaceScore, previousPlace) {
        newPlaceName.textContent = previousPlace.name;
        newPlaceScore.textContent = previousPlace.score;
    }

    //stores first place score in local storage
    function setFirstPlace() {

        var firstPlace = {
            name: firstPlaceName.textContent,
            score: firstPlaceScore.textContent
        }

        localStorage.setItem("firstPlace", JSON.stringify(firstPlace));
    }

    function setSecondPlace() {

        var secondPlace = {
            name: secondPlaceName.textContent,
            score: secondPlaceScore.textContent
        }

        localStorage.setItem("secondPlace", JSON.stringify(secondPlace));
    }

    function setThirdPlace() {

        var thirdPlace = {
            name: thirdPlaceName.textContent,
            score: thirdPlaceScore.textContent
        }

        localStorage.setItem("thirdPlace", JSON.stringify(secondPlace));
    }

    if (lastScore !== null) {

        // checks if firstPlace is empty
        if (firstPlace === null) {
            // Reveals first place
            revealScore(first);

            // inserts last score in first place if  first, second, and third place have no values
            insertScore(firstPlaceName, firstPlaceScore);

            //stores all current score information in local storage
            var firstPlace = {
                name: firstPlaceName.textContent,
                score: firstPlaceScore.textContent
            }

            setFirstPlace();
            return;
        }

        // checks secondPlace is empty
        if (secondPlace === null) {
            // Reveals second place
            revealScore(first);
            revealScore(second);

            // Checks if last score is greater than second and first place
            if (lastScore.score >= firstPlace.score) {

                // pushes first place to second
                pushDownPlace(secondPlaceName, secondPlaceScore, firstPlace)

                // inserts last score in first place
                insertScore(firstPlaceName, firstPlaceScore);

                setSecondPlace();
                setFirstPlace();
                return;
            }

            // inserts last score in second place
            insertScore(secondPlaceName, secondPlaceScore);

            setSecondPlace();
            setFirstPlace();
            return;
        }

        //checks if third place is empty
        if (thirdPlace === null) {
            // Reveals third place
            revealScore(first);
            revealScore(second);
            revealScore(third);

            // check if last score is greater than first
            if (lastScore.score >= firstPlace.score) {
                
                // push second place to third
                pushDownPlace(thirdPlaceName, thirdPlaceScore, secondPlace);
                
                // push first place to second
                pushDownPlace(secondPlaceName, secondPlaceScore, firstPlace);
                
                // insert last score in first place
                insertScore(firstPlaceName, firstPlaceScore);

                setThirdPlace();
                setSecondPlace();
                setFirstPlace();
                return;
            }

            
            // check if last score is greater than second
            if (lastScore.score >= secondPlace.score) {
                
                // push second place to third
                pushDownPlace(thirdPlaceName, thirdPlaceScore, secondPlace);
                
                // insert last score in second place
                insertScore(secondPlaceName, secondPlaceScore);

                
                firstPlaceName.textContent = firstPlace.name;
                firstPlaceScore.textContent = firstPlace.score;
                
                
                setThirdPlace();
                setSecondPlace();
                setFirstPlace();
                return;
            }
            
            //insert in third place
            insertScore(thirdPlaceName, thirdPlaceScore);

            setThirdPlace();
            setSecondPlace();
            setFirstPlace();
            return;
        }

        // runs if all places have values
        // Checks if last score is greater than first place
        if (lastScore.score >= firstPlace.score) {
            revealScore(first);
            revealScore(second);
            revealScore(third);

            // pushes second place to third
            pushDownPlace(thirdPlaceName, thirdPlaceScore, secondPlace);

            // pushes first place to second
            pushDownPlace(secondPlaceName, secondPlaceScore, firstPlace);

            // inserts last score in first place
            insertScore(firstPlaceName, firstPlaceScore);

            setThirdPlace();
            setSecondPlace();
            setFirstPlace();
            return;
        }

        // Checks if last score is great than or equal second place
        if (lastScore.score >= secondPlace.score) {
            revealScore(first);
            revealScore(second);
            revealScore(third);

            // pushes second place to third
            pushDownPlace(thirdPlaceName, thirdPlaceScore, secondPlace);

            // inserts last score in second place
            insertScore(secondPlaceName, secondPlaceScore);

            firstPlaceName.textContent = firstPlace.name;
            firstPlaceScore.textContent = firstPlace.score;

            setThirdPlace();
            setSecondPlace();
            setFirstPlace();
            return;
        }

        // Checks if last score is greater than third place
        if (lastScore.score > thirdPlace.score) {
            revealScore(first);
            revealScore(second);
            revealScore(third);
            
            // inserts last score in third place
            insertScore(thirdPlaceName, thirdPlaceScore);

            firstPlaceName.textContent = firstPlace.name;
            firstPlaceScore.textContent = firstPlace.score;
            secondPlaceName.textContent = secondPlace.name;
            secondPlaceScore.textContent = secondPlace.score;

            setThirdPlace();
            setSecondPlace();
            setFirstPlace();
            return;
        }
        revealScore(first);
        revealScore(second);
        revealScore(third);

        firstPlaceName.textContent = firstPlace.name;
        firstPlaceScore.textContent = firstPlace.score;
        secondPlaceName.textContent = secondPlace.name;
        secondPlaceScore.textContent = secondPlace.score;
        thirdPlaceName.textContent = thirdPlace.name;
        thirdPlaceScore.textContent = thirdPlace.score;
    }
}

// Renders scores on screen
renderScores();

// Clears scores from view score page
clearScores.addEventListener("click", function () {
    
    function hideScore (someElement) {
        someElement.classList.add("hidden");
    }

    hideScore(first);
    hideScore(second);
    hideScore(third);
    
    localStorage.clear();
    location.reload();
})