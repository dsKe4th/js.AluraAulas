let xCircle = 300;
let yCircle = 200;
let diametro = 25;
let raio = diametro /2;

let VelocidadeXCircle = 10
let VelocidadeYCircle = 10

//variáveis da raquete
let xRect = 4;
let yRect = 158;
let Rectcmp = 5;
let RectAl = 100;


let colidiu = false;

function setup() {
  createCanvas(900, 395);
}

function draw() {
background(0);
mostraBolinha();
movimentaBolinha();
verificaColisaoBorda();
createRect();
MovimentaMinhaBolinha();
verificaColisaoRaquete();
colisaoMinhaRaqueteBiblioteca();  
}

function mostraBolinha() {
    circle(xCircle, yCircle, diametro)
}

function movimentaBolinha() {
    xCircle += VelocidadeXCircle;
    yCircle += VelocidadeYCircle;
}

function verificaColisaoBorda() {
    if (xCircle + raio > width || xCircle - raio < 0) {
        VelocidadeXCircle *= -1;}
    
    if (yCircle + raio > height || yCircle - raio < 0) {
        VelocidadeYCircle *= -1;
    }
}
  function createRect() {
rect (xRect, yRect, Rectcmp, RectAl)  
}
 function MovimentaMinhaBolinha() {
  if(keyIsDown(UP_ARROW)) {
    yRect -= 15;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yRect += 15;
  }
}


function verificaColisaoRaquete() {
    if (xCircle - raio < xRect + Rectcmp && yRect - raio < yRect + RectAl && yCircle + raio > yRect) {
        VelocidadeXCircle *= -1;
    }
}

function colisaoMinhaRaqueteBiblioteca() {
  colidiu = collideRectCircle(xRect, yRect, Rectcmp, RectAl, xCircle, yCircle, raio);
  if(colidiu) {
    VelocidadeXCircle *= -1;
  }
}

