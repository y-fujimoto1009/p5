let step = 0;
let textStr = "大阪産業大学";

function setup() {
  createCanvas(400, 400);
  frameRate(60);
  textAlign(CENTER, CENTER);
  textSize(22);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  stroke(10, 30, 100);
  strokeWeight(10);
  fill(255);

  // 小円（左）
  let leftX = step < 30 ? 0 + step * 5 : 150;
  circle(leftX, 200, 50);

  // 小円（右）
  if (step >= 30) {
    let rightX = step < 60 ? 400 - (step - 30) * 5 : 250;
    circle(rightX, 200, 50);
  }

  // 大円（中心）
  if (step > 60) {
    let t = constrain((step - 60) / 30, 0, 1);
    let y = lerp(-100, 200, t);
    let size = lerp(0, 90, t);
    circle(200, y, size);
  }

  // 斜めライン
  if (step > 90) {
    let t2 = constrain((step - 90) / 20, 0, 1);
    let x1 = 160;
    let y1 = 225;
    let x2 = lerp(160, 240, t2);
    let y2 = lerp(230, 175, t2);
    line(x1, y1, x2, y2);
  }

  // テキスト：一文字ずつ出てくる
  if (step > 120) {
    let baseFrame = step - 120;
    let delayPerChar = 8; // 文字ごとの遅延（フレーム数）
    let xStart = width / 2 - (textStr.length * 12); // 中央揃え

    noStroke();
    for (let i = 0; i < textStr.length; i++) {
      let appearFrame = delayPerChar * i;
      if (baseFrame >= appearFrame) {
        let alpha = constrain((baseFrame - appearFrame) / 10, 0, 1) * 255;
        fill(10, 30, 100, alpha);
        text(textStr[i], xStart + i * 24, 300);
      }
    }
  }

  step++;
}
