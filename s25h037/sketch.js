let angle = 0;
let step = 0;
let startFrame = -1;

function setup() {
  createCanvas(400, 400);
  background(255);
  stroke(0, 64, 152);
  strokeWeight(10);
  noFill();
  angleMode(DEGREES);
  frameRate(60);
}

function draw() {
  background(255);
  translate(width / 2, height / 2);

  // Step 0: 中央の円
  if (step === 0) {
    let startAngle = 210;
    let endAngle = startAngle + angle;
    arc(0, 0, 90, 90, startAngle, endAngle);
    angle += 3;
    if (angle >= 360) {
      angle = 0;
      step = 1;
    }
    return;
  }

  arc(0, 0, 90, 90, 210, 210 + 360);

  // Step 1: 左小円
  if (step === 1) {
    let startAngle = 295;
    let maxAngle = 220;
    let currentAngle = min(angle, maxAngle);
    let endAngle = startAngle - currentAngle;
    arc(-50, 0, 50, 50, endAngle, startAngle);
    angle += 4;
    if (angle >= maxAngle) {
      angle = 0;
      step = 2;
    }
    return;
  }

  arc(-50, 0, 50, 50, 295 - 220, 295);

  // Step 2: 斜め線
  if (step === 2) {
    let x1 = -35, y1 = 20;
    let x2 = 35, y2 = -20;
    let progress = angle / 30;
    let x = lerp(x1, x2, progress);
    let y = lerp(y1, y2, progress);
    line(x1, y1, x, y);
    angle += 1;
    if (angle >= 30) {
      angle = 0;
      step = 3;
    }
    return;
  }

  line(-35, 20, 35, -20);

  // Step 3: 右小円
  if (step === 3) {
    let startAngle = 245;
    let maxAngle = 220;
    let currentAngle = min(angle, maxAngle);
    let endAngle = startAngle + currentAngle;
    arc(50, 0, 50, 50, startAngle, endAngle);
    angle += 4;
    if (angle >= maxAngle) {
      angle = 0;
      step = 4;
      startFrame = frameCount;
    }
    return;
  }

  arc(50, 0, 50, 50, 245, 245 + 220);

  // Step 4:完成＋文字
  arc(-50, 0, 50, 50, 295 - 220, 295);
  arc(50, 0, 50, 50, 245, 245 + 220);
  line(-35, 20, 35, -20);
  arc(0, 0, 90, 90, 210, 210 + 360);

  // 文字をフェードイン
  let fadein = 60;
  let alpha = constrain(frameCount - startFrame, 0, fadein) * (255 / fadein);

  push();
  noStroke();
  fill(0, alpha);
  textAlign(CENTER, CENTER);
  textSize(24);
  text("大阪産業大学", 0, 90);
  pop();
}