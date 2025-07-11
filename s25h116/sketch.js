let y;
let vy;
let gravity = 0.5;
let bounce = -0.7;
let alpha = 0;
let textAlpha = 0;

function setup() {
  createCanvas(400, 400);
  y = height;
  vy = -10;
  textFont('sans-serif'); // 
  textAlign(CENTER, CENTER);
}

function draw() {
  background(255);

  vy += gravity;
  y += vy;

  if (y > height - 80) {
    y = height - 80;
    vy *= bounce;
  }

  // アルファ値を徐々に上げて、ロゴ＆文字が現れるように
  if (alpha < 255) {
    alpha += 5;
  }

  if (alpha > 100 && textAlpha < 255) {
    textAlpha += 4; // ロゴよりちょっと遅れて現れる
  }

  drawLogo(width / 2, y, alpha);
  drawText(width / 2, y + 60, textAlpha); // ロゴの下に表示
}

function drawLogo(x, y, alphaVal) {
  push();
  translate(x, y);
  scale(1.5);

  let logoColor = color(0, 70, 140, alphaVal);

  // 中央円（空洞）
  stroke(logoColor);
  strokeWeight(8);
  noFill();
  ellipse(0, 0, 60, 60);

  // 左右円（空洞）
  ellipse(-40, 0, 30, 30);
  ellipse(40, 0, 30, 30);

  // 青い斜め線
  push();
  rotate(radians(-20));
  stroke(logoColor);
  strokeWeight(10);
  line(-35, 0, 35, 0);
  pop();

  pop();
}

function drawText(x, y, alphaVal) {
  fill(0, 70, 140, alphaVal); // ロゴと同じ青色
  textSize(24);
  text("大阪産業大学", x, y);
}