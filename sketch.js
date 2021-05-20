const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint; 

var engine,world;
var sballs;


var sballs=[];

function preload(){
bgImg=loadImage("snow1.png")
}

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world

for (var k=0; k<=width; k=k+80){
  divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
}
for (var j=75; j<=width; j=j+50){
sballs.push(new sballs(j,75));
}
for (var j=50; j<=width-10; j=j+50){
  sballs.push(new sballs(j,175));
  }
  for (var j=75; j<=width; j=j+50){
    sballs.push(new sballs(j,275));
    }
    for (var j=50; j<=width-10; j=j+50){
      sballs.push(new sballs(j,375));
      }
}


function draw() {
  background(255,255,255)

Engine.update(engine);


  drawSprites();
}