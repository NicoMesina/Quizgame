const quizData = [
    {
        question: "What is the human body temperature",
        a: "91.1 degrees",
        b: "98.6 degrees",
        c: "120.1 degrees",
        d: "78.5 degrees",
        correct: "b",
    },
    {
        question: "The world’s largest desert, the Sahara in Africa, is about the size of which place?",
        a: "Italy",
        b: "the amazon rain forest",
        c: "puerto rico",
        d: "australia",
        correct: "d",
    },
    {
        question: "In the 1950s, which of the following became popular to stuff as many people as possible into?",
        a: "a movie theater",
        b: "a mail truck",
        c: "a phone booth",
        d: "a closet",
        correct: "b",
    },
    {
        question: "How do elephants greet each other?",
        a: "entwining their trunks",
        b: "swatting each other with their tails",
        c: "running in circles",
        d: "butting heads",
        correct: "a",
    },

    {
        question: "What ice-cream flavor has been the most popular in the United States for more than 200 years?",
        a: "vanilla",
        b: "chocolate",
        c: "strawberry",
        d: "cherry garcia",
        correct: "a",
    },

    {
        question: "What is Mars’s nickname?",
        a: "the red planet",
        b: "the dusty planet",
        c: "the hot planet",
        d: "the dry planet",
        correct: "a",
    },

    {
        question: "About how long would it take to travel to Mars?",
        a: "a month",
        b: "eight months",
        c: "a week",
        d: "two years",
        correct: "b",
    },

    {
        question: "About how many hairs do most people lose every day?",
        a: "10 strands",
        b: "50 strands",
        c: "75 strands",
        d: "35 strands",
        correct: "c",
    },

    {
        question: "Your heart is the size of:",
        a: "a marble",
        b: "a walnut",
        c: "a fist",
        d: "a watermelon",
        correct: "c",
    },

    {
        question: "Professional soccer players run about how far during every game?",
        a: "6 miles",
        b: "15 miles",
        c: "500 yards",
        d: "10 miles",
        correct: "a",
    },



   

];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

let currentAnswer;

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

    a_text.previousElementSibling.value = currentQuizData.a 
    b_text.previousElementSibling.value = currentQuizData.b 
    c_text.previousElementSibling.value = currentQuizData.c 
    d_text.previousElementSibling.value = currentQuizData.d

    currentAnswer = currentQuizData["correct"]

}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

document.querySelector("#form").addEventListener('submit' , (event) => { 
    event.preventDefault();

    const userAnswer = event.target.answer.value;

    if(userAnswer === quizData[currentQuiz][currentAnswer]) {
           score++
           document.querySelector("#js-score").innerText = score;
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Try again</button>
           `
       }
    }
)

/* Init variables */

let scorecontainer = 0;
let scoreContainer, buttonContainer;

/* Function that updates the score variable and the HTML element value */
const updateScore = newScore => {
  if(isNaN(newScore)) return;
  score = newScore;
  scoreContainer.innerHTML = score;
}

/* Function that increments the score (part of a game mechanic) */

const incrementScore = () => {
  updateScore(score + 1);
}

/* Function that submits the score */

const submitScore = () => alert("Submitting Score: "+score);

/* Function that ends the game */

const gameOver = () => submitScore();


/* Init function, selects elements and sets up the game */

const init = () => {
  scoreContainer = document.getElementById("js-score");
//   newGame();
}

/* Calls the init function */

init();

