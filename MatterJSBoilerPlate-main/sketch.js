
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var engine, world;
var ground;
var cesta1,cesta2;


function preload()
{
	
}

function setup() {
	createCanvas(400, 400);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(200,390,400,100);
	cesta1 = new Ground(350,315,10,50);
	cesta2 = new Ground(300,315,10,50);

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	//Create the Bodies Here.
	ball = Bodies.circle (50,380,10,ball_options);
	World.add(world,ball);
	World.add(world,ground);
	World.add(world,cesta1);
	World.add(world,cesta2);
	
	Engine.run(engine);
	
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:2,y:4});
	}	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ellipse(ball.position.x,ball.position.y,10);
  ground.show();
  cesta1.show();
  cesta2.show();
  Engine.update(engine);
}



