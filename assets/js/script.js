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