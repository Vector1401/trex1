var dino, dImagem, dinoMDS

var chao, chaoImg

function preload(){
dinoMDS = loadImage("trex_collided.png");

dImagem = loadAnimation("trex1.png", "trex3.png", "trex4.png");

chaoImg = loadImage("ground2.png");

}

function setup() {
  createCanvas(1000, 400);

  chao = createSprite(500, 375, 1000, 20)
  
  chao.addAnimation("chaoinfinito", chaoImg);

 dino = createSprite(65, 360, 20, 10);

 dino.addAnimation("dCorrendo", dImagem);
}

function draw() {
  background(200,255,255);

  if (chao.x < 0 ) {
    chao.x = chao.width / 2;
  }

  drawSprites();

  chao.velocityX = -5;

  dino.collide(chao);

  if(keyDown("space")) {
  dino.velocityY = -12; 
  }

  dino.velocityY = dino.velocityY + 0.8;
}
