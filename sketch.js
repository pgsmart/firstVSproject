var sprite1;
function setup() {
  createCanvas(400,400);
  sprite1 = createSprite(100,100,30,30);
}

function draw() 
{
  background(30);

  if(keyDown("up")){
    sprite1.y -= 3;
  }
  if(keyDown("down")){
    sprite1.y += 3;
  }


  drawSprites();
}




