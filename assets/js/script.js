// NOTE: This only references the first element found
var buttonStart = document.querySelector("#buttonStart");
var pageStart = document.querySelector("#pageStart"); 
var Q1 = document.querySelector("#Q1");
var Q2 = document.querySelector("#Q2");
var answerFalse = document.getElementsByClassName("false");
var answerTrue = document.querySelector(".true");
var resultText = document.querySelector("#resultText");
var indivResults = document.querySelector("#indivResults"); 
var initials = document.querySelector("#initials"); 
var buttonInitials = document.querySelector("#buttonInitials"); 
var highScores = document.querySelector("#highScores"); 


var timer; 
var score = 5;
var initials = "";
var highScore

// Function to hide all elements except the beginning statement
function init() {
    Q1.style.display = "none"; 
    Q2.style.display = "none"; 
    indivResults.style.display = "none";
}

// Hides the opening statement and introduces the first question
buttonStart.addEventListener("click", function() {
    Q1.style.display = "block"; 
    pageStart.style.display = "none";
})

// Result
for (var i = 0; i < answerFalse.length; i++) {
    answerFalse[i].addEventListener("click", function() {
        resultText.textContent = "Incorrect";
        Q1.style.display = "none";
        // Q2.style.display = "block";
        indivResults.style.display = "block";
        
 })}; 

answerTrue.addEventListener("click", function() {
    score = score + 5;
    resultText.textContent = "Correct + Score: " + score;
    Q1.style.display = "none";
    // Q2.style.display = "block";
    indivResults.style.display = "block"; 
    // ACTION: Move forward to the next question
})


// buttonInitials.addEventListener("click", function() {
//     initials = "CBJ"; 
//     indivResults.style.display = "none"; 
//     // highScores.style.display = "block"; 
//     test.textContent = initials + ": " + score
// })

init();

// var highScores = {
//     initials: initials.value, 
//     score: score.value, 
// }



