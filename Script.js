//TELA-LOGIN
var htm = document.getElementById('pagina')
var nomeUNI = ""
var cont = 1
if(htm.value == "L"){
    var submit = document.getElementById("logar")
    var text = document.getElementById('texto')
    var nome = document.getElementById('name')
    var senha = document.getElementById('senha')
    var form = document.getElementById('form')
    var fechardiv = document.getElementById('fechar')
    var erroverif = false
    submit.addEventListener("click", verificacao)
    function verificacao(){
        if(erroverif == false){
            if(nome.value == "" || senha.value == ""){
                var erro = document.getElementById('erro')
                erro.style.display = 'block'
                erroverif = true
                fechardiv.addEventListener("click", function fechar(){
                    erroverif = false
                    nome.value = ""
                    senha.value = ""
                    erro.style.display = 'none'
                })
        } else {
            nomeUNI = nome.value
            form.action = 'Dlow-Home.html'
        }
        }
    }
    text.innerText = htm.value
}
//TELA-LOGIN




