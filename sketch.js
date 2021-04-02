const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var ground, ball, PC1, sheet,treasure;
var backgroundImg, backgroundImg2;
var Img;

function preload(){
  
  backgroundImg = loadImage("Images/Mansion.png");
  Img = loadAnimation("Images/Walking.png");
  //backgroundImg2 = loadImage("Images/InsideHouse.png");
 // PC1 = loadImage("Images/RichMan.png");

}

function setup() {
  createCanvas(1215,400);
  engine=Engine.create();
  world=engine.world;
  var option={
    isStatic:true
  }
  ground=Bodies.rectangle(120,380,1000,50,option);
   World.add(world,ground);
   PC1 = new FirstAppearance();
 //  treasure = new Treasure(100,255);
  
   sheet = new Note();
   
   

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  console.log(ground)
  PC1.display();
  sheet.display();
  
  //PC1.x = 200;
  //PC1.y = 200;
  //PC1.width = 50;
  //PC1.height = 50;
  //rect(200,200,50,50) 
  //rect(ground.position.x,ground.position.y,600,10)
  //drawSprites();
  //"What's this? a note.`leave the door open when you go to sleep, I have to pick up my clothes from your house`-Mom"
  if(frameCount % 100 === 0){
    var foreshadow = createElement(`h1`,"What's this? a note.`leave the door open when you go to sleep, I have to pick up my clothes from your house`-Mom" );
    foreshadow.position(displayWidth / 2, 400);
    var Cont = createElement(`h3`, "Press Space To Continue");
    Cont.position(displayWidth / 2, 200);
    if(keyCode === 32){
      //foreshadow.destroy();
        backgroundImg = loadImage("Images/InsideHouse.png");
        PC1.addAnimation("Running", Img);
        PC1.changeAnimation("Running");
       // treasure.display();
        //treasure.display();
        sheet = loadImage("Images/NothingNess.png");
      // if(frameCount % 80 === 0){
       //  PC1 = new SecondAppearance();
       //PC1.velocityX = 3;
        // if(PC1.x >= 600){
         //  PC1.velocityX = 0;
         }

       }
        }
   // }
 // }
