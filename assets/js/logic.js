var time = questions.length * 15;
var timerId;
var questionIndex = 0;


var startBtn = document.querySelector('#start-btn');
var questionElement = document.querySelector('#questions');
var timerElement = document.querySelector('#time');
var questionChoices = document.querySelector('#choices');
var choicesDiv = document.querySelector('#choices-div');


// start game
function startGame() {
    // hide start screen
    var startScreen = document.querySelector('#start-screen');
    startScreen.setAttribute('class', 'hide');

    //show questions
    questionElement.removeAttribute('class');
    getCurrentQuestion();
}

function getCurrentQuestion() {
    var currentQuestion = questions[questionIndex];
    console.log(currentQuestion);
    var titleElement = document.querySelector('#question-title');
    titleElement.textContent = currentQuestion.title;
    questionChoices.textContent = '';

    for(var i = 0; i < currentQuestion.choice.length; i++) {
        let choicesButton = document.createElement('button');
        choicesButton.setAttribute('class', 'choices');
        choicesButton.setAttribute('value', currentQuestion.choice[i]);

        choicesButton.textContent = i + 1 + ". " + currentQuestion.choice[i];
        questionElement.appendChild(choices);

    }
}

startBtn.addEventListener('click', startGame)