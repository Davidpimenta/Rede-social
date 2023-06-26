var info = document.querySelectorAll('.child-header-dlow')
var nome_usuario = document.querySelector('#nome-usuario')
var info_pesquisa = document.getElementById('info-pesquisar')
var info_home = document.getElementById('info-home')
var info_menu = document.getElementById('info-menu')
var menuon = false
var menu_info_of = false
var pesquisaon = false

info.forEach((parte) => {
    parte.addEventListener('mouseenter', function menssagem(){
        
        
        if(parte.id == 'perfil'){
            var posicao = nome_usuario.getBoundingClientRect().right
            var tela = window.innerWidth
            var nova_posicao = posicao - tela + 5
            if(posicao > tela){
                nome_usuario.style.left = `-${nova_posicao}px`
            }
            nome_usuario.style.display = 'block'
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
                menu_info_of = true
                menuon = true
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

        if(parte.id == 'home'){
            window.scrollTo({
                top: 0,
                behavior: 'auto'
            })
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