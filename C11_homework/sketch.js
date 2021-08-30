var runner,pathImg,runImg;
    
function preload(){
  pathImg=loadImage("path.png");
  runImg=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200);
  path.addImage(pathImg);
  runner = createSprite(200,350,15,15);
  invisibleWall=createSprite(385,200,70,400);
  invisibleWall.visible = false
  invisibleWall2=createSprite(30,200,70,400)
  invisibleWall2.visible= false
}

function draw() {
  background(0);  
 path.velocityY = 4;

if(path.y>400){
  path.y = height/2;
}
  runner.x=mouseX;
  runner.addAnimation("jaxon",runImg)
  runner.scale=0.1;
  if(runner.x>400){
    runner.x=332.5
  }
  runner.collide(invisibleWall)
  runner.collide(invisibleWall2)
  console.log(runner.x);
 // console.log(frameCount);
  drawSprites();

}
  