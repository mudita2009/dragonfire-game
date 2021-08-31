var cute,cuteImg;
var dragon,dragonImg;
var cutefire,cutefireImg;
var backdrop,backgroundImg;
var dragonfire,dragonfireImg;

function preload(){
cuteImg = loadImage("cute.png");
dragonImg = loadImage("dragon cute.png");
cutefireImg=loadImage("cute fire.png");
backgroundImg=loadImage("background.jpg");
dragonfireImg=loadImage("dragon fire.png");
}


function setup() {
  createCanvas(600, 400);

backdrop=createSprite(300,200,600,400);
backdrop.addImage(backgroundImg);
backdrop.scale=3;
backdrop.velocityX=-5;

 cute=createSprite(50,200,50,50);
cute.addImage(cuteImg);
cute.scale=0.2;

  
dragongroup = new Group();
dragonfiregroup = new Group();
}

function draw() {
  background("black");
  
  
  
  
  if(backdrop.x<50){
  backdrop.x=300;
  }
  cute.y=mouseY;
  
  if(keyDown("space")){
  cute.velocityY=-5;
  }
  
  cute.velocityY=cute.velocityY+0.8;

  
  if(keyDown("space")){
  dragonfire.velocityX=-5;
  }
  
  
  
  if(dragongroup.isTouching(cute) || dragonfiregroup.isTouching(cute)){
  cute.destroy();
  dragonfiregroup.destroyEach();
  dragongroup.destroyEach();
  backdrop.visible=false;
    dragongroup.setVelocityXEach(0);
    dragonfiregroup.setVelocityXEach(0);
  }
  
  
  
  
  createdragon();
  createdragonfire();
  
 drawSprites(); 
} 


function createdragon(){
if(frameCount%60===0){

dragon=createSprite(580,250,50,50); 
dragon.addImage(dragonImg);
dragon.scale=0.2;
dragon.velocityX=-5;
dragongroup.add(dragon);
}
}

function createcutefire(){
if(frameCount%60===0){

cutefire=createSprite(60,200,50,50);
cutefire.addImage(cutefireImage);

}

}

function createdragonfire(){
if(frameCount%60===0){

dragonfire=createSprite(350,50,50,50);
dragonfire.addImage(dragonfireImg);
dragonfire.velocityX=-3;
dragonfire.scale=0.3;
}

}