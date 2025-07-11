let x = 180 - 100
let y = 200
let x2 = 270 - 100
 let x3 = 90 - 100
let r = 140
let r2 = 70
let xl = 120 - 100
let yl = 235
let xl2 = 250 - 100
let yl2 = 160
let timestamp = 0




function draw() {
  background(220);
  rogo();
 
}

function rogo(){
  fill(0, 64, 152);
  circle(x, y, r + 20);
  circle(x + 90, y, r2 + 20);
  circle(x - 90, y, r2 + 20);
  fill(255, 255, 255);
  noStroke(255, 255, 255);
  
  circle(x2, y, r2);
  circle(x3, y, r2);
  circle(x, y, r);//円の中心
  strokeWeight(22);
  stroke(0, 64, 152);
  line(xl, yl, xl2, yl2);
  // x += 2
//x2 += 2
//x3 += 2
//xl += 2
//xl2 += 2
}


function setup() {
  createCanvas(400, 400);
setInterval(yure, 500);
  setInterval(yure2, 510);
setTimeout(stopAnimation, 1950);
textSize(32);
  textAlign(CENTER, CENTER);
  

}

function draw() {
  background(255);
  rogo();
  fill(0);
noStroke();
  text("大阪産業大学", 200, 350);
 
}

function rogo(){
  fill(0, 64, 152);
  strokeWeight(22);
  circle(x + 90, y, r2 + 20);
  circle(x - 90, y, r2 + 20);
  fill(255, 255, 255);
  noStroke(255, 255, 255);
  
  circle(x2, y, r2);
  circle(x3, y, r2);
  
  fill(0, 64, 152);
  circle(x, y, r + 30);
  fill(255, 255, 255);
  noStroke(255, 255, 255);
  circle(x, y, r - 10);//円の中心
  
  stroke(0, 64, 152);
  line(xl, yl, xl2, yl2);
  
  
 
x += 1
x2 += 1
x3 += 1
xl += 1
xl2 += 1  
  
  
}
function yure(){
  y += 10
  yl += 10
  yl2 += 10
  
}
function yure2(){
  y -= 10
  yl -= 10
  yl2 -= 10
}
function stopAnimation(){
  yure = noLoop();
  yure2 = noLoop();
 
}

 
