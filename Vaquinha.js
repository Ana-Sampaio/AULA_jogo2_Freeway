let xVaquinha = 100;
let yVaquinha = 368;
let batida = false; 
let pontos = 0;

function mostraVaquinha(){
  image(imgVaquinha, xVaquinha, yVaquinha, 30, 30);
}

function moveVaquinha(){
  if(keyIsDown(UP_ARROW)){
    yVaquinha -=3
  }
  if(keyIsDown(DOWN_ARROW)){
    if(temMovimento()){
    yVaquinha +=3
    }
  }
}

function verAtropelamento(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for(let i = 0; i < imgCarros.length; i = i + 1){
    atropelamento = collideRectCircle(xCarros[i], yCarros[i], compCarros, altCarros, xVaquinha, yVaquinha, 15)
    if(atropelamento){
      colisao.play();
      voltaTudo();
      if(pontosNaturais()){
      pontos -= 1;
    }
   }
  }
}

function voltaTudo(){
  yVaquinha = 368
}

function mostraPontos(){
  textAlign(CENTER);
  textSize(22);
  fill(color(255, 20, 147));
  text(pontos, 50, 25);
}

function marcaPontos(){
  if(yVaquinha < 9){
    pontos += 1;
    ponto.play();
    voltaTudo();
  }
}

function pontosNaturais(){
  return pontos > 0;
}

function temMovimento(){
  return yVaquinha < 368;
}