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

  // 大円アニメーション (中心から拡大後、左右に分かれる)
  let initialBigSize = lerp(0, 90, min(step / 60, 1)); // まず中心で大きく広がる
  if (step <= 60) {
    circle(200, 200, initialBigSize);
  }

  // 小円アニメーション (大円が左右に分かれるように変化)
  if (step > 60) {
    let currentStepForSmallCircles = step - 60; // 小円のアニメーション開始からのステップ
    let leftX = lerp(200, 150, min(currentStepForSmallCircles / 30, 1)); // 中心から左へ
    let rightX = lerp(200, 250, min(currentStepForSmallCircles / 30, 1)); // 中心から右へ
    circle(leftX, 200, 50); // 左の小円
    circle(rightX, 200, 50); // 右の小円

    // 分かれた後に、元のコードの大円が重なって表示されるように調整
    let bigSizeAfterSplit = 90; // 分かれた後も大円は最終サイズで表示
    circle(200, 200, bigSizeAfterSplit);
  }


  // 斜めラインアニメーション (線が伸びる)
  // タイミングを調整し、小円と大円が揃った後に表示
  if (step > 90) { // 小円が左右に分かれ終わるステップ（60+30=90）以降
    let currentStepForLine = step - 90;
    let x1 = 160;
    let y1 = 225;
    let x2 = lerp(160, 240, constrain(currentStepForLine / 30, 0, 1));
    let y2 = lerp(230, 175, constrain(currentStepForLine / 30, 0, 1));
    line(x1, y1, x2, y2);
  }

  // テキストアニメーション (フェードイン)
  // 斜め線が表示され終わるステップ（90+30=120）以降
  if (step > 120) {
    let currentStepForText = step - 120;
    let t = constrain(currentStepForText / 60, 0, 1);
    let moveY = lerp(20, 0, t);
    let alpha = t * 255;
    fill(10, 30, 100, alpha);
    noStroke();
    textSize(22);
    textAlign(CENTER);
    text("大阪産業大学", width / 2, 300 + moveY);
  }

  step++;
}