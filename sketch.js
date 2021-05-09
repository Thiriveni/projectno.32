const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var floor1, box1, polygon;
var sling;
var Score;

var backgroundImg

function preload(){
  getBackgroundImg();
}

function setup() {
 createCanvas(1000, 550);
engine = Engine.create();
world = engine.world;

Score = 0;

polygon = new Polygon(100, 300, 70);

floor1 = new Ground(390,400,250,10);
floor2 = new Ground(700,200,200,10);


box1 = new Block(300, 375,30,40,"yellow");
box2 = new Block(330, 375, 30, 40, "yellow");
box3 = new Block(360, 375, 30, 40, "yellow");
box4 = new Block(390, 375, 30, 40, "yellow");

box5 = new Block(330, 335, 30, 40, "red");
box6 = new Block(360, 335, 30, 40, "red");
box7 = new Block(390, 335, 30, 40, "red");

box8 = new Block(360, 295, 30, 40, "pink");
box9 = new Block(390, 295, 30, 40, "pink");

box10 = new Block(390, 255, 30, 40, "green");


block1 = new Block(640, 175, 30, 40, "yellow");
block2 = new Block(670, 175, 30, 40, "yellow");
block3 = new Block(700, 175, 30, 40, "yellow");
block4 = new Block(730, 175, 30, 40, "yellow");

block5 = new Block(640, 135, 30, 40, "red");
block6 = new Block(670, 135, 30, 40, "red");
block7 = new Block(700, 135, 30, 40, "red");

block8 = new Block(640, 95, 30, 40, "pink");
block9 = new Block(670, 95, 30, 40, "pink");

block10 = new Block(640, 75, 30, 40, "green");

sling= new SlingShot(polygon.body,{x:50, y:250});

Engine.run(world, engine);
}
function draw() {

  if(backgroundImg)

  background(backgroundImg);  

  else{
    background("skyBlue");
  }
  Engine.update(engine);
  floor1.display();
  floor2.display();
 
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  polygon.display();
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();

  sling.display();
  text("Score:" + Score, 150 , 40) 
    drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY})
}
function mouseReleased(){
  sling.fly();
}
function keyPressed(){
  if(keyCode === 32){
      sling.attach(polygon.body);
     Matter.Body.setPosition(polygon.body, {x: 50 , y: 250});
  }
}

async function getBackgroundImg(){
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responcejson=await response.json();
  var dayTime=responcejson.datetime
  var hour=dateTime.slice(11,13);
   if(hour>=06&&hour<=19){
     bg="light.jpg"
   }
   else{
     bg="dark.jpg"
   }
   backgroundImg=loadImage(bg);
}