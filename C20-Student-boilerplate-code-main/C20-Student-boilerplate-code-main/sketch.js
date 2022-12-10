
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var wall;
var ball1;
var ball2;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
   var ball2_option = {
     restitution:0.5
   }

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  wall = Bodies.rectangle(300,200,200,20,ground_options);
  World.add(world,wall)

  ball1 = Bodies.circle(300,10,10,ball_options);
  World.add(world,ball1)

  ball2 = Bodies.circle(150,10,20,ball2_option);
  World.add(world,ball2)

  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  rect(wall.position.x,wall.position.y,200,20);
  ellipse(ball1.position.x,ball1.position.y,10)
  ellipse(ball2.position.x,ball2.position.y,20)
}

