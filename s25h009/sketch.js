let step = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(60);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(255);
  stroke(10, 30, 100);
  strokeWeight(10);
  fill(255);

  // 小円アニメーション（斜めから中央へ）
  let tSmall = min(step / 60, 1);
  let leftX = lerp(0, 150, tSmall);
  let leftY = lerp(0, 200, tSmall);
  let rightX = lerp(400, 250, tSmall);
  let rightY = lerp(400, 200, tSmall);
  circle(leftX, leftY, 50);
  circle(rightX, rightY, 50);

  // 大円アニメーション（上から中央へ拡大しながら降下）
  if (step > 60) {
    let tBig = constrain((step - 60) / 30, 0, 1);
    let bigY = lerp(0, 200, tBig);
    let bigSize = lerp(0, 90, tBig);
    circle(200, bigY, bigSize);
  }

  // 斜めラインアニメーション（線が伸びる）
  if (step > 90) {
    let tLine = constrain((step - 90) / 30, 0, 1);
    let x1 = 160, y1 = 225;
    let x2 = lerp(160, 240, tLine);
    let y2 = lerp(230, 175, tLine);
    line(x1, y1, x2, y2);
  }

  // テキストアニメーション（文字が少しずつ大きくなる）
  if (step > 120) {
    let t = constrain((step - 120) / 60, 0, 1);
    let size = lerp(22, 44, t); // フォントサイズの変化
    textSize(size);
    let alpha = t * 255; // フェードイン効果
    fill(10, 30, 100, alpha);
    noStroke();
    text("大阪産業大学", width / 2, 300);
  }

  step++;
}
