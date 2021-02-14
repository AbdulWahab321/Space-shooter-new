var missile,shooter,invader,edges,invader1,invader1GR,missile1,missile1Gr,BigInvader;
var PLAY=1;
var END=0;
var gameState=PLAY;
var biginvader;
var score=0;
var life=5;
var MISSILE;
var earth,earth1;
function preload(){;
shooterImg=loadImage("2.png")
inv=loadImage("3.png")
 space=loadImage("space.jpg") 
  miss=loadImage("missile22.png")
  miss1=loadImage("missile2.png")
  over=loadImage("over.png")
  song=loadSound("sonicastronomia.mp3")
  rocket=loadSound("launc.wav")
  overSnd=loadSound("over.wav")
  invaderBIG=loadImage("Big invader.png")
  earth1=loadImage("EARTH.png")
}
function setup(){
 createCanvas(1000,600 );
  gameState=PLAY
  edges=createEdgeSprites()

 shooter = createSprite(40,200,20,20)
 shooter.addImage(shooterImg); 
 shooter.scale=0.11
 earth=createSprite(500,400,30,30);
 earth.addImage(earth1);
 earth.visible=false
  
  missileGr=new Group();
  invaderGr=new Group();
  invader1GR=new Group();
  missile1Gr=new Group();
  
  
}
function draw(){
  background(space)
  edges=createEdgeSprites();
 shooter.debug=true


  spawnInvader();
  
  
  
  if(gameState===PLAY){
    shooter.y = World.mouseY;
    shooter.x = World.mouseX;
    sound();
    shooter.visible=true;
    earth.visible=false;
    spawnInvader();
     if(keyDown("space")) {
       rocket.play();
   spmiss();
 }
  }
  if(gameState===END){
    shooter.x=300;
    shooter.y=300;
    shooter.addImage(over);
    shooter.scale=1;
    invaderGr.setVelocityYEach(0);
    shooter.setCollider("rectangle",0,0,-5,-5);
    invaderGr.destroyEach();
    invader1GR.destroyEach();
    sound1()
    
    reset()
  }
 
 if(missileGr.isTouching(invaderGr)){
   invaderGr.destroyEach();
   missileGr.destroyEach();
   rocket.stop();
   score=score+1
 }
 if(life=0){
   invaderGr.destroyEach();
 }
  if(invaderGr.isTouching(shooter)){
    overSnd.play()
    gameState=END
  }
 
  if(score===100){
  
  earth.scale=0.2
  fill("black")
  textSize(35)
  text("YOU WON",350,200);
  text("You saved the Earth from the invaders",200,300);
  shooter.visible=false;
  earth.visible=true; 
  invaderGr.destroyEach();
  invader1GR.destroyEach();
  missile.visible=false;
  rocket.stop();
  
  if(keyCode===82){
    
    gameState=PLAY;
    score=0
  }
  }

  drawSprites();
  fill("white")
  text("Score:"+score,530,20);
  text("score 100 to win",500,590);

}
function spawnInvader(){
  if(frameCount%50===0){
    invader=createSprite(Math.round(random(10,590)),-50)
    invader.velocityY=28
    invader.addImage(inv) 
    invader.scale=0.1
    invader.lifetime=-1
    invaderGr.add(invader)




  
}}
function spmiss(){
   missile= createSprite(100,100,12,12) 
 missile.addImage(miss);
 missile.scale=0.1 
 missile.velocityY=-14; 
  missile.x=shooter.x
  missile.y=shooter.y
  missile.lifetime=-1
 missileGr.add(missile) 
}
function reset(){
  if(keyDown("space")){
  gameState=PLAY
  shooter.addImage(shooterImg)  
  score=0
  shooter.scale=0.11
  song.play();
  }
  
}
function sound(){
 if(frameCount-5===0){
  song.play();
 }
  
  
 

}
function sound1(){
  song.stop();
}
function asd(){
  BigInvader=createSprite(500,300,10,10)
  BigInvader.addImage(inv)
  BigInvader.scale=0.2
  MISSILE=createSprite(520,500,20,10)
  MISSILE.addImage(miss1)
  MISSILE.scale=0.2; 
}