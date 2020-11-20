
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof=new Ground(width/2,40,width,20)

var point=width/2



bob3=new Bob(point,300,45)
bob2=new Bob(point-45,300,45)
chain1=new SlingShot(bob3.body,{x:point,y:40})
chain2=new SlingShot(bob2.body,{x:point-45,y:40});
bob4=new Bob(point+45,300,45)
bob1=new Bob(point+90,300,45)
chain3=new SlingShot(bob1.body,{x:point+90,y:40});
bob5=new Bob(point-90,300,45)
chain5=new SlingShot(bob5.body,{x:point-90,y:40})
chain4=new SlingShot(bob4.body,{x:point+45,y:40})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  


  roof.display()
  bob3.display()
  bob2.display()
  bob4.display()
  bob1.display()
  bob5.display()
  chain4.display()
  chain2.display()
  chain1.display()
  chain3.display()
 chain5.display()
  drawSprites();
 
}

function keyPressed() {

	Matter.Body.applyForce(bob1.body,bob1.position,{x:85,y:-100})

}

