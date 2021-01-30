
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height-10,1200,20);		

	hammer = new Hammer(760,120,50,50);
	stone = new Stone(300,320,70,70)
	rubber = new Rubber(56,46);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);

  ground.display();
  hammer.display();
  stone.display();
  rubber.display();
  
  drawSprites();
 
}



