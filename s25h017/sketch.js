let x; 
let stopx;
function setup() {
  createCanvas(400,400);
  textSize(36);
  frameRate(60);
  x = -200;
  stopx = 122
}

function draw() {
  background(220);
  rogo();
  
function rogo(){
  background(220);
  fill(0,64,153)
  noStroke()
  circle(42, 188, 30);  
  circle(96, 188, 30);  
  fill(220)
  circle(42,188,15);
  circle(96,188,15);
  fill(0,64,153)
  circle(69, 188, 50);
  fill(220)
  circle(69,188,35);
  stroke(0,64,153)
  strokeWeight(7)
  line(47,197,96,177)
}
  strokeWeight(0);
  fill(0);
  text("大阪産業大学", x, height / 2);

  if (x <stopx){
  x += 4; 
  }
}




