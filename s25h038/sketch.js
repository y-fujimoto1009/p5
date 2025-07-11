let step = 0;
const maxStep = 330; // アニメーション終了の基準フレーム

function setup() {
  createCanvas(400, 400);
  frameRate(60);
  textFont("Georgia");
}

function draw() {
  background(255);
  stroke(10, 30, 100);
  strokeWeight(10);
  fill(255);

  // stepがmaxStepを超えたら以降はmaxStepに固定（停止させる）
  let currentStep = step > maxStep ? maxStep : step;

  // 小円アニメーション（左右から＋ゆっくり上下揺れ）
  let t1 = constrain(currentStep / 120, 0, 1);
  t1 = easeInOut(t1);
  let wave = sin(currentStep * 0.05) * 5;
  let leftX = lerp(0, 150, t1);
  let rightX = lerp(400, 250, t1);
  circle(leftX, 200 + wave, 50);
  circle(rightX, 200 - wave, 50);

  // 大円アニメーション（拡大＋跳ねる）
  if (currentStep > 120) {
    let t2 = constrain((currentStep - 120) / 60, 0, 1);
    let bounce = easeOutBounce(t2);
    let bigSize = lerp(0, 90, bounce);
    circle(200, 200, bigSize);
  }

  // 斜めラインアニメーション（伸びる＋太さ増加）
  if (currentStep > 180) {
    let t3 = constrain((currentStep - 180) / 60, 0, 1);
    t3 = easeOut(t3);
    let x1 = 160;
    let y1 = 225;
    let x2 = lerp(160, 240, t3);
    let y2 = lerp(230, 175, t3);
    strokeWeight(5 + t3 * 5);
    line(x1, y1, x2, y2);
  }

  // テキストアニメーション（フェードイン＋ゆっくり上昇＋左右微揺れ）
  if (currentStep > 240) {
    let t4 = constrain((currentStep - 240) / 90, 0, 1);
    let alpha = lerp(0, 255, easeOut(t4));
    let moveY = lerp(20, 0, easeOut(t4));
    let shakeX = sin(currentStep * 0.1) * 3 * (1 - t4);
    fill(10, 30, 100, alpha);
    noStroke();
    textSize(22);
    textAlign(CENTER);
    text("大阪産業大学", width / 2 + shakeX, 300 + moveY);
  }

  if (step < maxStep) step++;
}

// イージング関数たちは省略（前回と同じでOK）
function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}
function easeOut(t) {
  return 1 - pow(1 - t, 3);
}
function easeOutBounce(t) {
  const n1 = 7.5625, d1 = 2.75;
  if (t < 1 / d1) {
    return n1 * t * t;
  } else if (t < 2 / d1) {
    t -= 1.5 / d1;
    return n1 * t * t + 0.75;
  } else if (t < 2.5 / d1) {
    t -= 2.25 / d1;
    return n1 * t * t + 0.9375;
  } else {
    t -= 2.625 / d1;
    return n1 * t * t + 0.984375;
  }
}
