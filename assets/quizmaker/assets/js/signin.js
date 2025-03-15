function signin() {
    // capturar os dados
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // criar um json sign in
    var data = {
        user: {
            email: email,
            password: password
        }
    };
    const jsonString = JSON.stringify(data, null, 4);
    console.log(jsonString);
    
    //enviar sign in para a api
    fetch("https://laxy.mariofronza.dev/api/users/login", {
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
        alert("login successfully")
        window.location.href = "../../index.html"
        }
    });

}