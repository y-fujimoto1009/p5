let ya = 200;
let yb = 180;
let yc = 160;
let yd = 140;
let ye = 120;
let yf = 100;
let circleX;
let circleY;
let speedX = -5
let speedY = -3


function setup() {
  createCanvas(400, 400);
  frameRate(10)
  circleX = 320;
  circleY = 40;
}
function draw() {
  background(220);
  drawSlope();
  
  fill(0)
  textSize(40);
 text("大",100,ya);
 text("阪",140,yb);
 text("産",180,yc);
 text("業",220,yd);
 text("大",260,ye);
 text("学",300,yf);
  
 fill(0,64,152);
  strokeWeight(0);
  circle(80,200,40);
  circle(20,200,40);
  fill(220)
  circle(80,200,25);
  circle(20,200,25);
  circle(50,200,60);
  fill(0,64,152);
  strokeWeight(0);
  ellipse(circleX,circleY,60,60)
  fill(220)
  ellipse(circleX,circleY,45,45)
  strokeWeight(8)
  stroke(0,64,152);
  line(25,215,75,185)
  
  
  if(circleY <=200){
    circleX += speedX;
    circleY -= speedY;
  }
   else{
     speedX = 0;
     speedY = 0;
     circleX = 50
    circleY = 200
   }
  if (circleX == 300){
    yf = 210
  }
  if (circleX == 260){
    ye = 210
  }
  if (circleX == 220){
    yd = 210
  }
  if (circleX == 180){
    yc = 210
  }
  if (circleX == 140){
    yb = 210
  }
  if (circleX == 100){
    ya = 210
  }


}
function drawSlope(){
  stroke(0)
  strokeWeight(0)
  line(0,225,width,25)
}