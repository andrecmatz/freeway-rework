let yCarros = [40, 96, 150, 210, 270, 318]
let xCarros = [600, 600, 600, 600, 600, 600]
let velocidadeCarros = [3, 2.9, 7, 3, 5, 2.2]
let compCarro = 50
let altCarro = 40
let somDaTrilha
let somDaColisao
let somDoPonto

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], compCarro, altCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function repeatPosicao(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (passouTodaATela(xCarros[i])){
    xCarros[i] = 600
    }
  }
}

function passouTodaATela(xCarro){
  return xCarro < - 50
}
