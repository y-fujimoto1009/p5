let step = 0;
function setup() {
  createCanvas(400, 400);
  frameRate(60);
  textFont('sans-serif');
}

function draw() {
  background(255);
  stroke(10, 30, 100);
  strokeWeight(10);
  fill(255);
let leftX = 150;
let rightX = 250;
let waveAmplitude = 30;
let waveSpeed = 0.1;
let waveY1, waveY2;

if (step <= 180) {
  // 180フレームまでは波打つ動き
  waveY1 = 200 + waveAmplitude * sin(step * waveSpeed);
  waveY2 = 200 + waveAmplitude * sin(step * waveSpeed + PI);
} else {
  // それ以降は波の動きを止めて、中央付近で固定
  waveY1 = 200;
  waveY2 = 200;
}
circle(leftX, waveY1, 50);
circle(rightX, waveY2, 50);


// 大円アニメーション（パルスで大きさが変わる）
if (step > 60) {
  let baseSize = 70;
  let bigSize;
  if (step <= 180) {
    // 60〜180フレームはパルス動作
    let pulse = 20 * sin(step * 0.2);
    bigSize = baseSize + pulse;
  } else {
    // 180フレーム以降はパルスを止めて固定サイズ
    bigSize = baseSize;
  }
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

  // テキストアニメーション（スケールアップ＋フェードイン）
  if (step > 120) {
    let t = constrain((step - 120) / 60, 0, 1);
    let alpha = t * 255;
    fill(10, 30, 100, alpha);
    noStroke();
    textSize(22 * t);
    textAlign(CENTER, CENTER);
    text("大阪産業大学", width / 2, 300);
  }

  function drawGradientBackground() {
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(color(230, 240, 255), color(180, 200, 255), inter);
    stroke(c);
    line(0, y, width, y);
  }
}

  step++;
}
