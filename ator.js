//var ator

let xAtor = 110
let yAtor = 366;
let colisao = false
let meusPontos = 0


function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover())
    yAtor += 3;
  }
}

function verificarColisao(){
 for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], compCarro, altCarro, xAtor, yAtor, 15)
    if (colisao){
      colidiu();
      somDaColisao.play()
      if (perderPontos()){
         meusPontos -= 1
      }
    }
  }
}
  
function colidiu(){
  yAtor = 366;
}

function incluirPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(0, 255, 0);
  text(meusPontos, width / 5, 8, 50);
}

function marcaPontos(){
if (yAtor < 15){
  meusPontos += 1
  colidiu();
  }
}

function perderPontos(){
  return meusPontos > 0
}
  
function podeSeMover(){
  return yAtor < 366;
}