//teste

const response = { 
    "quizzes": [ 
        { 
            "id": 101, 
            "subject": "Mathematics", 
            "totalQuestions": 10, 
            "status": "completed", 
            "createdAt": "2024-03-03T12:00:00Z"
        },
        { 
            "id": 101, 
            "subject": "Mathematics", 
            "totalQuestions": 10, 
            "status": "completed", 
            "createdAt": "2024-03-03T12:00:00Z" 
        } 
    ] 
};

document.addEventListener("DOMContentLoaded", () => {
    renderQuizzes(response.quizzes);
});

//teste

const token = localStorage.getItem('token'); // pega o token do logalsotrage

fetch("https://laxy.mariofronza.dev/api/quizzes", {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    },
    body: jsonString
})
.then(response => response.json())
.then(quizzes => {
    // verificar se o retorno foi um erro
    if (quizzes.errors) {
        const errorMessages = data.errors.body.join('\n');
        alert("Erros encontrados:\n" + errorMessages); 
    }
    else {
    // armazenar no storage
    console.log(quizzes)
    alert(quizzes)
    renderQuizzes(quizzes)
    }
})

function renderQuizzes(quizzes) {
    const container = document.getElementById('quizzes-list');
    container.innerHTML = ''; // limpa antes de renderizar

    quizzes.forEach(quiz => {
        const quizElement = document.createElement('div');
        quizElement.classList.add('quiz-container');

        quizElement.innerHTML = `
            <h3>${quiz.subject}</h3>
            <p><strong>Total Questions:</strong> ${quiz.totalQuestions}</p>
            <p><strong>Status:</strong> ${quiz.status}</p>
            <p><strong>Created At</strong> ${new Date(quiz.createdAt).toLocaleString()}</p>
            <button class="doquiz-button" onclick="doquiz()">Quiz</button>
            <br><br>
            <button class="delete-button" onclick="removerContainer(this)">Excluir</button>
        `;

        container.appendChild(quizElement);
    });
}

function removerContainer(botao) {
    botao.parentElement.remove();
}

function doquiz() {
    window.location.href = "./doquiz.html"
}
