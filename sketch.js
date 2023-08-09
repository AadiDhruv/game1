var gameState = PLAY;
var gameOver, restart;
var restart
var restart_Image
var PLAY = 1;
var END = 0;
var score = 0;
var gameOver_Image
var earth;
var mars;
var mercury;
var rocket;
var rocketImage;
var earth_image;
var mars_Image
var mercury_Image
function preload(){
  rocketImage = loadImage("Rocket.jpg")
   earth_image = loadImage("Earth.jpg")
   mars_Image = loadImage("Mars.jpg")
   mercury_Image = loadImage("Mercury.jpg")
  gameOver_Image = loadImage("gameover.png")
  restart_Image = loadImage("restart.jpg")
}




function setup() {
  createCanvas(800,800);
  rocket = createSprite(400,700,50,50);
  rocket.addImage("rocket",rocketImage);
  rocket.scale = 0.05;
  mercury = createSprite(100,20,50,50)
  mercury.addImage("mercury",mercury_Image)
  mercury.scale = 0.05
  mars = createSprite(600,20,50,50)
  mars.addImage("mars",mars_Image)
  mars.scale = 0.07
  earth= createSprite(400,100,50,50);
  earth.addImage("earth",earth_image);
  earth.scale = 0.1;

restart = createSprite(400,600);
restart.addImage("restart",restart_Image)

gameOver = createSprite(400,300);
gameOver.addImage("gameover",gameOver_Image);
gameOver.scale = 3
gameOver.visible = false
restart.visible = false
score = 0;
}

function draw() {
  text("Score: "+ score, 500,50);
  

  background("black");  
  if(keyDown("right")){
    rocket.x +=20
  }
    if(keyDown("left")){
      rocket.x -=20

    }

    if(rocket.x>800){
      rocket.x=0

    }
    if(rocket.x<0){
      rocket.x=800
    }

    if(earth.y>800){

      earth.y = 0
      earth.x = Math.round(random(0,800));
    }

    if(mars.y>800){
    mars.y = 0
    mars.x = Math.round(random(0,800));

    }

    if(mercury.y>800){
      mercury.y = 0
      mercury.x = Math.round(random(0,800));
    }
    
    earth.velocityY = 30;
    mars.velocityY = 10
    mercury.velocityY = 40


  if(rocket.isTouching(earth)){
    earth.velocityY = 0

  }
    if(rocket.isTouching(mars)){
      mars.velocityY = 0
    }
    if(rocket.isTouching(mercury)){
      mercury.velocityY = 0
    }


    if(earth.isTouching(rocket)){
      gameState = END;
      
  }

else if (gameState === END){
  earth.velocityY = 0
  mars.velocityY = 0
  mercury.velocityY = 0
  gameOver.visible = true;
  restart.visible = true;
  if(mousePressedOver(restart)) {
    reset();
  }
}
if(mars.isTouching(rocket)){
  gameState = END;
  
}


if(mercury.isTouching(rocket)){
  gameState = END;
  
}


  drawSprites();
}
function reset(){
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;

}
