
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Rubber,Hammer,Stone,Plane;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	hammer=new Hammer(100,200);
	rubber=new Rubber(150,230);
	stone=new Stone(700,320,70,70);   


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  hammer.display();
  stone.display();
  plane.display();
  rubber.display();
  
  drawSprites();
 
}



