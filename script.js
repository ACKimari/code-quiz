var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var startBtn = document.getElementById('start');
var submitBtn = document.getElementById('submit');
var answersEl = document.getElementById('answers');

var question = document.querySelector('#question');
var choices = Array.from(document.querySelectorAll('.choice-text'));
var scoreText = document.querySelector('#score');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let timer = 0
let availableQuestions = []


let questions = [{
    q: "A function that returns a value is a?",
    choice1: "JavaScript Function",
    choice2: "JavaScript Event",
    choice3: "JavaScript String",
    choice4: "JavaScript Number",
    answer: a,
},
{
    q: "The increment (++) operator is an example of?",
    choice1: "JavaScript Number",
    choice2: "JavaScript Assignment",
    choice3: "JavaScript Arithmetic",
    choice4: "All the above",
    answer: c,
},
{
    q: "Where do we insert JavaScript?",
    choice1: "in <head>",
    choice2: "in <body>",
    choice3: "in an external file",
    choice4: "All the above",
    answer: d,
},
{
    q: "JavaScript comments is an example of?",
    choice1: "JavaScript Statements",
    choice2: "JavaScript Syntax",
    choice3: "JavaScript Variable",
    choice4: "None of the above",
    answer: b,
},
{
    q: "Math.floor(x) is an example of?",
    choice1: "JavaScript Maths",
    choice2: "JavaScript Random",
    choice3: "JavaScript Number Methods",
    choice4: "All the above",
    answer: a,
}];

var SCORE_POINTS =10
var MAX_QUESTIONS =5

startGame = () => {
    score = 0
    timer = 75
    availableQuestions =[]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionsCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }
    // keep track of what questione you're on
    var questionsIndex = Math.floor(Math.random()* availableQuestions.length)currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        var letter = choice.dataset['letter']
        choice.innerText = currentQuestion['choice' + letter]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

// function buildQuiz() {
//     var quizEl = document.getElementById('quiz');
    
//     let quizStr = ''

//     questionsArr.forEach(function(question){
//         // let answerStr = ''
//         // question.ans1.forEach(function(answers){
//         //     answerStr += 'ans1' 
//         // });

//         console.log (question.q);
//         console.log (question.ans1);
//         console.log (question.ans2);
//         console.log (question.ans3);
//         console.log (question.ans4);
//         console.log (question.correctAns);
//         quizStr += 'question.q', 'question.ans1','question.ans2', 'question.ans3', 'question.ans4', 'question.correctAns'
//     })

//     // quizEl.innerHTML = quizStr
// }
// buildQuiz();

// function showResults() {
    
// }

// submitBtn.addEventListener('click', showResults);