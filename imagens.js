let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

function preload(){
  imagemDaEstrada = loadImage("img/estrada.png");
  imagemDoAtor = loadImage("img/galinha.png");
  imagemCarro = loadImage("img/carro-1.png");
  imagemCarro2 = loadImage("img/carro-2.png");
  imagemCarro3 = loadImage("img/carro-3.png");
  imagemCarros = [imagemCarro2, imagemCarro3, imagemCarro, imagemCarro3, imagemCarro, imagemCarro2]
 
 somDaTrilha = loadSound("sons/trilha.mp3");
 somDaColisao = loadSound("sons/colidiu.mp3")
 somDoPonto= loadSound("sons/ponto.wav");  
}