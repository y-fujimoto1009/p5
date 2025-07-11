let step = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(60);
}

function draw() {
  background(255);

  // 消失フェーズ用パラメータ
  let shrinkT = constrain((step - 180) / 40, 0, 1);
  let globalScale = lerp(1, 0.8, shrinkT);
  let globalAlpha = lerp(255, 0, shrinkT);

  push();
  translate(width / 2, height / 2);
  scale(globalScale); // 全体を縮小
  translate(-width / 2, -height / 2);

  stroke(10, 30, 100, globalAlpha);
  strokeWeight(10);
  fill(255, globalAlpha);

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

  // テキストアニメーション（フェードイン → 縮小＋消失）
  if (step > 120) {
    let t = constrain((step - 120) / 60, 0, 1); // フェードイン
    let moveY = lerp(20, 0, t);
    let textAlpha = globalAlpha * t;
    let textSizeVal = lerp(22, 10, shrinkT); // 消失時に小さく

    fill(10, 30, 100, textAlpha);
    noStroke();
    textSize(textSizeVal);
    textAlign(CENTER);
    text("大阪産業大学", width / 2, 300 + moveY);
  }

  pop();

  // ステップ更新
  step++;

  // ループ
  if (step > 220) {
    step = 0;
  }
}