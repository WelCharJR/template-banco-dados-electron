var lista = []

var formulario = document.getElementById("form-cadastro")

formulario.addEventListener("submit", function(event){
    event.preventDefault()

    var nome = document.getElementById("nome").value
    var email = document.getElementById("email").value

    window.api.cadastrarUsuario(nome, email)

    console.log(nome)
    console.log(email)

})

