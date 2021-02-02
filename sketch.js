var fixedRect
var movingRect
var rect


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  //fixedRect.velocityX = 3
  fixedRect.shapeColor = ("green");
  movingRect = createSprite(600,200,50,50);
 // movingRect.velocityX = -3
  movingRect.shapeColor = ("green");
  rect = createSprite(500,300,50,50);
  rect.shapeColor = ("blue");
}

function draw() {
  background(255,255,255);
  
 if (isTouching(movingRect,rect)){
  rect.shapeColor = ("red");
  movingRect.shapeColor = ("red");
 }
 else{
  //return false;
  rect.shapeColor = ("blue");
  movingRect.shapeColor = ("green");
}
if (isTouching(movingRect,fixedRect)){
  fixedRect.shapeColor = ("red");
  movingRect.shapeColor = ("red");
 }
 else{
  //return false;
  fixedRect.shapeColor = ("blue");
  //movingRect.shapeColor = ("green");
}

  movingRect.x = mouseX
  movingRect.y = mouseY
  
 
  //isTouching();
drawSprites();
}

function isTouching (object1,object2){

  if ((object1.x-object2.x)<object2.width/2+object1.width/2&&(object2.x-object1.x)<object2.width/2+object1.width/2&&(object2.y-object1.y)<object2.height/2+object1.height/2&&(object1.y-object2.y)<object2.height/2+object1.height/2){
    return true;
    //fixedRect.shapeColor = ("red");
    //movingRect.shapeColor = ("red");
  }
  else{
    return false;
    //fixedRect.shapeColor = ("green");
    //movingRect.shapeColor = ("green");
  }

}