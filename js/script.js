var lista = []

var formulario = document.getElementById("form-cadastro")

formulario.addEventListener("submit", function(event){
    event.preventDefault()

    var nome = document.getElementById("nome").value
    var email = document.getElementById("email").value


    var usuario = {
        nome: nome,
        email: email
    }

    lista.push(usuario)

    console.log(usuario)

})

