let angle = 0;
let scaleFactor = 1;
let growing = true;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  noStroke();
}

function draw() {
  background(10);
  drawStars();

  translate(width / 2, height / 2);
  rotate(angle);
  scale(scaleFactor);

  drawLogo();

  angle += 0.5;

  // 拡大・縮小アニメーション
  if (growing) {
    scaleFactor += 0.002;
    if (scaleFactor > 1.05) growing = false;
  } else {
    scaleFactor -= 0.002;
    if (scaleFactor < 0.95) growing = true;
  }
}

function drawStars() {
  for (let i = 0; i < 50; i++) {
    fill(255);
    ellipse(random(width), random(height), random(1, 3));
  }
}

function drawLogo() {
  fill(33, 33, 120);

  // 中央の円
  ellipse(0, 0, 120);

  // 左右の小円
  ellipse(-80, 0, 40);
  ellipse(80, 0, 40);

  // 中央の斜め線（白抜き風に重ねる）
  fill(10);
  push();
  rotate(-20);
  rect(-70, -10, 140, 20);
  pop();
}