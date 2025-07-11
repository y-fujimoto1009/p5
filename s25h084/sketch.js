let step = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(60);
}


function draw() {
  // 背景と座標変換の準備
  background(255);

  let zoom = 1;
  if (step > 120) {
    let t = (step - 120) / 30;
    if (t <= 2) {
      zoom = 1 + 0.5 * sin(PI * t); 
    }
  }

  push();
  translate(width / 2, height / 4);
  scale(zoom);
  translate(-width / 2, -height / 4);

  // 小円アニメーション（左右から）
  stroke(10, 30, 100);
  strokeWeight(10);
  fill(255);
  let leftX = lerp(0, 150, min(step / 60, 1));
  let rightX = lerp(400, 250, min(step / 60, 1));
  circle(leftX, 200, 50);
  circle(rightX, 200, 50);

  // 大円アニメーション（拡大）
  let bigSize = lerp(0, 90, constrain((step - 90) / 30, 0, 1));
  if (step > 90) {
    circle(200, 200, bigSize);
  }

  // 斜めラインアニメーション
  if (step > 60) {
    let x1 = 160;
    let y1 = 225;
    let x2 = lerp(160, 240, constrain((step - 60) / 30, 0, 1));
    let y2 = lerp(230, 175, constrain((step - 60) / 30, 0, 1));
    line(x1, y1, x2, y2);
  }

  // テキストアニメーション（フェードイン）
  if (step > 180) {
    let t = constrain((step - 180) / 60, 0, 1);
    let moveY = lerp(20, 0, t);
    let alpha = t * 255;
    fill(10, 30, 100, alpha);
    noStroke();
    textSize(40);
    textAlign(CENTER);
    text("大阪産業大学", width / 2, 290 + moveY);
  }

  pop(); 
  step++;
}
