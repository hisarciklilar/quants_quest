// Question set with options and correct answers provided below
const questions = [
    {
        question: "Which of the following is NOT an assumption of an OLS",
        answers: [
            { text: "Sum squared error is minimised", correct: true },
            { text: "Normality", correct: false },
            { text: "Heteroscedaticity", correct: false },
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
            { text: "OLS", correct: true },
            { text: "Akaike Informaton Criteriaon", correct: false },
            { text: "Maximium likelihood estimation", correct: false },
            { text: "Generlaised method of least squares", correct: false }
        ]
    },
    {
        question: "Which is not a cause of endogeneity?",
        answers: [
            { text: "Existence of a cofounder", correct: false },
            { text: "serial correlation", correct: true },
            { text: "reverse causality", correct: false },
            { text: "Simultaneity", correct: false }
        ]
    }
];

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
                displayQuestion();
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
    document.getElementById("question-number").textContent = `${questionNumber}`;
    document.getElementById("question").textContent = questions[questionIndex].question;
    // display options of the question
    for (let i=0; i<4; i++) {
        document.getElementById(`option-${i}`).textContent = questions[questionIndex].answers[`${i}`].text;
    }
}

// The idea of using "querySelectorAll" method and ".checked" property in the code below
// is taken from an example provided in the following page:
// https://www.javascripttutorial.net/javascript-dom/javascript-radio-button/
function checkAnswer(){
    let optionNumber=0
    let questionOptions = document.querySelectorAll('input[name="option"]');
    for (let questionOption of questionOptions) {
        if (questionOption.checked) {
            let selectedOptionNumber = optionNumber;
            alert(`You selected option ${selectedOptionNumber}`);
            let questionNumber = parseInt(document.getElementById("question-number").innerText);
            let questionIndex = questionNumber - 1;
            if (questions[questionIndex].answers[selectedOptionNumber].correct === true) {
                // below could be one function for correct score calculation
                alert("this is the correct answer");
                let correctScore = parseInt(document.getElementById("correct-score").innerText);
                correctScore++;
                document.getElementById("correct-score").textContent = `${correctScore}`;
            } else {
                // below could be one function for incorrect score calculation
                alert("your answer is wrong");
                let incorrectTally = parseInt(document.getElementById("incorrect-tally").innerText);
                incorrectTally++;
                document.getElementById("incorrect-tally").textContent = `${incorrectTally}`;
            }
            break;
        } else {
            optionNumber++
        }
    } 
}
