
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,paperImg,dustbin,dustbinImg;

function preload()
{
  paperImg = loadImage("sprites/paper.png");
  dustbinImg = loadImage("sprites/dustbin.png");
}

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  paper = new Paper(400,100);
  dustbin = createSprite(400,650,300,100);

  paperImg.addImage(paperImg);
  dustbin.addImage(dustbinImg);

  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.collide(dustbin);

  drawSprites();
 
}



