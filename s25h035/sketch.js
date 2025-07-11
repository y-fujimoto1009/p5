let step = 0;
let stars = [];

function setup() {
  createCanvas(400, 400);
  frameRate(60);

  // キラキラ初期化（動かない状態で配置）
  for (let i = 0; i < 100; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      baseY: random(height),
      size: random(1, 3),
      twinkleSpeed: random(0.01, 0.05),
      alphaOffset: random(TWO_PI)
    });
  }
}

function draw() {
  background(255);

  // 🌠 徐々に降ってくるキラキラ背景
  noStroke();
  let fallFactor = constrain((step - 150) / 90, 0, 1); // 150フレーム以降にゆっくり落下開始
  for (let star of stars) {
    let twinkle = 150 + 105 * sin(step * star.twinkleSpeed + star.alphaOffset);
    fill(10, 30, 100, twinkle);

    // 徐々に降るアニメーション（fallFactorが増えるほど速く落ちる）
    star.y = (star.baseY + fallFactor * (star.baseY + step * 0.2)) % height;
    circle(star.x, star.y, star.size);
  }

  stroke(10, 30, 100);
  strokeWeight(10);
  fill(255);

  // 小円アニメーション（左右から）
  let leftX = lerp(0, 150, min(step / 60, 1));
  let rightX = lerp(400, 250, min(step / 60, 1));
  circle(leftX, 200, 50);
  circle(rightX, 200, 50);

  // 大円アニメーション（バウンド風に拡大）
  if (step > 60) {
    let t = constrain((step - 60) / 30, 0, 1);
    let eased = -pow(2, -10 * t) * sin((t - 0.075) * (2 * PI) / 0.3) + 1;
    let bigSize = lerp(0, 90, eased);
    fill(255);
    stroke(10, 30, 100);
    strokeWeight(10);
    circle(200, 200, bigSize);
  }

  // 斜めラインアニメーション（線が伸びる）
  if (step > 90) {
    let x1 = 160;
    let y1 = 225;
    let x2 = lerp(160, 240, constrain((step - 90) / 30, 0, 1));
    let y2 = lerp(230, 175, constrain((step - 90) / 30, 0, 1));
    stroke(10, 30, 100);
    strokeWeight(10);
    line(x1, y1, x2, y2);
  }

  // テキストアニメーション（フェードイン）
  if (step > 120) {
    let t = constrain((step - 120) / 60, 0, 1);
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