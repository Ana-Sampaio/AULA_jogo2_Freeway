let imgEstrada;
let imgVaquinha;
let imgVerde;
let imgPreto;
let imgAmarelo;

let trilha;
let ponto;
let colisao;

function preload(){
  imgEstrada = loadImage("imagens/estrada.png");
  imgVaquinha = loadImage("imagens/ator-1.png"); 
  imgVerde = loadImage ("imagens/carro-1.png");
  imgPreto = loadImage("imagens/carro-2.png");
  imgAmarelo = loadImage("imagens/carro-3.png");
  imgCarros = [imgVerde, imgPreto, imgAmarelo, imgPreto, imgAmarelo, imgVerde];
  
  trilha = loadSound("sons/trilha.mp3");
  colisao = loadSound("sons/colidiu.mp3");
  ponto = loadSound("sons/pontos.wav");
  
}