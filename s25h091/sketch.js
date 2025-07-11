let sizeFactor = 0;
let textAlpha = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(60);
}

function draw() {
  background(255);
  translate(width / 2, height / 2);
  noFill();
  stroke(30, 30, 130); // 濃い青
  strokeWeight(20);

  // アニメーションの進行度
  if (sizeFactor < 1) {
    sizeFactor += 0.01;
  } else if (textAlpha < 255) {
    textAlpha += 2;
  }

  // 大きな円
  ellipse(0, 0, 200 * sizeFactor, 200 * sizeFactor);

  // 左右の円
  ellipse(-80 * sizeFactor, 0, 80 * sizeFactor, 80 * sizeFactor);
  ellipse(80 * sizeFactor, 0, 80 * sizeFactor, 80 * sizeFactor);

  // 斜線
  strokeCap(SQUARE);
  line(-70 * sizeFactor, 70 * sizeFactor, 70 * sizeFactor, -70 * sizeFactor);

  // テキスト表示
  noStroke();
  fill(30, 30, 130, textAlpha);
  textAlign(CENTER);
  textSize(24);
  text("大阪産業大学", 0, 160);
}