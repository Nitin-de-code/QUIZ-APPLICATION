
const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 7;

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup",() => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
    console.log("clicked the save button!");
    e.preventDefault();

    const score = {
        score:  mostRecentScore,
        name: username.value
    };
    highScores.push(score);
    highScores.sort((a,b) => b.score - a.score);
    highScores.splice(7);

    localStorage.setItem("highScores",JSON.stringify(highScores));
    window.location.assign("/quiz.html");
};

/*const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");  // Get the score from localStorage

finalScore.innerText = mostRecentScore; // Display the score

// Enable the save button only if a username is entered
username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value;
});

// Save the high score to the backend
saveHighScore = e => {
    e.preventDefault();  // Prevent default form submission

    const score = {
        score: mostRecentScore,
        name: username.value
    };

    // Send the score to your backend using a POST request
    fetch("http://localhost:3000/submit-score", {
        method: "POST",  // Use POST method to send the data
        headers: {
            "Content-Type": "application/json"  // Send data as JSON
        },
        body: JSON.stringify(score)  // Convert the score object to JSON format
    })
    .then(response => {
        if (response.ok) {
            console.log("Score saved successfully!");
            window.location.assign("/leaderboard.html");  // Redirect to leaderboard page after saving
        } else {
            console.error("Failed to save score.");
            alert("There was an error saving your score. Please try again.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("There was an error saving your score. Please try again.");
    });
};
*/