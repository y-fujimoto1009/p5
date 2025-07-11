let step = 0;
let finalFrame = 200; // このフレームで止まる

function setup() {
  createCanvas(400, 400);
  frameRate(60);
}

function draw() {
  background(255);
  stroke(10, 30, 100);
  strokeWeight(10);
  fill(255);

  let drawStep = min(step, finalFrame); // stepがfinalFrame以降も止める

  // 小円（上下から出現 → 固定）
  let circleT = min(drawStep / 60, 1);
  let circleEase = easeOutBounce(circleT);
  let topY = 200 - abs(sin(60 / 20) * 50);   // 固定Y
  let bottomY = 200 + abs(sin(60 / 20) * 50); // 固定Y
  circle(150, lerp(0, topY, circleEase), 50);
  circle(250, lerp(400, bottomY, circleEase), 50);

  // 大円（拡大 → 固定サイズ）
  if (drawStep > 60) {
    let bigSize;
    if (drawStep < finalFrame) {
      bigSize = sin((drawStep - 60) / 10) * 10 + 80;
    } else {
      bigSize = 80; // 固定サイズ
    }
    circle(200, 200, bigSize);
  }

  if (drawStep > 90) {
    let progress = constrain((drawStep - 90) / 30, 0, 1);
    let zig = (drawStep < finalFrame) ? sin(drawStep / 5) * 5 : 0;
    let x1 = 160;
    let y1 = 225;
    let x2 = lerp(160, 240, progress);
    let y2 = lerp(230, 175, progress) + zig;
    line(x1, y1, x2, y2);
  }

  // テキスト（スライド＋拡大 → 固定）
  if (drawStep > 120) {
    let t = constrain((drawStep - 120) / 60, 0, 1);
    let moveY = lerp(30, 0, t);
    let scaleT = lerp(0.5, 1, t);
    let alpha = t * 255;
    push();
    translate(width / 2, 300 + moveY);
    scale(scaleT);
    fill(10, 30, 100, alpha);
    noStroke();
    textAlign(CENTER);
    textSize(22);
    text("大阪産業大学", 0, 0);
    pop();
  }

  // stepカウント停止（ロゴで止まる）
  if (step < finalFrame) {
    step++;
  }
}

function easeOutBounce(x) {
  const n1 = 7.5625;
  const d1 = 2.75;
  if (x < 1 / d1) {
    return n1 * x * x;
  } else if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75;
  } else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375;
  } else {
    return n1 * (x -= 2.625 / d1) * x + 0.984375;
  }
}
