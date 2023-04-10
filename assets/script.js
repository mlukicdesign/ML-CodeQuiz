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
    },
    {
        question: "Question 3",
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
const submit = document.getElementById('submit');
const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answer-buttons')
const nextElement = document.getElementById('submit');
const startButton = document.getElementById('start-button');
const quizContent = document.getElementById('quiz-content');
const introduction = document.getElementById('intro');



let currentQuestionIndex = 0;
let score = 0;




/* Timer Function

let secondsLeft = 60;

 function startTimer() {
    let timerEl = document.getElementById('timer');
    let timerId = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds left";
    }, 1000)
} */

//Initialize Quiz

function startQuiz(){
    console.log('quiz has started')
    quizContent.classList.remove('hide');
    introduction.classList.add('hide');
    currentQuestionIndex = 0;
    score = 0;
    submit.innerHTML = "Next";
    timer.classList.remove("hide");
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


/* function selectAnswer:
    get the selected button
    check if the answer is correct
    if answer is correct:
    add "correct" class to the selected button
    increase score by 1
    add 5 seconds to timer
    else:
    add "incorrect" class to the selected button
    subtract 5 seconds from timer
    disable all answer buttons and show correct answer
    show the next button */



function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
        // secondsLeft += 5;
    }else{
        selectedBtn.classList.add("incorrect");
        // secondsLeft -= 5;
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    submit.style.display = "block";
}

/* function showScore:
    reset the quiz state
    display the final score
    show the "Play Again?" button
    get the saved scores from local storage or initialize an empty array
    create an object with the current score and remaining time
    add the new score object to the scores array
    save the updated scores array to local storage 
*/

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    submit.innerHTML = "Play Again?";
    submit.style.display = "block";
    timer.classList.add("hide");
    // localStorage.setItem('score', score);
    localStorage.setItem('score', JSON.stringify(score));
    // console.log(score);
}



function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else{
        showScore();
    }
}


submit.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

//Run Quiz Function


//Start Quiz

startButton.addEventListener('click', startQuiz);

// Store Locally



console.log('score');