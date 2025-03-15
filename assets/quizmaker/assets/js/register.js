function register() {
    // pegar os dados
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;

    // criar o json
    var data = {
        user: {
            username: name,
            email: email,
            password: password1
        }
    };
    const jsonString = JSON.stringify(data, null, 4);
    console.log(jsonString);
    
    // enviar os dados para api
    fetch("https://laxy.mariofronza.dev/api/users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonString
    })
    .then(response => response.json())
    .then(data => {
        // verificar se o retorno foi um erro
        if (data.errors) {
            const errorMessages = data.errors.body.join('\n');
            alert("Erros encontrados:\n" + errorMessages); 
        }
        else {
        // armazenar no storage
        console.log(data)
        localStorage.setItem('userData', JSON.stringify(data.user));
        localStorage.setItem('token', data.user.token);
        // envia para a quizlist
        window.location.href = "../../index.html"
        }
    });
}