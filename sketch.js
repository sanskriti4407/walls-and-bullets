var bullet,wall,thick;
var speed,weight;
var damage;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thick=random(22,83);
  bullet = createSprite(500, 200, 30, 10);
  wall = createSprite(1200,200,thick,height/2);
  wall.shapeColor=(80,80,80);
 bullet.velocityX=speed;
 bullet.shapeColor=("white");
  
}

function draw() {
  background(0);  
  drawSprites();
 
 if(collided(wall,bullet)){
   bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thick*thick*thick);
  if(damage<12){
     wall.shapeColor=("green");
  }
   if(damage>12){
    wall.shapeColor=("red");
  }
 }
 
}
function collided(wall,car){
 
 if(wall.x-car.x<(car.width+wall.width)){

  return true
 }
 return false;
 }

