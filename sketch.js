var fixed, moving;

function setup() {
  createCanvas(1200,800);
  
  fixed = createSprite(200, 200, 50, 80);
  moving = createSprite(400, 200, 80, 30);
  fixed.shapeColor = "green";
  moving.shapeColor = "green";
  moving.velocityX = -5;
  fixed.veloctiyX = 5;
}

function draw() {
  background(0,0,0);  

  //moving.x = mouseX;
  //moving.y = mouseY;

  if(moving.x - fixed.x < fixed.width/2 + moving.width/2
    && fixed.x - moving.x <fixed.width/2 + moving.width/2){
    fixed.velocityX = fixed.veloctiyX * (-1);
    moving.velocityX = moving.velocityX * (-1);
  }
 
  if ( moving.y - fixed.y < fixed.height/2 + moving.height/2
    && fixed.y - moving.y < fixed.height/2 + moving.height/2){
      fixed.velocityY = fixed.velocityY * (-1);
      moving.velocityY = moving.velocityY * (-1);
  }
  drawSprites();
}