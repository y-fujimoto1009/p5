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
  // 白い六角形
  fill(255);
  beginShape();
  for (let i = 0; i < 6; i++) {
    let x = 60 * cos(60 * i - 30);
    let y = 60 * sin(60 * i - 30);
    vertex(x, y);
  }
  endShape(CLOSE);

  // 六角形の中に小さい金色の星
  fill(255, 215, 0);
  drawStar(0, 0, 10, 25, 5);

  // 外周の円形ライン
  noFill();
  stroke(200);
  strokeWeight(2);
  ellipse(0, 0, 130);
  noStroke(); // リセット
}

function drawStar(x, y, radius1, radius2, npoints) {
  let angle = 360 / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < 360; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}