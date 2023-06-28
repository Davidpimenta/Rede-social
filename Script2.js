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


//Carrocell
let count = 1
document.getElementById('radio1').checked = true

setInterval(function(){
  nextImage()
}, 3000)

setInterval(function(){
  sites()
}, 5)
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
//Publicacao

//Publicacao
var coracao = document.querySelectorAll('.coracao')
var msgcoracao = document.querySelector('.coracaomsg')
var listac = []
coracao.forEach((e, indice) => {
    e.addEventListener('mouseenter', function coracaohover(){
        if(listac.indexOf(indice) == -1){
            e.style.backgroundImage = 'url("tela-login/coração-com-like-hover.svg")'
        }
        var divmsg = document.createElement('div')
        divmsg.id = 'coracao_info'
        var msg = document.createElement('p')
        msg.textContent = 'Gostar'
        divmsg.appendChild(msg)
        e.appendChild(divmsg)
    })

    e.addEventListener('mouseout', function coracaoout(){
        if(listac.indexOf(indice) == -1){
            e.style.backgroundImage = 'url("tela-login/coração-sem-like.svg")'
        }
        var divmsg = document.getElementById('coracao_info')
        divmsg.remove()
    })

    e.addEventListener('click', function coracaoon(){
        if(listac.indexOf(indice) == -1){
            listac.push(indice)
            e.style.backgroundImage = 'url("tela-login/coração-com-like.svg")'
        } else {
            listac.splice(listac.indexOf(indice),1)
            e.style.backgroundImage = 'url("tela-login/coração-sem-like.svg")'
        }
    })
})

//Amplicaçãodaimagem

var imgampliada = document.querySelectorAll('.imgpub')
imgampliada.forEach((e) => {
    e.addEventListener('click', function ampliar(){
        var divampliada = document.createElement('div')
        divampliada.className = 'divampliada'
        var body = document.querySelector('body')
        body.appendChild(divampliada)
        divampliada.style.backgroundImage = `url(${e.src})` 
        var ampliada = document.querySelectorAll('.divampliada')
        ampliada.forEach((e) => {
            e.addEventListener('click', function tirarampliado(){
            e.remove()
        })
        })
    })
})

//Amplicaçãodaimagem
//Compartilhar

var compartilhar = document.querySelectorAll('.compartilhar')
compartilhar.forEach((e) => {
    e.addEventListener('mouseenter', function compartilharenter(){
        var divcomp = document.createElement('div')
        divcomp.id = 'comp_info'
        var msgcomp = document.createElement('p')
        msgcomp.textContent = 'Compartilhar'
        divcomp.appendChild(msgcomp)
        e.appendChild(divcomp)
    })

    e.addEventListener('mouseout', function compout(){
        var divcomp = document.getElementById('comp_info')
        divcomp.remove()
    })
})
//Compartilhar

//Descricao

var titulo_pessoal = document.querySelectorAll('.nomeP')
var conteiner_titulo = document.querySelectorAll('.nomeperfil')
var titulolist = []
titulo_pessoal.forEach((e, indice) => {
    e.addEventListener('mouseenter', function tituloenter(){
        if(titulolist.indexOf(indice) == -1){
            titulolist.push(indice)
            var titulo_perfil = document.createElement('div')
            titulo_perfil.className = 'descricao'
            var titulo_msg = document.createElement('p')
            
            if(indice == 0){
                titulo_msg.textContent = 'Artista'
            }

            if(indice == 1){
                titulo_msg.textContent = 'Positivista'
            }

            if(indice == 2){
                titulo_msg.textContent = 'Desempregado'
            }
            if(indice == 3){
                titulo_msg.textContent = 'Inimigo do namoro'
            }
            titulo_perfil.appendChild(titulo_msg)
            conteiner_titulo[indice].appendChild(titulo_perfil)
        }
    })

    e.addEventListener('mouseout', function tituloout(){
        var titulo_perfil = document.querySelector('.descricao')
        titulo_perfil.remove()
        titulolist.splice(titulolist.indexOf(indice),1)
    })
})

//Descricao

//Publicacao