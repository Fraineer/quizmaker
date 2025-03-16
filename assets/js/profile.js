// pega o json user do localstorage
const userData = localStorage.getItem('userData');
// transforma o json do localstorage em um dic
const user = JSON.parse(userData);


// pega o id nomeUsuario e coloca ele como uma const no java script
const elementoNomeUsuario = document.getElementById('nomeUsuario');
//insere o elemento user.username ao texto elementoNomeUsuario
elementoNomeUsuario.textContent = user.username

//mesma coisa para o email
const elementoEmailUsuario = document.getElementById('emailUsuario');
elementoEmailUsuario.textContent = user.email;

function menu(){
    window.location.href = "../../index.html"
}
