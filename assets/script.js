//Questions Arrays

const questions = [
    {
        question: "Which is a frontend language?",
        answers: [
            { text: "C#", correct: false},
            { text: "css", correct: true},
            { text: "node.js", correct: false},
            { text: "My SQl", correct: false},
        ]
    },
    {
        question: "Question 2",
        answers: [
            { text: "node.js", correct: false},
            { text: "css", correct: true},
            { text: "node.js", correct: false},
            { text: "node.js", correct: false},
        ]
    },
    {
        question: "Question 3",
        answers: [
            { text: "node.js", correct: false},
            { text: "css", correct: true},
            { text: "node.js", correct: false},
            { text: "node.js", correct: false},
        ]  
    }
];

// Define Quiz Element Variables

const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answer-buttons')
const nextElement = document.getElementById('submit');

let currentQuestionIndex = 0;
let score = 0;


//Initialize Quiz

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    submit.innerHTML = "Next";
    showQuestion();
}

// Show Question 
function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

// The forEach() method calls a function for each element in an array. Calls function on each answer 

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}

//Run Quiz Function

startQuiz();