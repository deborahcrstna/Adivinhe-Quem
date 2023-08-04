// Array de perguntas e respostas
const questionsAndAnswers = [
    {
        question: "O que é, o que é? Fica o dia inteiro no mesmo lugar, mas nunca é preguiçoso?",
        answer: "sol"
    },
    {
        question: "O que é, o que é? Tem asas, mas não voa; tem dentes, mas não morde?",
        answer: "avião"
    },
    {
        question: "O que é, o que é? Quanto mais se tira, mais cresce?",
        answer: "buraco"
    },
    // Adicione mais perguntas e respostas aqui
];

// Elementos HTML
const questionElement = document.getElementById("question");
const answerInput = document.getElementById("answer");
const checkBtn = document.getElementById("checkBtn");
const message = document.getElementById("message");

// Índice da pergunta atual
let currentQuestionIndex = 0;

// Função para exibir a próxima pergunta
function showNextQuestion() {
    if (currentQuestionIndex < questionsAndAnswers.length) {
        const question = questionsAndAnswers[currentQuestionIndex].question;
        questionElement.textContent = question;
        answerInput.value = "";
        message.textContent = "";
    } else {
        questionElement.textContent = "Parabéns! Você concluiu o jogo.";
        answerInput.style.display = "none";
        checkBtn.disabled = true;
    }
}

// Função para verificar a resposta
function checkAnswer() {
    const userAnswer = answerInput.value.toLowerCase();
    const correctAnswer = questionsAndAnswers[currentQuestionIndex].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
        message.textContent = "Você acertou! Parabéns!";
        currentQuestionIndex++;
        setTimeout(showNextQuestion, 1500); // Tempo para mostrar a próxima pergunta
    } else {
        message.textContent = "Ops! Tente novamente.";
    }
}

// Event listener para o botão de verificação
checkBtn.addEventListener("click", checkAnswer);

// Exibir a primeira pergunta quando a página carregar
showNextQuestion();
