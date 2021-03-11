var ground, paper, left, center, right;
//var paperSprite, leftSprite, centerSprite, rightSprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
//everything but the ground isn't showing up

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper (200, 650, 50)
	fill("white");
	//paperSprite = createSprite(200, 650, 50);

	ground = new Ground (width/2, 680, 800, 20)
	fill("yellow");

	left = new Box (300, 400, 20, 100)
	fill("yellow");
	//leftSprite = createSprite(300, 400, 20, 100)
	center = new Box (500, 400, 200, 20)
	fill("yellow");
	//centerSprite = createSprite(500, 400, 200, 20)
	right = new Box (500, 400, 20, 100)
	fill("yellow");
	//rightSprite = createSprite(500, 400, 20, 100)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  left.display();
  center.display();
  right.display();
  
  drawSprites();
 
}



