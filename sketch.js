
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground;
var hammer,stone,rubber;
var iron;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8,sand9,sand10;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height-10,1200,20);		

	hammer = new Hammer(760,120);
	stone = new Stone(300,320,70,70);
	rubber = new Rubber(400,400,80);
	iron = new Iron(200,200,70,50);
	
	//creating sand sprites
	sand1 = new Sand(400,400,10);
	sand2 = new Sand(400,400,10);
	sand3 = new Sand(400,400,10);
	sand4 = new Sand(400,400,10);
	sand5 = new Sand(400,400,10);
	sand6 = new Sand(400,400,10);
	sand7 = new Sand(400,400,10);
	sand8 = new Sand(400,400,10);
	sand9 = new Sand(400,400,10);
	sand10 = new Sand(400,400,10);

	Engine.run(engine);
  
}


function draw() {
  background(0);

  ground.display();
  hammer.display();
  stone.display();
  rubber.display();
  iron.display();
  
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  
  
  drawSprites();
 
}



