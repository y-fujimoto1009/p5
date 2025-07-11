let step = 0;
let ripples = [];
let rippleCount = 0; // 波紋の発生回数（最大5）

function setup() {
  createCanvas(400, 400);
  frameRate(60);
  textFont("sans-serif");
}

function draw() {
  background(255);

  let zoom = 1;
  if (step > 160) {
    const zt = constrain((step - 160) / 60, 0, 1);
    zoom = 1 + easeOutExpo(zt) * 0.15;
  }

  push();
  translate(width / 2, height / 2);
  scale(zoom);
  translate(-width / 2, -height / 2);

  stroke(10, 30, 100);
  strokeWeight(10 / zoom);
  fill(255);

  // 小円（左右から）
  const p1 = easeOutExpo(constrain(step / 60, 0, 1));
  const leftX = lerp(0, 150, p1);
  const rightX = lerp(400, 250, p1);
  circle(leftX, 200, 50);
  circle(rightX, 200, 50);

  // 大円（拡大＋回転）
  if (step > 60) {
    const p2 = easeOutBack(constrain((step - 60) / 30, 0, 1));
    push();
    translate(200, 200);
    rotate(p2 * 360);
    drawCircle(0, 0, p2 * 90);
    pop();
  }

  // 斜めライン
  if (step > 90) {
    const p3 = easeOutQuad(constrain((step - 90) / 30, 0, 1));
    const x1 = 160, y1 = 225;
    const x2 = lerp(160, 240, p3);
    const y2 = lerp(230, 175, p3);
    line(x1, y1, x2, y2);
  }

  // テキスト
  if (step > 120) {
    const t = constrain((step - 120) / 60, 0, 1);
    const pb = easeOutBounce(t);
    const alpha = pb * 255;
    fill(10, 30, 100, alpha);
    noStroke();
    textSize(22);
    textAlign(CENTER);
    const moveY = lerp(20, 0, pb);
    text("大阪産業大学", width / 2, 300 + moveY);
  }

  pop(); // ズーム終了

  // 波紋（最大5回まで、ゆっくり）
  if (step > 60 && step % 20 === 0 && rippleCount < 5) {
    ripples.push({ r: 0, alpha: 180 });
    rippleCount++;
  }

  for (let i = ripples.length - 1; i >= 0; i--) {
    const rp = ripples[i];
    stroke(10, 30, 100, rp.alpha);
    noFill();
    strokeWeight(2);
    circle(200, 200, rp.r);
    rp.r += 1.5;       // ← ゆっくり拡大
    rp.alpha -= 1.5;   // ← ゆっくり消える
    if (rp.alpha <= 0) ripples.splice(i, 1);
  }

  step++;
}

// 円描画共通関数
function drawCircle(x, y, d) {
  stroke(10, 30, 100);
  strokeWeight(10);
  fill(255);
  circle(x, y, d);
}

// イージング関数
function easeOutExpo(t){ return t === 1 ? 1 : 1 - pow(2, -10 * t); }
function easeOutQuad(t){ return t * (2 - t); }
function easeOutBack(t){
  const c1 = 1.70158, c3 = c1 + 1;
  return 1 + c3 * pow(t - 1, 3) + c1 * pow(t - 1, 2);
}
function easeOutBounce(t){
  const n1 = 7.5625, d1 = 2.75;
  if(t < 1/d1){ return n1 * t * t; }
  else if(t < 2/d1){ t -= 1.5/d1; return n1*t*t + 0.75; }
  else if(t < 2.5/d1){ t -= 2.25/d1; return n1*t*t + 0.9375; }
  t -= 2.625/d1; return n1*t*t + 0.984375;
}
