//TELA-LOGIN

var submit = document.getElementById("logar")
var text = document.getElementById('texto')
var nome = document.getElementById('name')
var senha = document.getElementById('senha')
var form = document.getElementById('form')
var fechardiv = document.getElementById('fechar')
var erroverif = false
var Dlow_Home = false

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
            var divesquerda = document.getElementById('img')
            var divmeio = document.getElementById('divisor')
            var divdireita = document.getElementById('conteiner-login-div')
            var body = document.querySelector('body')
            body.style.display = 'block'
            Dlow_Home = true
            var tela_de_login = document.getElementById('login-tela')
            tela_de_login.style.display = 'none'
            var tela_dlow = document.getElementById("Tela-Dlow")
            tela_dlow.style.display = 'block'
            
        }
    } 
}
    
//TELA-LOGIN
//Dlow-home
var info_nome_usuario = document.getElementById('nome-usuario')
var info = document.querySelectorAll('.child-header-dlow')
var nome_usuario = document.getElementById('nome-usuario')
var info_pesquisa = document.getElementById('info-pesquisar')
var info_home = document.getElementById('info-home')
var info_menu = document.getElementById('info-menu')
var menuon = false
var menu_info_of = false
var posicao = nome_usuario.getBoundingClientRect().right
var pesquisaon = false
info.forEach((parte) => {
    parte.addEventListener('mouseenter', function menssagem(){
        
        if(parte.id == 'perfil'){
            var partesnome = nome.value.trim().split(" ")
            var nomeincial = partesnome[0]
            info_nome_usuario.innerText = nomeincial
            nome_usuario.style.display = 'block'
            posicao = nome_usuario.getBoundingClientRect().right
            var tela = window.innerWidth
            var nova_posicao = posicao - tela + 5
            if(posicao > tela){
                nome_usuario.style.left = `-${nova_posicao}px` 
            }
            
            
        }

        if(parte.id == 'pesquisa'){
            info_pesquisa.style.display = 'block'
        }

        if(parte.id == 'home'){
            info_home.style.display = 'block'
        }

        if(parte.id == 'menu'){
            if(menu_info_of == false){
                info_menu.style.display = 'block'
            }
        } 
    })
    
    parte.addEventListener('mouseout', function menssagemout(){
        nome_usuario.style.display = 'none'
        info_pesquisa.style.display = 'none'
        info_home.style.display = 'none'
        info_menu.style.display = 'none'
    })

    parte.addEventListener('click', function funcionalidades(){

        if(parte.id == 'menu'){
            if(menuon == false){
                menuon = true
                menu_info_of = true
                var menu = document.getElementById('menuon')
                menu.style.display = 'flex'
                
            } else {
                menu_info_of = false
                menuon = false
                var menu = document.getElementById('menuon')
                menu.style.display = 'none'
                info_menu.style.top = '108%'
                info_menu.style.left = '-15%'
                   
            }
        }

        if(parte.id == 'pesquisa'){
            if(pesquisaon == false){
                pesquisaon = true
                var barra_pesquisa = document.getElementById    ('barrapesquisa')
                barra_pesquisa.style.display = 'block'
            } else {
                var barra_pesquisa = document.getElementById    ('barrapesquisa')
                pesquisaon = false
                barra_pesquisa.style.display = 'none'
            }
        }

        if(parte.id == 'home'){
            window.scrollTo({
                top: 0,
                behavior: 'auto'
            })
        }
    })
})


var op = document.querySelectorAll('.opcoes')
var info_notif = document.getElementById('info-notificações')
var info_grupos = document.getElementById('info-grupos')
var info_menssagens = document.getElementById('info-menssagens')
var info_postar = document.getElementById('info-publicar')

op.forEach((parte) => {
    parte.addEventListener('mouseenter', function menssagementer(){
        if(parte.id == "notificacoes"){
            info_notif.style.display = 'block'
        }

        if(parte.id == "grupos"){
            info_grupos.style.display = 'block'
        }

        if(parte.id == "menssagens"){
            info_menssagens.style.display = 'block'
        }

        if(parte.id == "postar"){
            info_postar.style.display = 'block'
        }
    })

    parte.addEventListener('mouseout',  function menssagemout(){
        info_notif.style.display = 'none'
        info_menssagens.style.display = 'none'
        info_grupos.style.display = 'none'
        info_postar.style.display = 'none'
    })
})
//Dlow-home
//Dlow-pagina
//Carrocel

let count = 1
document.getElementById('radio1').checked = true

setInterval(function(){
  nextImage()
}, 3000)

setInterval(function(){
  sites()
}, 1000)
function nextImage(){
  count++
  if(count>5){
    count = 1
  }
  document.getElementById('radio'+count).checked = true
}

function sites(){
  if(document.getElementById('radio1').checked == true){
    var titulo = document.getElementById('Nome-do-site')
    titulo.innerText = 'Cordel'
    titulo.style.color = 'black'
    var botão = document.querySelectorAll('.manual-btn')
    botão.forEach((e)=>{
      e.style.borderColor = 'black'
    })

    var link_site = document.getElementById('link_site')
    link_site.href = 'https://mixtany.github.io/Cordel/'
    var github = document.getElementById('github')
    github.href = 'https://github.com/Mixtany/Cordel'
  }

  if(document.getElementById('radio2').checked == true){
    var titulo = document.getElementById('Nome-do-site')
    titulo.innerText = 'Iphone'
    titulo.style.color = 'white'
    var botão = document.querySelectorAll('.manual-btn')
    botão.forEach((e)=>{
      e.style.borderColor = 'white'
    })

    var link_site = document.getElementById('link_site')
    link_site.href = 'https://mixtany.github.io/Quarto-site/'
    var github = document.getElementById('github')
    github.href = 'https://github.com/Mixtany/Quarto-site'
  }

  if(document.getElementById('radio3').checked == true){
    var titulo = document.getElementById('Nome-do-site')
    titulo.innerText = 'Jogo da Velha'
    titulo.style.color = 'white'

    var link_site = document.getElementById('link_site')
    link_site.href = 'https://mixtany.github.io/Decimo-primeiro-site/'
    var github = document.getElementById('github')
    github.href = 'https://github.com/Mixtany/Decimo-primeiro-site'
  }

  if(document.getElementById('radio4').checked == true){
    var titulo = document.getElementById('Nome-do-site')
    titulo.innerText = 'Lista de Afazeres'
    titulo.style.color = 'black'

    var link_site = document.getElementById('link_site')
    link_site.href = 'https://mixtany.github.io/Decimo-segundo-site/'
    var github = document.getElementById('github')
    github.href = 'https://github.com/Mixtany/Decimo-segundo-site'
  }

  if(document.getElementById('radio5').checked == true){
    var titulo = document.getElementById('Nome-do-site')
    titulo.innerText = 'Site de Viagens'
    titulo.style.color = 'black'

    var link_site = document.getElementById('link_site')
    link_site.href = 'https://mixtany.github.io/Terceiro-site/'
    var github = document.getElementById('github')
    github.href = 'https://github.com/Mixtany/Terceiro-site'
  }
}
//Carrocel


