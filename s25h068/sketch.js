let step = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(60);
  angleMode(DEGREES);
  background(255);
}

function draw() {
  background(255);
  stroke(10, 30, 100);
  strokeWeight(10);
  noFill();

  // ---- 1. 小さい円（左）を描画 ----
  if (step >= 0 && step < 60) {
    let progress = step / 60;
    let maxAngle = progress * 360;
    push();
    translate(150, 200);
    for (let a = 0; a < maxAngle; a++) {
      let x1 = 25 * cos(a);
      let y1 = 25 * sin(a);
      let x2 = 25 * cos(a + 1);
      let y2 = 25 * sin(a + 1);
      line(x1, y1, x2, y2);
    }
    pop();
  } else if (step >= 60) {
    push();
    translate(150, 200);
    circle(0, 0, 50); // 完成したらそのまま表示
    pop();
  }

  // ---- 2. 小さい円（右）を描画 ----
  if (step >= 60 && step < 120) {
    let progress = (step - 60) / 60;
    let maxAngle = progress * 360;
    push();
    translate(250, 200);
    for (let a = 0; a < maxAngle; a++) {
      let x1 = 25 * cos(a);
      let y1 = 25 * sin(a);
      let x2 = 25 * cos(a + 1);
      let y2 = 25 * sin(a + 1);
      line(x1, y1, x2, y2);
    }
    pop();
  } else if (step >= 120) {
    push();
    translate(250, 200);
    circle(0, 0, 50);
    pop();
  }

  // ---- 3. 大きい円（中央）を描画 ----
  if (step >= 120 && step < 210) {
    let progress = (step - 120) / 90;
    let maxAngle = progress * 360;
    push();
    translate(200, 200);
    // 白い背景（塗りつぶし）
    noStroke();
    fill(255);
    circle(0, 0, 90);
    noFill();
    stroke(10, 30, 100);
    strokeWeight(10);
    for (let a = 0; a < maxAngle; a++) {
      let x1 = 45 * cos(a);
      let y1 = 45 * sin(a);
      let x2 = 45 * cos(a + 1);
      let y2 = 45 * sin(a + 1);
      line(x1, y1, x2, y2);
    }
    pop();
  } else if (step >= 210) {
    push();
    translate(200, 200);
    fill(255);
    circle(0, 0, 90);
    noFill();
    stroke(10, 30, 100);
    strokeWeight(10);
    circle(0, 0, 90);
    pop();
  }

  // ---- 4. 斜め線を描く ----
  if (step >= 210 && step < 240) {
    let t = (step - 210) / 30;
    let x1 = 160;
    let y1 = 225;
    let x2 = lerp(160, 240, t);
    let y2 = lerp(230, 175, t);
    line(x1, y1, x2, y2);
  } else if (step >= 240) {
    line(160, 225, 240, 175);
  }

  // ---- 5. テキスト（フェードイン）----
  if (step > 240) {
    let t = constrain((step - 240) / 60, 0, 1);
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