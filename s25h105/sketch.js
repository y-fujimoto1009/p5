let step = 0;
let bounceSpeed = 2;

// 小円の状態
let leftX = 0;
let rightX = 400;
let leftDir = 1;
let rightDir = -1;
let leftBounceCount = 0;
let rightBounceCount = 0;
let leftMoving = true;
let rightMoving = true;

function setup() {
  createCanvas(400, 400);
  frameRate(60);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  stroke(10, 30, 100);
  strokeWeight(10);
  fill(255);

  // === 小円バウンド（3回半＝7回反転） ===
  if (leftMoving) {
    leftX += bounceSpeed * leftDir;
    if (leftX < 0 || leftX > 150) {
      leftDir *= -1;
      leftBounceCount++;
      if (leftBounceCount >= 7) leftMoving = false;
    }
  }
  if (rightMoving) {
    rightX += bounceSpeed * rightDir;
    if (rightX > 400 || rightX < 250) {
      rightDir *= -1;
      rightBounceCount++;
      if (rightBounceCount >= 7) rightMoving = false;
    }
  }

  circle(leftX, 200, 50);
  circle(rightX, 200, 50);

  // === 大円アニメーション ===
  let bigSize = lerp(0, 90, constrain((step - 60) / 30, 0, 1));
  if (step > 60) {
    circle(200, 200, bigSize);
  }

  // === 回転ラインアニメーション（step 90〜149）===
  if (step > 90 && step <= 149) {
    let angle = lerp(0, 360, constrain((step - 90) / 60, 0, 1));
    let len = 70;
    let x1 = 200 + cos(angle) * len;
    let y1 = 200 + sin(angle) * len;
    let x2 = 200 + cos(angle + 180) * len;
    let y2 = 200 + sin(angle + 180) * len;
    line(x1, y1, x2, y2);
  }

  // === 回転後、斜めに戻る（step 150〜179）===
  if (step > 149 && step <= 179) {
    let t = constrain((step - 150) / 30, 0, 1);
    let x1 = lerp(200 + cos(0) * 70, 160, t);
    let y1 = lerp(200 + sin(0) * 70, 225, t);
    let x2 = lerp(200 + cos(180) * 70, 240, t);
    let y2 = lerp(200 + sin(180) * 70, 175, t);
    line(x1, y1, x2, y2);
  }

  // === 斜めライン固定 ===
  if (step >= 180) {
    line(160, 225, 240, 175);
  }

  // === テキストアニメーション ===
  if (step > 180) {
    let t = constrain((step - 180) / 60, 0, 1);
    let moveY = lerp(20, 0, t);
    let alpha = t * 255;
    fill(10, 30, 100, alpha);
    noStroke();
    textSize(22);
    textAlign(CENTER);
    text("大阪産業大学", width / 2, 300 + moveY);
  }

  step++;
}
