var gun , gunImg;
var backGround, backGroundImg;
var PurpleBallon, PurpleBallonImg;
var GunBullet, GunBulletImg;
var BlueBallon, BlueBallonImg; 
var score=0;



function preload(){
    gunImg = loadImage("Gun.png");
    GunBulletImg = loadImage("Gun Bullet.png");
    PurpleBallonImg = loadImage("purpleBallon.png");
    backGroundImg = loadImage("BackGround.jpg");
    BlueBallonImg = loadImage("Blue Ballon.png");

}

function setup() {
    createCanvas(1000, 400);

    backGround = createSprite(200,200,400,400);
    backGround.addImage(backGroundImg);
    backGround.scale = 0.7;

    gun = createSprite(980,220,20,50);
    gun.addImage(gunImg); 
    gun.scale = 0.1;

    blueB=new Group();
    purpleB=new Group();
    bulletGroup=new Group();
}

function draw() {
    background(0);
    
      backGround.velocityX = -3 
      if (backGround.x < 0){
        backGround.x = 500;
      }
      if (keyDown("space")) {
        createBullet();
        
      }
      
      
      if(bulletGroup.isTouching(blueB)){
        blueB.destroyEach();
        bulletGroup.destroyEach();
        score= score+5;
        
        
      }
      if(bulletGroup.isTouching(purpleB)){
        purpleB.destroyEach();
        bulletGroup.destroyEach();
        score = score + 5;
        
        
      }
    

    
    
    gun.y = World.mouseY;

    
    
      var select_balloon = Math.round(random(1,4));

      if (World.frameCount % 10 == 0) {
        if (select_balloon == 1) {
          BlueB();
        } else if (select_balloon == 2) {
          PurpleB();
        } 
      }
       
      
      
      
      drawSprites();
      text("Score: "+ score, 300,50);
}
function BlueB() {
    if (World.frameCount % 30 == 0) {
    BlueBalloon = createSprite(0,Math.round(random(20, 370)), 10, 10);
    BlueBalloon.addImage(BlueBallonImg);
    BlueBalloon.velocityX = 13;
    BlueBalloon.lifetime = 350;
    BlueBalloon.scale = 0.1;
    blueB.add(BlueBalloon);
    }
    
  }
  function PurpleB() {
    if (World.frameCount % 30 == 0) {
    PurpleBallon = createSprite(0,Math.round(random(20, 370)), 10, 10);
    PurpleBallon.addImage(PurpleBallonImg);
    PurpleBallon.velocityX = 13;
    PurpleBallon.lifetime = 350;
    PurpleBallon.scale = 0.1;
    purpleB.add(PurpleBallon);
    }
  }
  function createBullet() {
    GunBullet= createSprite(100, 100, 60, 10);
    GunBullet.addImage(GunBulletImg);
    GunBullet.x = 980;
    GunBullet.y=gun.y - 20;
    GunBullet.velocityX = -10;
    GunBullet.lifetime = 350;
    GunBullet.scale = 0.03;
    bulletGroup.add(GunBullet);
  }