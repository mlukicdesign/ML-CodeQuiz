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
const startButton = document.getElementById('start-button');
const quizContent = document.getElementById('quiz-content');
const introduction = document.getElementById('intro');
const wpmDisplay = document.getElementById("wpm-display");
const scoreDisplay = document.getElementById("score-display");

let currentQuestionIndex = 0;
let score = 0;




// Timer Function

let timerEl = document.getElementById('timer');
let secondsLeft = 30;

function startTimer() {
    let timerId = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds left";

        if(secondsLeft === 0) {
            clearInterval(timerId);
          /* Sends Message */
        }
    }, 1000)
}

//Initialize Quiz

function startQuiz(){
    console.log('quiz has started')
    quizContent.classList.remove('hide');
    introduction.classList.add('hide');
    currentQuestionIndex = 0;
    score = 0;
    submit.innerHTML = "Next";
    showQuestion();
    startTimer();
}

// Show Question 
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

// The forEach() method calls a function for each element in an array. Calls function on each answer 
// Check if selected answer is correct based on boolean defined in question arrays.

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    submit.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
        secondsLeft += 5;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    submit.style.display = "block";
}


function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    submit.innerHTML = "Play Again?";
    submit.style.display = "block";
    const scores = JSON.parse(localStorage.getItem('highscores')) || [];
    scores.push(wpmDisplay.textContent);
}



function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else{
        showScore();
    }
}


submit.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

//Run Quiz Function


//Start Quiz

startButton.addEventListener('click', startQuiz, startTimer);

// Store Locally