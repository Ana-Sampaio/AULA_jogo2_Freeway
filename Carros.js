let xCarros = [600, 600,600, 600, 600, 600];
let yCarros = [40, 100, 150, 210, 270, 318];
let velCarros = [5, 4.5, 4, 5.5, 6, 3] ;
let compCarros = 50;
let altCarros = 40;

function mostraCarro(){
  for (let i = 0; i < imgCarros.length; i++){
  image(imgCarros[i], xCarros[i], yCarros[i], compCarros, altCarros);
}
}

function moveCarro(){
  for (let i = 0; i < imgCarros.length; i++){
  xCarros[i] -= velCarros[i];
}
}

function voltaCarro(){
  for(let i = 0; i < imgCarros.length; i++){
  if(passaLimites(xCarros[i])){
    xCarros[i] = 600;
  }
}
}

function passaLimites(xCarros){
  return xCarros < -50
}