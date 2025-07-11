let step = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(60);
}

function draw() {
  background(255);
  stroke(10, 30, 100);
  strokeWeight(10);
  fill(255);

  // 小円アニメーション（中央 → 左右に展開）
  let t = min(step / 60, 1);
  let offset = lerp(0, 50, t);
  circle(200 - offset, 200, 50);
  circle(200 + offset, 200, 50);

  // 大円アニメーション（拡大＋Y軸風回転）
  let bigSize = lerp(0, 90, constrain((step - 60) / 30, 0, 1));
  if (step > 60) {
    push();
    translate(200, 200);
    let scaleX = abs(sin(radians(step * 2)));
    scale(scaleX, 1);
    ellipse(0, 0, bigSize, bigSize);
    pop();
  }

  // 斜めラインアニメーション（step > 60 に変更）
  if (step > 60) {
    let progress = constrain((step - 60) / 30, 0, 1);
    let x1 = 160;
    let y1 = 225;
    let x2 = lerp(160, 240, progress);
    let y2 = lerp(230, 175, progress);
    line(x1, y1, x2, y2);
  }

  // テキストアニメーション（フェードイン＋浮上）
  if (step > 120) {
    let textT = constrain((step - 120) / 60, 0, 1);
    let moveY = lerp(20, 0, textT);
    let alpha = textT * 255;
    fill(10, 30, 100, alpha);
    noStroke();
    textSize(22);
    textAlign(CENTER);
    text("大阪産業大学", width / 2, 300 + moveY);
  }

  step++;

  // 3.8秒（=228フレーム）で完全停止
  if (step >= 228) {
    noLoop();
  }
}