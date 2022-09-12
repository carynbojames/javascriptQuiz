// NOTE: This only references the first element found
var buttonStart = document.querySelector("#buttonStart");
var pageStart = document.querySelector("#pageStart"); 
var Q1 = document.querySelector("#Q1");
var Q2 = document.querySelector("#Q2");
// NOTE: getElementsByClassName doesn't require a . for the class
var answerFalse = document.getElementsByClassName("false");
var answerTrue = document.querySelector(".true");
var resultText = document.querySelector("#resultText");
var indivResults = document.querySelector("#indivResults"); 
var initials = document.querySelector("#initials"); 
var buttonInitials = document.querySelector("#buttonInitials"); 
var pageFinal = document.querySelector("#pageFinal"); 
var highScores = document.querySelector("#highScores"); 
var buttonStartOver = document.querySelector("#buttonStartOver");
var buttonReset = document.querySelector("#buttonReset")
var test = document.querySelector("#test"); 


var score = 0;
initials.textContext = initials; 

// Function to hide all elements except the beginning statement
function init() {
    Q1.style.display = "none"; 
    Q2.style.display = "none"; 
    indivResults.style.display = "none";
    pageFinal.style.display = "none";
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


buttonInitials.addEventListener("click", function() {
    initials = initials.value; 
    indivResults.style.display = "none"; 
    pageFinal.style.display = "block";
    test.textContent = initials + ": " + score
})

buttonStartOver.addEventListener("click", function() {
    pageFinal.style.display = "none";
    pageStart.style.display = "block"; 
    score = 0; 
})

init();

// var highScores = {
//     initials: initials.value, 
//     score: score.value, 
// }



