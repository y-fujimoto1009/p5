let step = 0;
let t = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(60);
  textFont('sans-serif');
}

function draw() {
  drawBackground();

  stroke(10, 30, 100);
  strokeWeight(10);
  fill(255);

  // 小円アニメーション（左右から）
  let leftX = lerp(0, 150, min(step / 60, 1));
  let rightX = lerp(400, 250, min(step / 60, 1));
  circle(leftX, 200, 50);
  circle(rightX, 200, 50);

  // 大円アニメーション（拡大）
  let bigSize = lerp(0, 90, constrain((step - 60) / 30, 0, 1));
  if (step > 60) {
    circle(200, 200, bigSize);
  }

  // 斜めラインアニメーション（線が伸びる）
  if (step > 90) {
    let x1 = 160;
    let y1 = 225;
    let x2 = lerp(160, 240, constrain((step - 90) / 30, 0, 1));
    let y2 = lerp(230, 175, constrain((step - 90) / 30, 0, 1));
    line(x1, y1, x2, y2);
  }

  // テキストアニメーション（フェード＋拡大）
  if (step > 120) {
    t = constrain((step - 120) / 60, 0, 1);
    let moveY = lerp(20, 0, t);
    let alpha = t * 255;
    let fontSize = lerp(10, 32, t);

    fill(10, 30, 100, alpha);
    noStroke();
    textSize(fontSize);
    textAlign(CENTER);
    text("大阪産業大学", width / 2, 300 + moveY);
  }

  step++;

  // 自動リスタート
  if (step > 300) {
    step = 0;
  }
}

// 背景グラデーションを描く関数
function drawBackground() {
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(color(255, 255, 255), color(200, 220, 255), inter);
    stroke(c);
    line(0, y, width, y);
  }
}
