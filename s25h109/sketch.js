let step = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(60);
}

function draw() {
  background(255);
  step++;

  // 円が近づくアニメーション（左右から）
  if (step <= 60) {
    let leftX = lerp(0, 150, step / 60);
    let rightX = lerp(400, 250, step / 60);
    fill(50, 90, 200);
    noStroke();
    circle(leftX, 200, 60);
    circle(rightX, 200, 60);
  }

  // ロゴ風の形を描画（中央に登場）
  if (step > 60 && step <= 120) {
    let t = constrain((step - 60) / 60, 0, 1);
    fill(50, 90, 200);
    noStroke();
    ellipse(200, 200, lerp(0, 120, t), lerp(0, 60, t)); // 中央の結び目

    fill(255);
    ellipse(200, 200, lerp(0, 40, t), lerp(0, 20, t)); // 中抜き

    stroke(50, 90, 200);
    strokeWeight(4);
    line(170, 200, 230, 200); // 横棒
  }

  // テキストアニメーション（フェードイン＋スライド）
  if (step > 120) {
    let t = constrain((step - 120) / 60, 0, 1);
    let alpha = t * 255;
    let moveY = lerp(20, 0, t);

    noStroke();
    fill(50, 90, 200, alpha);
    textSize(20);
    textAlign(CENTER);
    text("大阪産業大学", width / 2, 320 + moveY);
  }
}