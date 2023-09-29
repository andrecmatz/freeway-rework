
function setup() {
  createCanvas(500, 400);

}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  repeatPosicao();
  passouTodaATela();
  verificarColisao();
  incluirPontos();
  marcaPontos();
  perderPontos();
}


