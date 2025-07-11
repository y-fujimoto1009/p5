let step = 0;
let fadeProgress = 0; 
let fadeSpeed = 0.01; 

function setup() {
  createCanvas(400, 400);
  frameRate(60);
}

function draw() {
  if (step > 50 && fadeProgress < 1) {
    fadeProgress += fadeSpeed;
  }
  let startColor = color(255);
  let endColor = color(180);   
  let bgColor = lerpColor(startColor, endColor, fadeProgress);
  background(bgColor);

  stroke(10, 30, 100);
  strokeWeight(10);
  fill(255);

  let angle = map(min(step / 100, 1), 0, 1, 0, TWO_PI);
  let radius = 50;
  let leftX = width / 2 + cos(angle) * radius;
  let rightX = width / 2 + cos(angle + PI) * radius;
  circle(leftX, height / 2, 50);
  circle(rightX, height / 2, 50);

  let bigSize = lerp(0, 90, constrain((step - 60) / 30, 0, 1));
  if (step > 60) {
    circle(200, 200, bigSize);
  }
  
  if (step > 90) {
    let progress = constrain((step - 90) / 15, 0, 1);
    let x2 = lerp(160, 240, progress);
    let y2 = lerp(230, 175, progress);
    line(160, 225, x2, y2);
  }

  if (step > 120) {
    let t = constrain((step - 120) / 60, 0, 1);
    let moveX = lerp(-20, 1, t); 
    let alpha = t * 255; 
    fill(10, 30, 100, alpha);
    noStroke();
    textSize(30);
    textAlign(CENTER);
  
    text("大阪産業大学", width / 2 + moveX, 300);
  }

  step++;
}