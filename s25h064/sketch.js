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

  //  小円アニメーション（斜めから登場）
  let t1 = min(step / 60, 1);
  let leftX = lerp(-50, 150, t1);
  let leftY = lerp(400, 200, t1); // 左下から
  let rightX = lerp(450, 250, t1);
  let rightY = lerp(0, 200, t1);  // 右上から
  circle(leftX, leftY, 50);
  circle(rightX, rightY, 50);

  //  大円アニメーション（パルス拡大）
  if (step > 60) {
    let t2 = constrain((step - 60) / 30, 0, 1);
    let bigSize = lerp(0, 90, t2) + sin(step * 0.1) * 5; // パルス効果
    circle(200, 200, bigSize);
  }

  //  波線アニメーション（波打ちながら伸びる）
  if (step > 90) {
    let t3 = constrain((step - 90) / 30, 0, 1);
    let x1 = 160;
    let y1 = 225;
    let x2 = lerp(160, 240, t3);
    let y2 = lerp(230, 175, t3) + sin(step * 0.2) * 5; // 波線
    line(x1, y1, x2, y2);
  }

  //  テキストアニメーション（右からスライド＆フェードイン）
  if (step > 120) {
    let t4 = constrain((step - 120) / 60, 0, 1);
    let moveX = lerp(50, 0, t4);
    let alpha = t4 * 255;
    fill(10, 30, 100, alpha);
    noStroke();
    textSize(22);
    textAlign(CENTER);
    text("大阪産業大学", width / 2 + moveX, 300);
  }

  step++;
}
