var movingRect;
var fixedRect;
function setup() {
  createCanvas(800,400);
 movingRect= createSprite(400, 200, 50, 70);
 fixedRect=createSprite(400,200,50,70);
 movingRect.shapeColor="yellow";
 fixedRect.shapeColor="yellow";
}

function draw() {   
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  background(255,255,255); 
  if(fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2
    &&movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2
    &&fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2
    &&movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor="red";
 fixedRect.shapeColor="red";
  } else{
    movingRect.shapeColor="yellow";
    fixedRect.shapeColor="yellow"; 
  }
  drawSprites();
}