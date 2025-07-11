let step = 0;
let textStr = "大阪産業大学";

function setup() {
  createCanvas(400, 400);
  frameRate(60);
}

function draw() {
  background(255);
  stroke(10, 30, 100);
  strokeWeight(10);
  fill(255);

  // 小円アニメーション
  let t = min(step / 60, 1);
  let leftY = lerp(0, 200, t);     // 左円：上から中央へ
  let rightY = lerp(400, 200, t);  // 右円：下から中央へ

  circle(150, leftY, 50);   // 左側の小円（上→中央）
  circle(250, rightY, 50);  // 右側の小円（下→中央）

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

  // テキストアニメーション（1文字ずつフェードイン）
  if (step > 120) {
    let baseX = width / 2;
    let baseY = 300;
    textSize(22);
    textAlign(CENTER, BASELINE);
    noStroke();

    let spacing = 22; // 文字の間隔
    let totalLength = textStr.length;
    let startX = baseX - ((totalLength - 1) * spacing) / 2;

    for (let i = 0; i < totalLength; i++) {
      let delay = 10 * i; // 文字ごとの表示ディレイ
      let t = constrain((step - 120 - delay) / 30, 0, 1);
      let alpha = t * 255;
      let moveY = lerp(20, 0, t);
      fill(10, 30, 100, alpha);
      text(textStr[i], startX + i * spacing, baseY + moveY);
    }
  }

  step++;
}
