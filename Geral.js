function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(imgEstrada);
  mostraVaquinha();
  moveVaquinha();
  mostraCarro();
  moveCarro();
  voltaCarro();
  verAtropelamento();
  mostraPontos();
  marcaPontos();
}