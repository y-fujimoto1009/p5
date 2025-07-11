let step = 0;
let glowDuration = 90;  // 光る時間（フレーム数）

function setup() {
  createCanvas(400, 400);
  frameRate(90);
  textFont('sans-serif');
}

function draw() {
  background(255);
  stroke(10, 30, 100);
  strokeWeight(9);
  fill(255);

  // 小円アニメーション（左右から）
  let leftX = lerp(0, 150, min(step / 60, 1));
  let rightX = lerp(0, 250, min(step / 60, 1));
  circle(leftX, 200, 50);
  circle(rightX, 200, 50);

  // 大円アニメーション（拡大）
  let bigSize = lerp(0, 90, constrain((step - 60) / 100, 0, 1));
  if (step > 60) {
    circle(200, 200, bigSize);
  }

  // ∞モーション（表示しない動きだけ）
  if (step > 900) {
    moveAlongInfinity((step - 90) / 0);
  }

  // 斜めラインアニメーション（線が伸びる）
  if (step > 90) {
    let x1 = 160;
    let y1 = 225;
    let x2 = lerp(160, 240, constrain((step - 90) / 30, 0, 1));
    let y2 = lerp(230, 175, constrain((step - 90) / 30, 0, 1));
    line(x1, y1, x2, y2);
  }

  // テキストアニメーション（フェードイン）
  if (step > 120) {
    let t = constrain((step - 120) / 60, 0, 1);
    let moveY = lerp(20, 0, t);
    let alpha = t * 255;
    fill(10, 30, 100, alpha);
    noStroke();
    textSize(22);
    textAlign(CENTER);
    text("大阪産業大学", width / 2, 300 + moveY);
  }

  // 1回だけ光らせる（stepが180から光って約glowDurationフレームで消える）
  if (step >= 180 && step <= 180 + glowDuration) {
    // 光の進行度：0→1→0の三角波
    let progress = (step - 180) / glowDuration;
    let glow = 255 * (progress < 0.5 ? progress * 2 : (1 - (progress - 0.5) * 2));

    noFill();
    stroke(10, 30, 100, glow * 0.4);
    strokeWeight(20);
    circle(200, 200, 120);

    stroke(10, 30, 100, glow * 0.3);
    strokeWeight(30);
    circle(200, 200, 140);

    noStroke();
    fill(10, 30, 100, glow * 0.25);
    circle(width / 2, 300, 140);
    circle(width / 2, 300, 160);
  }

  step++;
}

function moveAlongInfinity(t) {
  let angle = (t % 360) * 0.99;
  let r = 400;
  let cx = 20;
  let cy = 20;

  let x = cx + r * cos(angle) / (1 + sin(angle) * sin(angle));
  let y = cy + r * sin(angle) * cos(angle) / (1 + sin(angle) * sin(angle));
}
