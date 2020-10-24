
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine,world;
var box_1;
//var ground_1;
//var object_options;
function setup() {

  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  box_1= new Box(200,100,50,50);
  box_2= new Box(240,0,50,100);
  ground_1= new Ground(380,390,800,10);
  //box_1.debug=true;
}

function draw() {
  background(0);
  Engine.update(engine);

  box_1.display();
  box_2.display();
  ground_1.display();
}