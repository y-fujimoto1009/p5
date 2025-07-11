let animationStep = 0;
const TOTAL_STEPS = 180; 

function setup() {
  createCanvas(400, 400);
  frameRate(60);
  noLoop(); 
  setTimeout(() => loop(), 1000); 
}

function draw() {
  background(255); 
  
  
  const primaryBlue = color(0, 56, 147);
  const accentRed = color(200, 16, 46);
  
  
  push();
  translate(width/2, height/2);
  
  
  if (animationStep >= 0) {
    const growth = constrain(animationStep/30, 0, 1);
    noFill();
    strokeWeight(8);
    stroke(primaryBlue);
    const circleSize = lerp(10, 200, growth);
    ellipse(0, 0, circleSize, circleSize);
  }
  
  
  if (animationStep >= 30) {
    const reveal = constrain((animationStep-30)/30, 0, 1);
    fill(accentRed);
    noStroke();
    const size = lerp(0, 120, reveal);
    beginShape();
    vertex(0, -size/2);
    vertex(size/2, 0);
    vertex(0, size/2);
    vertex(-size/2, 0);
    endShape(CLOSE);
  }
  
  
  if (animationStep >= 60) {
    const fade = constrain((animationStep-60)/60, 0, 1);
    fill(primaryBlue, fade * 255);
    noStroke();
    textSize(24);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text("大阪産業大学", 0, 150);
  }
  
  pop();
  
  
  if (animationStep < TOTAL_STEPS) {
    animationStep++;
  } else {
    noLoop(); 
  }
}