const quizform = document.querySelector('.quiz-form');
const submitBtn = document.querySelector('#submit-answers-btn');
const outputEl = document.querySelector('.output');
const correctAnswers = ["90°", "right angled"];

function calculateScore () {
    const formResults = new FormData(quizform);
    let score = 0, i = 0;
    for(let value of formResults.values()){
        if(value === correctAnswers[i]) {
            score = score + 1;
        }
        i = i+1
    }
    outputEl.innerText = "Your score is "+ score;
}

submitBtn.addEventListener("click", calculateScore);