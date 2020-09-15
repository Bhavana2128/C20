var fixedRect;
var movingRect;

var gameobj1, gameobj2;

function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(600,400,50,80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameobj1 = createSprite(100,200,40,10);
  gameobj1.shapeColor = "blue";

  gameobj2 = createSprite(100,400,40,10);
  gameobj2.shapeColor = "yellow";

  gameobj1.velocityY = 4;
  gameobj2.velocityY = -4;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  //console.log(movingRect.x-fixedRect.x);

  bounceOff(gameobj1,gameobj2);

  if(isTouching(movingRect,fixedRect)){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
 
  drawSprites();
}


