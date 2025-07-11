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
  // 小円アニメーション（左右から）
  let leftY = lerp(0, 200, min(step / 60, 1));
  let rightY = lerp(width, 200, min(step / 60, 1));
  circle(150, leftY, 50);
  circle(250, rightY, 50);
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
  // テキストアニメーション（フェードイン）
  if (step > 120) {
    let t = constrain((step - 120) / 60, 0, 1);
    let moveY = lerp(0, 20, t);
    let alpha = t * 255;
    fill(10, 30, 100, alpha);
    noStroke();
    textSize(22);
    textAlign(CENTER);
    text("大阪産業大学", width / 2, 300 + moveY);
  }
  step++;
}