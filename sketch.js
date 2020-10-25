function setup() {
  createCanvas(800,400);
fixed = createSprite(700, 200, 50, 50);
fixed.shapeColor = "blue";
fixed.velocityX = -5;
moving = createSprite(100, 200, 50, 50);
moving.shapeColor = "black";
moving.velocityX = 5;
}

function draw() {
  background(255,0,0);
    if(moving.x-fixed.x < moving.width/2 + fixed.width/2 && 
      fixed.x-moving.x < moving.width/2 + fixed.width/2){
      moving.velocityX = moving.velocityX * (-1);
      fixed.velocityX = fixed.velocityX * (-1);
       }

       if (moving.y-fixed.y < moving.width/2 + fixed.width/2 &&
       fixed.y-moving.y < moving.width/2 + fixed.width/2){
       moving.velocityY = moving.velocityY * (-1);
      fixed.velocityY = fixed.velocityY * (-1);
    }
  drawSprites();
}