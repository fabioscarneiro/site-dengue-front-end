let altura = 0
let largura = 0
let vidas = 1
let tempo = 20
let criaMosquitoTempo = 1500
let ponto = 0
let audio = new Audio('som/mosquito.mp3')
let nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel != '')
{
    if(nivel == 'Facil'){
        criaMosquitoTempo = 1500
    }
    else if(nivel === 'Medio'){
        criaMosquitoTempo = 1000
    } else {criaMosquitoTempo = 750}
}
else
{
    //Caso alguém venha direto para essa página sem passar pela inicial do jogo
    window.location.href = 'jogo_ini.html'
}


function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
}
ajustaTamanhoPalcoJogo()




let cronometro = setInterval(function(){

    tempo--
    if(tempo<0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'win.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo
        
    }
   
}, 1000)

function posicaoRandomica(){
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if(vidas>3){
            window.location.href = 'fim_de_jogo.html'
        }
        else{
            document.getElementById("v" + vidas).src = "imagens/coracao_vazio.png"
            vidas++
        }
    }
    let posicaoX = Math.floor(Math.random() * largura) - 90
    let posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY <0 ? 0: posicaoY
    
    let mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito_jogo.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    audio.play()
    mosquito.onclick = function(){
        audio.pause();
        audio.currentTime = 0;
        this.remove()
        ponto++
    }
    
    document.body.appendChild(mosquito)

    
}

function tamanhoAleatorio(){
    let classe = Math.floor(Math.random() * 3 + 1)

   return 'mosquito' + classe
}

function ladoAleatorio(){
    let classe = Math.floor(Math.random() * 2)

    return 'lado' + classe
}

