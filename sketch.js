const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var plank1;
var platform1;
var projectile1, slingShot;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    platform1 = new Platform(600,height,1200,20);
   
    plank1 = new plank(600,310,40,40);
    plank2 = new plank(600,320,40,40);
    plank3 = new plank(700,240,40,40);
    plank4 = new plank(800,140,40,40);
    plank5 = new plank(800,160,40,40);
    projectile1= new Projectile(200,30);
    slingShot = new Catapault(projectile1.body,{x:200, y:50});
}

function draw(){
    background("black");
    Engine.update(engine);
   
    plank1.display();
    plank2.display();
    plank3.display();
    plank4.display();
    plank5.display();
    projectile1.display();
    platform1.display();
    slingShot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(projectile1.body, {x: 200, y: 10});
}
function mouseReleased(){
    slingShot.fly();
}