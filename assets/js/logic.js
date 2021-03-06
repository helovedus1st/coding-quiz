var time = questions.length * 15;
var timerId;
var questionIndex = 0;
var score = 0;


var startBtn = document.querySelector('#start-btn');
var questionElement = document.querySelector('#questions');
var timerElement = document.querySelector('#time');
var questionChoices = document.querySelector('#choices');


// start game
function startGame() {
    // hide start screen
    var startScreen = document.querySelector('#start-screen');
    startScreen.setAttribute('class', 'hide');

    //show questions
    questionElement.removeAttribute('class');
    getCurrentQuestion();
    countdown();
}

function checkAnswer(event) {
    var answer = event.target.value
    var correctAnswer = questions[questionIndex].answer;
    console.log(answer)
    if (questionIndex + 1 === questions.length) {
        console.log(correctAnswer);
        console.log('game over');
        window.location.replace("highscores.html");

    }
    if (answer === correctAnswer) {
        score++;
        console.log(score)
        questionIndex++;
        console.log(questionIndex)
        getCurrentQuestion();
    } 
    questionIndex++;
    time -= 10;
    console.log(questionIndex)
    getCurrentQuestion();
}

function getCurrentQuestion() {
    var currentQuestion = questions[questionIndex];
    console.log(currentQuestion);
    var titleElement = document.querySelector('#question-title');
    titleElement.textContent = currentQuestion.title;
    questionChoices.textContent = '';

    // will identify the number of questions and then place each question in the desired location
    // identify number of questions and loop until queestion has been placed
    for(var i = 0; i < currentQuestion.choice.length; i++) {
        // create button
        let choicesButton = document.createElement('button');
        // assign CSS styling to buttons
        choicesButton.setAttribute('class', 'buttons');
        choicesButton.addEventListener('click', checkAnswer)
        // place the question
        choicesButton.setAttribute('value', currentQuestion.choice[i]);
        // correct the numbering so the questions start with a 1
        choicesButton.textContent = i + 1 + ". " + currentQuestion.choice[i];
        // append the choices div and place the questions button there
        questionChoices.appendChild(choicesButton);

    }
}

function countdown(){
    var timeLeft = setInterval(() => {
        if (time <= 0) {
            alert('time up');
            window.location.replace("highscores.html")
            clearInterval(timeLeft);
        }
        time--
        timerElement.textContent = time + " seconds remaining";        
    }, 1000);


}


startBtn.addEventListener('click', startGame)