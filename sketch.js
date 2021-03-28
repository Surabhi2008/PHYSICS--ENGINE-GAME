const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var ball,ground,block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,stone1,stone2,stone3,backgroundIMG,hex,stand1,stand2,stand3
var gameState="play"
var gameState="start"
var engine, world;
var ball
var ground
var count=0

function preload(){
  background1IMG=loadImage("garden1.jpg")
 // background1IMG=loadImage("background.jpg")
 // startIMG=loadImage("start.png")
 
}

function setup() {
  createCanvas(1500,900);
  rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;
   
   
   

    // 1 Tower
    ground = new Ground(630,height,1200,20);
    stand1=new Ground(800,600,70,600)
    stand2=new Ground(600,650,70,500)
    stand3=new Ground(1000,550,70,750)
    block1=new Blocks(1000,160,50,40)
    block2=new Blocks(1000,110,50,40)
    block3=new Blocks(1000,60,50,40)
    block4=new Blocks(1000,10,50,40)
    //block5=new Blocks(450,235,30,40)
    block6=new Block2(800,270,50,40)
    block7=new Block2(800,220,50,40)
    block8=new Block2(800,170,50,40)
    //block9=new Block3(390,155,30,40)
    block10=new Block4(600,360,50,40)
    block11=new Block4(600,310,50,40)
   // block12=new Block4(360,275,30,40)
   // block13=new Block4(390,275,30,40)
   // block14=new Block4(420,275,30,40)
   // block15=new Block4(450,275,30,40)
   // block16=new Block4(480,275,30,40)

    // 2 Tower
    hex=new Hex(240,490,30)
   
   // block17=new Block2(630,230,30,40)
   // block18=new Block2(660,230,30,40)
   // block19=new Block2(690,230,30,40)
   // block20=new Block2(720,230,30,40)
   // block21=new Block2(750,230,30,40)
   // block22=new Blocks(660,190,30,40)
   // block23=new Blocks(690,190,30,40)
   // block24=new Blocks(720,190,30,40)
   // block25=new Block3(690,150,30,40)
    
    string = new String(hex.body,{ x:80,y:430}) 
   
}

function draw() {
 
  background(background1IMG);
  Engine.update(engine);

  
  block1.display()
  block2.display()
  block3.display()
  block4.display()
 // block5.display()
  block6.display()
  block7.display()
  block8.display()
  //block9.display()
  block10.display()
  block11.display()
 // block12.display()
 // block13.display()
 // block14.display()
  //block15.display()
 // block16.display()
 // block17.display()
 // block18.display()
  //block19.display()
 // block20.display() 
 // block21.display() 
 // block22.display()
  //block23.display()
 // block24.display()
 // block25.display()
  stand1.display()
  stand2.display()
  stand3.display()
  ground.display()
  hex.display()
  string.display()
  textSize(50)
  fill("black")
  text("Drag the arrow and Release it,",80,80);
  text("to launch it towards the apples",80,150)
  text("Press space for 2 chance",500,500)
 
 }

 
 function mouseDragged(){
  Matter.Body.setPosition(hex.body, {x: mouseX , y: mouseY});
}



function mouseReleased(){
  string.fly();
}



function keyPressed(){
  if(keyCode===32){
      string.attach(hex.body)
  }
}


 //function keyPressed3(){
  //if (keyCode === "space") {

 //   Matter.Body.applyForce(ball.body,ball.body.position,{x:0,y:0});
  
 // }
//}

