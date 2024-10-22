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
// I followed the love-maths walkthrough example, though I wrote my own version for this quiz
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        if (this.getAttribute("id") === "submit") {
            alert("You clicked submit");
        } else if (this.getAttribute("id") === "info") {
            alert("You are asking for more info");
        } else {
            alert("you are moving to the next question");
        }
    } // close loop across buttons
}) // close of document load event listener
