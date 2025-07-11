let step = 0;
let angle = 0;
let radius = 40;   // ギザギザの基本半径
let jagCount = 16; // ギザギザの数

function setup() {
  createCanvas(400, 400);
  frameRate(60);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  strokeWeight(10);

  // 小さな円（変更なし）
  stroke(10,30,100);
  noFill();
  circle(145, 200, 50);
  circle(245, 200, 50);

  push();
  translate(200, 200);

  if (step <= 120) {
    // ギザギザの円：回転しながら表示（2秒間）
    angle += 1;
    rotate(angle);
    stroke(10, 30, 100, 255);
    fill(255);
    beginShape();
    for (let i = 0; i < jagCount; i++) {
      let a = map(i, 0, jagCount, 0, 360);
      let r = (i % 2 == 0) ? radius + 15 : radius - 10;
      let x = cos(a) * r;
      let y = sin(a) * r;
      vertex(x, y);
    }
    endShape(CLOSE);

  } else if (step > 120 && step <= 210) {
    // ギザギザの円：フェードアウト（1.5秒）
    let alpha = map(step, 121, 210, 255, 0);
    let circleAlpha = map(step, 121, 210, 0, 255); // 同時に普通の円をフェードイン
    angle += 1;
    rotate(angle);

    // ギザギザの円
    stroke(10, 30, 100, alpha);
    fill(255, alpha);
    beginShape();
    for (let i = 0; i < jagCount; i++) {
      let a = map(i, 0, jagCount, 0, 360);
      let r = (i % 2 == 0) ? radius + 15 : radius - 10;
      let x = cos(a) * r;
      let y = sin(a) * r;
      vertex(x, y);
    }
    endShape(CLOSE);

    // 普通の丸い円（同時にフェードイン）
    stroke(10, 30, 100, circleAlpha);
    fill(255, circleAlpha);
    circle(0, 0, (radius + 15) * 2 * 0.7);

  } else if (step > 210) {
    // フェードイン完了後は普通の円をそのまま表示
    stroke(10, 30, 100);
    fill(255);
    circle(0, 0, (radius + 15) * 2 * 0.7);
  }

  pop();

  // 斜めラインアニメーション（線が伸びる）
  if (step > 90) {
    stroke(10, 30, 100);
    strokeWeight(10);
    let x1 = 160;
    let y1 = 220;
    let x2 = lerp(160, 230, constrain((step - 90) / 30, 0, 1));
    let y2 = lerp(230, 178, constrain((step - 90) / 30, 0, 1));
    line(x1, y1, x2, y2);
  }

  // テキストアニメーション（フェードイン）
if (step > 120) {
  let t = constrain((step - 120) / 60, 0, 1); // アニメーションの進行割合（0〜1）
  let alpha = t * 255;

  let textContent = "大阪産業大学";

  textSize(22);
  textAlign(CENTER, CENTER);
  let textW = textWidth(textContent);
  let textH = 28;  // おおよそのテキスト高さ

  push();
  translate(width / 2, 300);  // Yは固定
  fill(10, 30, 100, alpha);
  noStroke();

  drawingContext.save();
  drawingContext.beginPath();
  // 下から上へ伸ばすクリップ領域（Yの位置はテキストの中心基準）
  drawingContext.rect(-textW / 2, textH / 2 - textH * t, textW, textH * t);
  drawingContext.clip();

  text(textContent, 0, 0);
  drawingContext.restore();
  pop();
}

  step++;
}