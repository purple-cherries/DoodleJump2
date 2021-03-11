
var gamestates = "play"

function preload(){
  
  doodler = loadImage("dodlejump-removebg-preview.png")
  bdj = loadImage("doodlejump_background.jpg")
  ground = loadImage("doodleground-removebg-preview.png")
  monster = loadImage("monster-removebg-preview.png")
  monster2 = loadImage("monster2-removebg-preview.png")
}

function setup(){
  createCanvas( displayWidth, displayHeight)

  backg = createSprite(667,400, 200,800)
  backg.addImage("Background", bdj)
  backg.scale = 3

  player = createSprite(displayHeight/2,displayHeight+10)
  player.addImage("doodler",doodler)
  player.scale = 0.2
  
    textSize(50)
  text("OH NO! REFRESH THE PAGE TO RETRY...", 260, 1500)

  border1 = createSprite(200, 700, 500, 7000)
  border1.shapeColor = "white"

  border2 = createSprite(1140, 700, 500, 7000)
  border2.shapeColor = "white"
      


  gGroup = new Group();
  invisibleGroup = new Group();
  
}



function draw() {
  background("white")
   if(gamestates === "play"){
  
    console.log(player.y)

  //  if(backg.y>400){
    //backg.y = 300
  
    camera.position.x = displayWidth/2;
    camera.position.y = player.y
  
    if(keyDown("left")){
    player.x = player.x - 5;
  }
  
  if(keyDown("right")){
    player.x = player.x + 5;
  }
  
  
  if(keyDown("space")){
    player.velocityY = -5    
  }
  
         
  if(gGroup.isTouching(player)){
    player.velocityY = 0;}
     
  if(invisibleGroup.isTouching(player)){
    player.destroy();
    invisibleGroup.destroyEach();
    gGroup.destroyEach();
    gamestates = "end"
  }
  
   player.velocityY = player .velocityY +0.8 
  
  SpawnMonsters();
  SpawnGround();
 drawSprites();

 textSize(50)
 text("OH NO! REFRESH THE PAGE TO RETRY...", 260, 2000)
}
  
  if(gamestates === "end"){
    textSize(40)
    text("GAME OVER",60,235)
    end = createSprite(200,310)
    end.addImage(monster2)
    drawSprites();
  }
  
  
  
}

function SpawnGround(){
  if(frameCount%200 === 0){
    
    g = createSprite(200,-50)
    g.addImage("ground", ground);
    g.velocityY = 1;
    g.scale = 0.07;
    g.lifetime = 800;
    gGroup.add(g)
    

     g.x = Math.round(random(560,790))
   
}}

function SpawnMonsters(){
  
   if(frameCount%200 === 0){
       invisible = createSprite(200,5,50,2);
    invisible.addImage(monster)
    invisible.scale = 0.1
    invisible.velocityY = 1;
    invisible.lifetime = 800;
    invisibleGroup.add(invisible)   
     invisible.x = Math.round(random(560,790))
   } 
}