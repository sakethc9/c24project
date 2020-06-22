var ball,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1 , box2 , box3 ;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	ball = new Ball(60,571,20);
	


	//Create a Ground
	ground = new Ground(400,600,800,10);
	 World.add(world, ground);
	 
	 box1 = new Boxes(610,589,220,10);
	
	 
	 box2 = new Boxes(500,565,10,60);
	 

	 box3 = new Boxes(720,565,10,60);
	  
	




	Engine.run(engine);
  
}


function draw() {
 
  background(0);
  Engine.update(engine);
 
  ground.display();
  ball.display();
  box1.display();
  box2.display();
  box3.display();

  }


function keyPressed(){

    if(keyCode === UP_ARROW){


	Matter.Body.applyForce(ball.body , ball.body.position,{x:25 ,y:-25})

}

}