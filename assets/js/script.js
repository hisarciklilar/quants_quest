// Question set with options and correct answers provided below
const questions = [
    {
        question: "Which of the following is not an assumption of an OLS",
        answers: [
            { text: "Sum squared error is minimised", correct: true },
            { text: "Normality", correct: false },
            { text: "Homoscedasticity", correct: false },
            { text: "No serial correlation", correct: false }
        ],
        feedback: "OLS coefficients are obtained by minimising the error sum of squares. This is a methodological approach, not an assumption. The other options are assumptions of OLS.", 
        chapter: "Chapter 1",
    },
    {
        question: "Which regression model's coefficients show elasticity without further transformation?",
        answers: [
            { text: "log-lin", correct: false },
            { text: "lin-log", correct: false },
            { text: "lin-lin", correct: false },
            { text: "Log-log", correct: true }
        ],
        feedback: "The coefficient estimates of a log-log model directly measures the elasticity of the dependent variable with respect to the independent variable. although we may be able to obtain elasticities using other functional forms, they require further calculations.",
        chapter: "Chapter 2",
    },
    {
        question: "Which estimation method relies on minimisation of error sum squared?",
        answers: [
            { text: "Ordinary Least Squares", correct: true },
            { text: "Akaike Information Criterion", correct: false },
            { text: "Maximum Likelihood Estimation", correct: false },
            { text: "Generalised Method of Moments", correct: false }
        ],
        feedback: "OLS estiamtes are obtained by minimising error sum of squares. AIC is not an estimation approach but a criteria we use in model selection. ML estimation requires using sample log-likelihood functions. GMM uses moment conditions to get the estimates.",
        chapter: "Chapters 1, 6, and 11",
    },
    {
        question: "Which is not a cause of endogeneity?",
        answers: [
            { text: "Existence of a confounder", correct: false },
            { text: "Serial correlation", correct: true },
            { text: "Reverse causality", correct: false },
            { text: "Simultaneity", correct: false }
        ],
        feedback: "Existence of serial correlation (between error terms) is not a cause of endogeneity but a violation of one of the assumptions of OLS.",
        chapter: "Chapters 6 and 7",
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
                deactivateSubmit();
                checkAnswer();
            } else if (button.getAttribute("id") === "next") {
                // alert("You clicked next button!"); 
                let questionIndex = parseInt(document.getElementById("question-number").innerText);
                if (questionIndex < questions.length) {
                    displayQuestion();
                } else {
                    displayEndOfQuiz();
                }
            } else if (button.getAttribute("id") === "btn-close") {
                closeInformation();
            } else {
                provideInformation();
            }
        }); // close of button event listener
    } // close of loop across buttons
}); // close of load page listener

// First question is displayed once the page loads
displayQuestion();

/**
 * This function first clears the feedback from previous question submission 
 * It then loads the next question and its options. 
 * I shows the "submit answer" button, which was hidden after previous question submission.
 * It also calls displayInformation(questionIndex) and displayBookChapter(questionIndex)
 * functions to get the information on the active question ready to be called by the user. 
 */
function displayQuestion() {
    document.getElementById("feedback").style.display = "none";
    // post the number of questions in quiz
    document.getElementById("quiz-length").textContent = questions.length;
    let questionIndex = parseInt(document.getElementById("question-number").innerText);
    let questionNumber = questionIndex + 1;
    // Information to be provided as feedback (hidden until the user requests for it)
    displayInformation(questionIndex);
    displayBookChapter(questionIndex);
    document.getElementById("question-number").textContent = questionNumber;
    document.getElementById("question").textContent = questions[questionIndex].question;
    // display options of the question
    for (let i=0; i<4; i++) {
        let option=document.getElementsByClassName("option")[i];
        option.textContent = questions[questionIndex].answers[i].text;
        option.style.cursor = "pointer";
        option.addEventListener("click", function(){
            document.getElementById(`option-${i}`).checked = true;
        });
        }
    document.getElementById("submit").style.display = "inline";
    }

/**
 * This function calls the information about the active question. 
 */
function displayInformation(index) {
    document.getElementById("modal-information").textContent = questions[index].feedback;
}

/**
 * This function calls the relevant book chapter(s) about the active question. 
 */
function displayBookChapter(index) {
    // let questionIndex = parseInt(document.getElementById("question-number").innerText);
    document.getElementById("book-chapter").textContent = questions[index].chapter;
}

/**
 * This function hides the "Submit Answer" button once the user submits an answer. 
 * It prevents the user re-submitting multiple answers to the same question
 */
function deactivateSubmit() {
    document.getElementById("submit").style.display = "none";
}

// The idea of using "querySelectorAll" method and ".checked" property in the code below
// is taken from an example provided in the following page:
// https://www.javascripttutorial.net/javascript-dom/javascript-radio-button/

/**
 * This function checks user's answer by comparing the selected option with the 
 * answer provided in the questions array. It calls functions to update the 
 * correct/incorrect answer tallies and also to provide positive/negative feedback
 * messages depending on user's performance. 
 * It clears the selected option upon submission, preparing the page for next question
 */
function checkAnswer(){
    let questionNumber = parseInt(document.getElementById("question-number").innerText);
    let questionIndex = questionNumber - 1;
    let optionNumber=0;
    let questionOptions = document.querySelectorAll('input[name="option"]');
    for (let questionOption of questionOptions) {
        if (questionOption.checked) {
            let selectedOptionNumber = optionNumber;
            //line below clears selection after submit
            document.getElementById(`option-${selectedOptionNumber}`).checked = false;      
            if (questions[questionIndex].answers[selectedOptionNumber].correct === true) {
                calculateCorrectTally();
                displayPositiveFeedback();
            } else {
                calculateIncorrectTally();
                displayNegativeFeedback();
            }
            break;
        } else {
            optionNumber++;
        }
    } 
}

/**
 * This function posts a positive feedback message if the user answers the question correctly.
 */
function displayPositiveFeedback(){
document.getElementById('feedback').style.display = "block";
let html = 
` <h2> <i class="fa-regular fa-circle-check positive"></i> </h2>
<div class="feedback positive green-border"> Well done! Your answer is correct. </div>
`;
document.getElementById("feedback").innerHTML = html;
}

/**
 * This function posts a negative feedback message if the user answers the question incorrectly.
 */
function displayNegativeFeedback(){
    document.getElementById('feedback').style.display = "block";
    let html = 
    ` <h2><i class="fa-regular fa-circle-xmark negative"></i></h2>
    <div class="feedback negative red-border"> Your answer is incorrect. </div>
    `;
    document.getElementById("feedback").innerHTML = html;
    }

/**
 * This function updates the number of correct responses. 
 */
function calculateCorrectTally() {
    let correctScore = parseInt(document.getElementById("correct-score").innerText);
    correctScore++;
    document.getElementById("correct-score").textContent = `${correctScore}`;
}

/**
 * This function updates the number of incorrect responses. 
 */
function calculateIncorrectTally() {
    let incorrectTally = parseInt(document.getElementById("incorrect-tally").innerText);
    incorrectTally++;
    document.getElementById("incorrect-tally").textContent = `${incorrectTally}`;
}

/**
 * This function displays an end of quiz message, summarising the number of questions
 * attempted by the user and how many they got correct and incorrect. 
 */
function displayEndOfQuiz() {
    let endOfQuizMessage = `<h3 class="end-of-quiz-message">End of quiz! </h3>`;
    let correctScore = parseInt(document.getElementById("correct-score").innerText);
    let incorrectTally = parseInt(document.getElementById("incorrect-tally").innerText);
    let numberOfQuestions = correctScore + incorrectTally;
    let endOfQuizScoreMessage = `<h3 class="score-message">Out of ${numberOfQuestions} attempted questions, 
        you answered ${correctScore} correctly.</h3>`;
    document.getElementById("question-container").innerHTML = endOfQuizMessage;
    document.getElementById("feedback-container").innerHTML = endOfQuizScoreMessage;
}

/**
 * This function provides more information about the active question. 
 */
function provideInformation() {
    document.getElementById("information-container").style.display = "block";
    document.getElementById("question-container").style.display = "none";
    document.getElementById('feedback').style.display = "none";
    document.getElementById("info").style.display = "none";
}

/**
 * This function hides the information on question while bringing question and 
 * "tell me more" button on display. 
 */
function closeInformation() {
    document.getElementById("information-container").style.display = "none";
    document.getElementById("question-container").style.display = "block";
    document.getElementById("info").style.display = "block";
}
