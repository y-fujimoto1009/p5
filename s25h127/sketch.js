let step = 0;
leftX = 25;
midX = 70;
rightX = 115;

function setup() {
createCanvas(400, 400);
frameRate(60);
}

function draw() {
  
  background(255);
  stroke(0, 64, 152);
  strokeWeight(10);
  fill(255);
  
  let smallSize = lerp(0, 35, min(step / 60, 1));
  circle(leftX, 200, smallSize);
  circle(rightX, 200, smallSize);
  
  
  if(step > 60){
    let bigSize = lerp(0, 75, constrain((step - 60) / 30, 0, 1));
    circle(midX, 200, bigSize);
  }
  
  if (step > 90) {
    let x1 = 40;
    let y1 = 215;
    let x2 = lerp(40, 100,         constrain((step - 90) / 30, 0, 1));
    let y2 = lerp(215, 185, constrain((step - 90) / 30, 0, 1));
    line(x1, y1, x2, y2);
  }
  
      
  if (step > 120) {
    let moveX = lerp(550, 260, constrain((step - 150) / 40, 0, 1));
    fill(0);
    noStroke();
    textSize(40);
    textAlign(CENTER);
    text("大阪産業大学", moveX, 215);
  }
  
  step++;
  
}