// Question set with options and correct answers provided below
const questions = [
    {
        question: "Which of the following is not an assumption of an OLS",
        answers: [
            { text: "Sum squared error is minimised", correct: true },
            { text: "Normality", correct: false },
            { text: "Homoscedasticity", correct: false },
            { text: "No serial correlation", correct: false }
        ]
    },
    {
        question: "Which regresion model's coefficiens show elasticity without further transformation?",
        answers: [
            { text: "log-lin", correct: false },
            { text: "lin-log", correct: false },
            { text: "lin-lin", correct: false },
            { text: "Log-log", correct: true }
        ]
    },
    {
        question: "Which estimation method relies on minimisation of error sum squared?",
        answers: [
            { text: "Ordinary Least Squares", correct: true },
            { text: "Akaike Information Criterion", correct: false },
            { text: "Maximuum Likelihood Estimation", correct: false },
            { text: "Generalised Method of Moments", correct: false }
        ]
    },
    {
        question: "Which is not a cause of endogeneity?",
        answers: [
            { text: "Existence of a confounder", correct: false },
            { text: "Serial correlation", correct: true },
            { text: "Reverse causality", correct: false },
            { text: "Simultaneity", correct: false }
        ]
    }
];

// post the number of questions in quiz
document.getElementById("quiz-length").textContent = questions.length;

// Add event listeners
// I followed the love-maths walkthrough example to add page load listener 
// I wrote my own version of the button listeners
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (button.getAttribute("id") === "submit") {
                // alert("You clicked submit");
                checkAnswer();
            } else if (button.getAttribute("id") === "next") {
                // alert("You clicked next button!"); 
                let questionIndex = parseInt(document.getElementById("question-number").innerText);
                if (questionIndex < questions.length) {
                    displayQuestion();
                    // resetOptions(); // this is to remove the borders in previous question options
                } else {
                    // alert("end of game!");
                    displayEndOfQuiz();
                }
            } else {
                alert("you want to learn more");
            }
        }); // close of button event listener
    } // close of loop across buttons
}) // close of load page listener

// First question is displayed once the page loads
displayQuestion();

function displayQuestion() {
    let questionIndex = parseInt(document.getElementById("question-number").innerText);
    let questionNumber = questionIndex + 1;
    document.getElementById("question-number").textContent = questionNumber;
    document.getElementById("question").textContent = questions[questionIndex].question;
    // display options of the question
    for (let i=0; i<4; i++) {
        document.getElementById(`option-${i}`).textContent = questions[questionIndex].answers[i].text;
    }
}

// The idea of using "querySelectorAll" method and ".checked" property in the code below
// is taken from an example provided in the following page:
// https://www.javascripttutorial.net/javascript-dom/javascript-radio-button/
function checkAnswer(){
    let questionNumber = parseInt(document.getElementById("question-number").innerText);
    let questionIndex = questionNumber - 1;
    let optionNumber=0
    let questionOptions = document.querySelectorAll('input[name="option"]');
    for (let questionOption of questionOptions) {
        if (questionOption.checked) {
            let selectedOptionNumber = optionNumber;
            // alert(`You selected option ${selectedOptionNumber}`);        
            if (questions[questionIndex].answers[selectedOptionNumber].correct === true) {
                // add border to selected answer
                // document.getElementById(`option-${selectedOptionNumber}`).style.border = "5px solid green";
                // document.getElementById(`option-${selectedOptionNumber}`).addClass("green-border");
                calculateCorrectTally();
            } else {
                // add border to selected answer
                // document.getElementById(`option-${selectedOptionNumber}`).style.border = "5px solid red";
                // document.getElementById(`option-${selectedOptionNumber}`).addClass("red-border");
                // add border to correct answer
                // I leave this here because I first need to check how to remove the existing borders in next question
                calculateIncorrectTally();
            }
            break;
        } else {
            optionNumber++
        }
    } 
}

function calculateCorrectTally() {
    let correctScore = parseInt(document.getElementById("correct-score").innerText);
    correctScore++;
    document.getElementById("correct-score").textContent = `${correctScore}`;
}

function calculateIncorrectTally() {
    let incorrectTally = parseInt(document.getElementById("incorrect-tally").innerText);
    incorrectTally++;
    document.getElementById("incorrect-tally").textContent = `${incorrectTally}`;
}

function displayEndOfQuiz() {
    let endOfQuizMessage = `<h3 class="end-of-quiz-message">End of quiz! </h3>`;
    let correctScore = parseInt(document.getElementById("correct-score").innerText);
    let incorrectTally = parseInt(document.getElementById("incorrect-tally").innerText);
    let numberOfQuestions = correctScore + incorrectTally;
    let endOfQuizScoreMessage = `<h3>Out of ${numberOfQuestions} questions, 
        you answered ${correctScore} correctly.</h3>`;
    document.getElementById("question-container").innerHTML = endOfQuizMessage;
    document.getElementById("feedback-container").innerHTML = endOfQuizScoreMessage;
}

// function resetOptions() {
//     for (let i=0; i<4; i++) {
//         document.getElementById(`option-${i}`).removeClass("red-border");
//         document.getElementById(`option-${i}`).removeClass("green-border");
//     }
// }