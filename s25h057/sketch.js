let alpha = 0;
let scaleFactor = 0.5;
let gearAngle = 0;

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
  textSize(48);
}

function draw() {
  background(255);

  push();
  translate(width/2, height/2 - 50);
  rotate(radians(gearAngle));
  drawGear(0, 0, 100, 20, 12);
  pop();

  gearAngle += 1;

  if (alpha < 255) {
    alpha += 2;
    scaleFactor += 0.002;
  }

  push();
  translate(width/2, height/2 + 150);
  scale(scaleFactor);
  fill(0, alpha);
  text("OSAKA SANGYO", 0, -20);
  text("UNIVERSITY", 0, 30);
  pop();
}

function drawGear(x, y, radius, toothHeight, numTeeth) {
  let angleStep = TWO_PI / (numTeeth * 2);
  beginShape();
  for (let i = 0; i < numTeeth * 2; i++) {
    let r = (i % 2 == 0) ? radius + toothHeight : radius;
    let angle = i * angleStep;
    vertex(x + cos(angle) * r, y + sin(angle) * r);
  }
  endShape(CLOSE);
}