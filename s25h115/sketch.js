let step = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(60);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  translate(width / 2, height / 2);

  // Animate petals one by one
  // Each scale factor grows from 0 to 1
  let s1 = constrain((step - 0) / 15, 0, 1);
  let s2 = constrain((step - 15) / 15, 0, 1);
  let s3 = constrain((step - 30) / 15, 0, 1);
  let s4 = constrain((step - 45) / 15, 0, 1);

  noStroke();

  // Top left - green
  fill(0, 150, 0);
  let leftX1 = lerp(0, -30, s1);
  let leftY1 = lerp(0, -30, s1);
  let size1 = lerp(0, 60, s1);
  ellipse(leftX1, leftY1, size1, size1);

  // Top right - blue
  fill(0, 100, 200);
  let rightX1 = lerp(0, 30, s2);
  let rightY1 = lerp(0, -30, s2);
  let size2 = lerp(0, 60, s2);
  ellipse(rightX1, rightY1, size2, size2);

  // Bottom left - blue
  fill(0, 100, 200);
  let leftX2 = lerp(0, -30, s3);
  let leftY2 = lerp(0, 30, s3);
  let size3 = lerp(0, 60, s3);
  ellipse(leftX2, leftY2, size3, size3);

  // Bottom right - green
  fill(0, 150, 0);
  let rightX2 = lerp(0, 30, s4);
  let rightY2 = lerp(0, 30, s4);
  let size4 = lerp(0, 60, s4);
  ellipse(rightX2, rightY2, size4, size4);

  // Text fade-in
  if (step > 60) {
    let t = constrain((step - 60) / 30, 0, 1);
    let moveY = lerp(20, 0, t);
    let alpha = t * 255;
    fill(10, 30, 100, alpha);
    noStroke();
    textSize(22);
    textAlign(CENTER);
    text("OSAKA SANGYO", 0, 80 + moveY);
    text("UNIVERSITY", 0, 105 + moveY);
  }

  step++;
}
