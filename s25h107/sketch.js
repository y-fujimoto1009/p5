let x = 92;
let y = 250;
let x1 = 189;
let y1 = 250;
let fontSize = 25;

let speedx = 2;
let speedy = -2;
let speedx1 = -0.3;
let speedy1 = -2;

function setup(){
  createCanvas(400,400);
  frameRate(60);
}
function draw(){
  background(255);
  
  textSize(25);
  fill(0)
  
  text("SAKA      ANGYO",110,250);
  text("UNIVERSITY",120,280);
  textdraw1();
  textdraw2();
  if (frameCount > 100) {
    clear();
  }
  textdraw3();
}

function textdraw1() {
  fill(30,0,255);
  textSize(fontSize);
  text("O",x,y);
  if (y > 170 ) {
    x += speedx;
    y += speedy;
    fontSize += 1.5
    
  }
  
}

function textdraw2() {
  fill(30,0,255);
  text("S",x1,y1);
  if (y > 170) {
  x1 += speedx1
  y1 += speedy1
  }
}
function textdraw3() {
    textSize(25);
  fill(30,0,255)
  if(frameCount >100) {
  text("大阪産業大学",120,250);
    
  textSize(85);
  text("O",170,170);
  
  translate(165,110)
  rotate(radians(90))
  textSize(100)
  text("S",0,0)
    
  }
}