let palavra;
let som;
let imagem;

function setup() {
  createCanvas(600, 600);
  palavra = layllete();
  som.loop();
}
  function preload(){
    imagem = loadImage("imagem.webp");
    som = loadSound("som.mp3");
  }

function draw() {
  
  batata();
  layllete();
    let maximo = width;
    let minimo= 0;
    let aparecer = map(mouseX,0,width,1,palavra.length);
    let inicio = palavra.substring(0,aparecer);
  text(inicio,300,300);
}

function batata (){
    background("violet");
  image(imagem,0,0,600,600);
 fill("lightblue");
  textSize(60);
  textAlign(CENTER,CENTER);

}

function layllete(){
  let palavras = ["hotel", "caro"];
  return random(palavras);
}