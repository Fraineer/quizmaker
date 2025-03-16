let contador = 0;

function criarContainer() {
    // Cria um novo elemento div para o container
    const novoContainer = document.createElement("div");
    novoContainer.classList.add("container");
    contador++;

    // Adiciona conteúdo ao container
    novoContainer.innerHTML = `
        <a>Novo container adicionado dinamicamente! ${contador}</a>
        <button class="remove-btn" onclick="removerContainer(this)">Remover</button>
    `;
    
    // Adiciona o novo container abaixo do último container existente
    const telaQuizList = document.querySelector(".tela-quizlist");
    telaQuizList.appendChild(novoContainer);
}

function removerContainer(botao) {
    botao.parentElement.remove();
}

