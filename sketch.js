const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var engine, world;

var block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block10, block11, block12, block13, block14, block15;
var block16;
var block17, block18, block19, block20, block21;
var block22, block23, block24;
var block25;

var ground1, ground2, ground3;

var chain;
var ball;
var hexImg;
var score ;

function preload() {
  bg=color("black");
  txtcolor=color("black");
  fetchtime();

  hexImg = loadImage("polygon.png");

}
function setup() {

  createCanvas(1360,650);
  engine = Engine.create();
  world = engine.world;

  
  strokeWeight(2);

  block1 = new Block(650, 420, 30, 50);
  block2 = new Block(620, 420, 30, 50);
  block3 = new Block(590, 420, 30, 50);
  block4 = new Block(560, 420, 30, 50);
  block5 = new Block(530, 420, 30, 50);
  block6 = new Block(500, 420, 30, 50);
  block7 = new Block(470, 420, 30, 50);

  block8 = new Block(620, 365, 30, 50);
  block9 = new Block(590, 365, 30, 50);
  block10 = new Block(560, 365, 30, 50);
  block11 = new Block(530, 365, 30, 50);
  block12 = new Block(500, 365, 30, 50);

  block13 = new Block(590, 315, 30, 50);
  block14 = new Block(560, 315, 30, 50);
  block15 = new Block(530, 315, 30, 50);

  block16 = new Block(560, 265, 30, 50);

  block17 = new Block(860, 285, 30, 50);
  block18 = new Block(890, 285, 30, 50);
  block19 = new Block(920, 285, 30, 50);
  block20 = new Block(950, 285, 30, 50);
  block21 = new Block(980, 285, 30, 50);

  block22 = new Block(890, 235, 30, 50);
  block23 = new Block(920, 235, 30, 50);
  block24 = new Block(950, 235, 30, 50);

  block25 = new Block(920, 185, 30, 50);

  ground1 = new Ground(650, 620, 1430,30);
  ground2 = new Ground(920, 320, 195, 20);
  ground3 = new Ground(560, 450, 250, 20);



  score = 0;

  ball = Bodies.circle(50, 200, 20);
  World.add(world, ball);

  chain = new Chain(this.ball,{x:150, y:160});

}

function draw() {
  background(bg); 


  Engine.update(engine);

  

  fill(rgb(100,149,237));
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill(rgb(184,134,11));
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill(rgb(50,205,50));
  block13.display();
  block14.display();
  block15.display();

  fill(rgb(139,0,139));
  block16.display()

  fill("lime");

  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  fill("lightGreen");
  block22.display();
  block23.display();
  block24.display();

  fill("green");
  block25.display();

  ground1.display();
  ground2.display();
  ground3.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score(); 
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();



  textSize(24);
  fill(txtcolor)
  textStyle(BOLD);
  textFont("arial");
  text("Score : "+score,70,460);

  textSize(50);
  fill(rgb(26, 26, 255));
  textStyle(BOLD);
  textFont("segoe script");
  text("AKSHAY'S TOWER SIEGE-3 2020",250,80);

  fill(rgb(77,77,0));
  textSize(20);
  textStyle(BOLD);
  textFont("arial");
  text("Drag the hexagonal stone to release it,",50,320);

  fill(rgb(77,77,0));
  textSize(20);
  textStyle(BOLD);
  textFont("arial");
  text("to launch it towards the block,",50,350);

  imageMode(CENTER);
  image(hexImg, ball.position.x, ball.position.y, 50, 45);

  chain.display();

}

function mouseDragged() {

  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});

}


function mouseReleased() {

  chain.fly();

}

function keyPressed(){
  if (keyCode === 32){
      chain.attach(this.ball)

  }
} 


async function fetchtime()
{
    var time=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var data=await time.json();
    console.log(data);
    var hour=data.datetime.slice(11,13);
    if(hour>=6&&hour<=18)
    {
      bg=color("azure");
      txtcolor=color("black")
    
    }
    else{
       bg=color("black")
       txtcolor=color("white")
    }

}


