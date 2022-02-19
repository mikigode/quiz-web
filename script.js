const quizData = [
    {
        question:"Maputo is the capital city of which country?",
        a:"Mozambique",
        b:"Madagsca",
        c:"Botswan",
        d:"none",
        correct:"a",
    },
    {
        question:"Around 70% of this country’s land is covered by rainforest ",
        a:"Malawi",
        b:"Republic of the Congo",
        c:"Kenya",
        d:"none",
        correct:"b",
    },
    {
        question:"Sadza is the national dish of which country?",
        a:"Zimbabwe",
        b:"Morocco",
        c:"Malawi",
        d:"Ethiopia",
        correct:"a"
    },
    {
        question:"HTML stands for?",
        a:"Human time managemet language",
        b:"Hypertext markup language",
        c:"Hypertext mashup language",
        d:"none",
        correct:"b",
    },
    {
        question:"which language run in website browser?",
        a:"HTMi",
        b:"java",
        c:"c++",
        d:"javaScript",
        correct:"d",
    },
    {
        question:"The Leopard is the national animal of?",
        a:"somalia",
        b:"kenya",
        c:"chad",
        d:"sudan",
        correct:"a"
    },
    {
        question:"Which country has the most pyramids?",
        a:"Egypt",
        b:"sudan",
        c:"Ehiopia",
        d:"none",
        correct:"b",
    },

];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected(){
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()   
    if(answer) {
        if(answer === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else{
            quiz.innerHTML = `
                <h2> you answer ${score}/${quizData.length}questions</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})
