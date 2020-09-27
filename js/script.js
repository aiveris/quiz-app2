const quizData = [
    {
        question: '1. Gyvis, kuriam visi ploja?',
        a: 'Šuo',
        b: 'Bebras',
        c: 'Uodas',
        d: 'Žuvis',
        correct: 'c'
    },
    {
        question: '2. Kas su savim namą nešioja?',
        a: 'Musė',
        b: 'Sraigė',
        c: 'Katė',
        d: 'Tarakonas',
        correct: 'b'
    },
    {
        question: '3. Koks gyvūnas gali miegoti 3 metus',
        a: 'Meška',
        b: 'Strutis',
        c: 'Gyvatė',
        d: 'Jautis',
        correct: 'c'
    },
    {
        question: '4. Kokio gyvūno liežuvis ilgesnis už jo kūną?',
        a: 'Karvės',
        b: 'Banginio',
        c: 'Panteros',
        d: 'Chameleono',
        correct: 'd'
    },
    {
        question: '5. Kiek žiedų turi aplankyti viena bitė kad pagamintų 1kg medaus?',
        a: 'Šimtą',
        b: 'Tūkstantį',
        c: 'Milijoną',
        d: 'Du milijonus',
        correct: 'd'
    },
    {
        question: '6. Koks žinduolis negali šokinėti?',
        a: 'Bebras',
        b: 'Arklys',
        c: 'Dramblys',
        d: 'Begemotas',
        correct: 'c'
    },
    {
        question: '7. Kiek žmonių yra kairiarankiai?',
        a: '2 %',
        b: '50%',
        c: '11%',
        d: '30%',
        correct: 'c'
    },
    {
        question: '8. Kokio gyvūno garsas neturi aido?',
        a: 'Katės',
        b: 'Žirafos',
        c: 'Barsuko',
        d: 'Žąsies',
        correct: 'd'
    },
    {
        question: '9. Koks bendras žmogaus kraujagyslių ilgis?',
        a: '100000km',
        b: '10m',
        c: '100km',
        d: '1000km',
        correct: 'a'
    },
    {
        question: '10. Kiek sveria bakterijos žmogaus kūne?',
        a: '100g',
        b: '300g',
        c: '2kg',
        d: '4kg',
        correct: 'c'
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Teisingai atsakei ${score}/${quizData.length} klausimus.</h2>

                <button onclick="location.reload()">Iš naujo</button>
            `;
        }
    }
});