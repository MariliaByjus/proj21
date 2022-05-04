var cupImg , cupcorrendoImg , fundoImg;
var cuphead , fundo;
function preload(){
    cupImg= loadImage("cupheadcorrendo.png");
    cupmorrendoImg = loadImage("cupheadmorrendo.png");
    fundoImg = loadImage ("fundo.png");
    obstacleImg = loadImage ("obstacle.png");
}

function setup() {
    createCanvas(600,600);
  
  fundo= createSprite(300,300);
  fundo.addImage(fundoImg);
  fundo.velocityY = 1;
  
  cuphead = createSprite(200,200,50,50);
  cuphead.scale = 0.3;
  cuphead.addImage( cupImg);

  obstacle = createSprite(200,10);
  obstacle.addImage(obstacleImg);
  obstacle.scale = 0.2;
  
}

function draw() {
 
 drawSprites();
}