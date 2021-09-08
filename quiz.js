var answersEl = document.getElementById('answers');
var question = document.getElementById('question');
var choices = Array.from(document.querySelectorAll('.choice-text'));
var scoreText = document.getElementById('score');
const questionCounterText = document.getElementById("questionCounter");
// const startQuiz = document.getElementById("start");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = []
// let timer = 0;


let questions = [{
    question: "A function that returns a value is a?",
    choice1: "JavaScript Function",
    choice2: "JavaScript Event",
    choice3: "JavaScript String",
    choice4: "JavaScript Number",
    answer: 1,
    // answerNum: 1
},
{
    question: "The increment (++) operator is an example of?",
    choice1: "JavaScript Number",
    choice2: "JavaScript Assignment",
    choice3: "JavaScript Arithmetic",
    choice4: "All the above",
    answer: 3,
    // answerNum: 3
},
{
    question: "Where do we insert JavaScript?",
    choice1: "in <head>",
    choice2: "in <body>",
    choice3: "in an external file",
    choice4: "All the above",
    answer: 4,
    // answerNum: 4
},
{
    question: "JavaScript comments is an example of?",
    choice1: "JavaScript Statements",
    choice2: "JavaScript Syntax",
    choice3: "JavaScript Variable",
    choice4: "None of the above",
    answer: 2,
    // answerNum: 2
},
{
    question: "Math.floor(x) is an example of?",
    choice1: "JavaScript Maths",
    choice2: "JavaScript Random",
    choice3: "JavaScript Number Methods",
    choice4: "All the above",
    answer: 1,
    // answerNum: 1
}];

var SCORE_POINTS = 10;
var MAX_QUESTIONS = 5;


startQuiz = () => {
    questionCounter = 0;
    score = 0;
    // timer = 0;
    availableQuesions = [...questions];
    getNewQuestion();
    // availableQuestions = [...questions]
    // getNewQuestion()
    // var __timer = setInterval(function () {
    //     timeLeft.innerHTML = timer
    //     if (timer < 1) {
    //         clearInterval(__timer);
    //     }
    //     timer = timer - 1
    // }, 1000);
};


getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('end.html');
    }
    questionCounter++;
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;

    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', (event) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = event.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply =
            selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

//score
incrementScore = (num) => {
    score += num;
    scoreText.innerText = score;
};

startQuiz();