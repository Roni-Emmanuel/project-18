
var monkey , monkey_running
var banana ,bananaImage, obstacle1, obstacleImage
var foodGroup, obstacleGroup , monkeyGroups;
var score
var invisbleGround;
var survivaltime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
 
}


function setup() {
  
// creating a monkey for the game
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  monkey.depth = monkey.depth + 1;
  
  // crewatingf a ground for the monkey game
  ground = createSprite(400,350,900,10);
  ground.velocityX = -14; 
  ground.x = ground.width/2;
  
  // creating a invisble ground for the monkey game
   invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  console.log(ground.x);
  
   // creating a group for the monkey game
  monkeyGroup = new Group();
  foodGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {

  
  // creating a background for the monkey game
  background("lightblue");
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  // creating a code for the monkey game to jump when space is pressed
  //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
  
  // add gravity to monkey game
monkey.velocityY = monkey.velocityY + 0.6;
  
  // collide the monkey down on the ground
  monkey.collide(ground);
  
  
  // creating functions for the monkey game
  food();
  
  // creating a function obstacle that the monkey should escape from it
  obstacles();
  
  // draw all the commands
  drawSprites();
  
  //survival time display
  survivaltime = Math.ceil(frameCount/getFrameRate());
  text("Survival Time: " + survivaltime, 100, 50);
}

function food(){
  
  if (World.frameCount%60 ==0){
    banana = createSprite(200,200,20,20);
    banana.addAnimation("moving", bananaImage);
   banana.y = Math.round(random(120,200));
   banana.velocityX=  -6;
   banana.setLifetime = 50;
   banana.scale = 0.1;
   foodGroup.add(banana);
  }
  
}

function obstacles(){
  
   if (frameCount%300 ==0){
    obstacles1 = createSprite(200,200,20,20);
    obstacles1.addAnimation("moving", obstacleImage);
    obstacles1.y = Math.round(random(325,325));
    obstacles1.velocityX=  -6;
    obstacles1.setLifetime = 50;
    obstacles1.scale = 0.1;
     obstacleGroup.add(obstacles1);
  }
  
}



