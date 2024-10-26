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
        feedback: "this is the feedback for question 1", 
        chapter: "Chapter 1",
    },
    {
        question: "Which regresion model's coefficiens show elasticity without further transformation?",
        answers: [
            { text: "log-lin", correct: false },
            { text: "lin-log", correct: false },
            { text: "lin-lin", correct: false },
            { text: "Log-log", correct: true }
        ],
        feedback: "this is the feedback for question 2",
        chapter: "Chapter 3",
    },
    {
        question: "Which estimation method relies on minimisation of error sum squared?",
        answers: [
            { text: "Ordinary Least Squares", correct: true },
            { text: "Akaike Information Criterion", correct: false },
            { text: "Maximuum Likelihood Estimation", correct: false },
            { text: "Generalised Method of Moments", correct: false }
        ],
        feedback: "this is the feedback for question 3",
        chapter: "Chapter 5",
    },
    {
        question: "Which is not a cause of endogeneity?",
        answers: [
            { text: "Existence of a confounder", correct: false },
            { text: "Serial correlation", correct: true },
            { text: "Reverse causality", correct: false },
            { text: "Simultaneity", correct: false }
        ],
        feedback: "this is the feedback for question 4",
        chapter: "Chapter 5",
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
                deactivateSubmit();
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
            } else if (button.getAttribute("id") === "btn-close") {
                closeInformation();
            } else {
                provideInformation();
            }
        }); // close of button event listener
    } // close of loop across buttons
}) // close of load page listener

// First question is displayed once the page loads
displayQuestion();


// // below gets the options for question and add event listeners
// for (let i=0; i<4; i++) {
//     let option = document.getElementsByClassName('option-container')[i];
//     // I used an example from the following page to insert a pointer cursor
//     // https://www.w3docs.com/snippets/css/how-to-change-cursor-on-hover-in-css.html
//     option.style.cursor = "pointer";
//     // option.style.border="solid 1px";
//     option.addEventListener("click", activateOption);
// }

// function activateOption() {
//     this.style.border = "2px solid red"
// }

function displayQuestion() {
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
            // this.style.color = "blue"
        })
        };
    document.getElementById("submit").style.display = "inline";
    }

function displayInformation(index) {
    // let questionIndex = parseInt(document.getElementById("question-number").innerText);
    document.getElementById("modal-information").textContent = questions[index].feedback;
}

function displayBookChapter(index) {
    // let questionIndex = parseInt(document.getElementById("question-number").innerText);
    document.getElementById("book-chapter").textContent = questions[index].chapter;
}

function deactivateSubmit() {
    document.getElementById("submit").style.display = "none";
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
            //line below clears selection after submit
            document.getElementById(`option-${selectedOptionNumber}`).checked = false;
            // alert(`You selected option ${selectedOptionNumber}`);        
            if (questions[questionIndex].answers[selectedOptionNumber].correct === true) {
                calculateCorrectTally();
                displayPositiveFeedback();
            } else {
                calculateIncorrectTally();
                displayNegativeFeedback();
            }
            break;
        } else {
            optionNumber++
        }
    } 
}

function displayPositiveFeedback(){
let html = 
` <h2> <i class="fa-regular fa-circle-check positive"></i> </h2>
<div class="feedback positive green-border"> Well done! Your answer is correct. </div>
`
document.getElementById("feedback").innerHTML = html;
}

function displayNegativeFeedback(){
    let html = 
    ` <h2><i class="fa-regular fa-circle-xmark negative"></i></h2>
    <div class="feedback negative red-border"> Your answer is incorrect. </div>
    `
    document.getElementById("feedback").innerHTML = html;
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

function provideInformation() {
    document.getElementById("information-container").style.display = "block";
    document.getElementById("question-container").style.display = "none";
}

function closeInformation() {
    document.getElementById("information-container").style.display = "none";
    document.getElementById("question-container").style.display = "block";
}


