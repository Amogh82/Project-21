
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
//var ground;
var groundObj;
var leftSide, rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 450);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	//Create the Bodies Here.
	ball = Matter.Bodies.circle(150,70,50,[ball_options]);
	World.add(world,ball);

	Engine.run(engine);
  
	groundObj = new Ground(1200/2,370,1200,20);
	leftSide = new Ground(900,300,20,120);
	rightSide = new Ground(1100,300,20,120);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  groundObj.display();
  leftSide.display();
  rightSide.display();
  ellipse(ball.position.x,ball.position.y,20);

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.4,y:-0.4});
	}
}

