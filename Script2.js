var testa = document.getElementById('teste')
var info = document.querySelectorAll('.child-header-dlow')
var nome_usuario = document.getElementById('nome-usuario')
var info_pesquisa = document.getElementById('info-pesquisar')
var info_home = document.getElementById('info-home')
var info_menu = document.getElementById('info-menu')

info.forEach((parte) => {
    parte.addEventListener('mouseenter', function menssagem(){
        
        
        if(parte.id == 'perfil'){
            nome_usuario.style.display = "block"
        }

        if(parte.id == 'pesquisa'){
            info_pesquisa.style.display = 'block'
        }

        if(parte.id == 'home'){
            info_home.style.display = 'block'
        }

        if(parte.id == 'menu'){
            info_menu.style.display = 'block'

        }

    })
    
    parte.addEventListener('mouseout', function menssagemout(){
        nome_usuario.style.display = 'none'
        info_pesquisa.style.display = 'none'
        info_home.style.display = 'none'
        info_menu.style.display = 'none'
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