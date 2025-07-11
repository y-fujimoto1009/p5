let step = 0;
let particles = [];

function setup() {
  createCanvas(400, 400);
  frameRate(60);
  angleMode(RADIANS); // 回転角はラジアンで扱う
}

function draw() {
  background(100);

  // 小円アニメーション（左右から）
  stroke(10, 30, 100);
  strokeWeight(10);
  fill(255);
  let leftX = lerp(0, 150, min(step / 60, 1));
  let rightX = lerp(400, 250, min(step / 60, 1));
  circle(leftX, 200, 50);
  circle(rightX, 200, 50);

  // 大円アニメーション（拡大）
  let bigSize = lerp(0, 90, constrain((step - 60) / 30, 0, 1));
  if (step > 60) {
    circle(200, 200, bigSize);
  }

  // 斜めラインアニメーション（回転してピタッと止まる）
  if (step > 90) {
    let t = constrain((step - 90) / 60, 0, 1); // 0〜1
    let eased = easeOutCubic(1 - t); // 減速して止まる
    let angle = lerp(-PI / 6, -PI / 6 + TWO_PI * 2, eased); // 最終は -30度（-PI/6）

    push();
    translate(200, 200);
    rotate(angle);
    stroke(10, 30, 100);
    strokeWeight(5);
    line(-40, 0, 40, 0); // 回転する斜め線
    pop();
  }

  // パーティクル（ロゴ登場時に出現）
  if (step === 121) {
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: width / 2,
        y: 300,
        vx: random(-3, 3),
        vy: random(-3, 3),
        alpha: 255,
        color: color(random(100, 255), random(100, 255), random(100, 255))
      });
    }
  }

  // パーティクル描画
  for (let i = particles.length - 1; i >= 0; i--) {
    let p = particles[i];
    fill(p.color.levels[0], p.color.levels[1], p.color.levels[2], p.alpha);
    noStroke();
    circle(p.x, p.y, 5);
    p.x += p.vx;
    p.y += p.vy;
    p.alpha -= 4;
    if (p.alpha <= 0) particles.splice(i, 1);
  }

  // ロゴアニメーション（回転しながら拡大・フェードイン）
  if (step > 120) {
    let t = constrain((step - 120) / 60, 0, 1);
    let angle = lerp(PI, 0, t); // 180度 → 0度
    let scaleUp = lerp(0.5, 1, t);
    let alpha = t * 255;

    push();
    translate(width / 2, 300);
    rotate(angle);
    scale(scaleUp);
    fill(10, 30, 100, alpha);
    noStroke();
    textSize(22);
    textAlign(CENTER, CENTER);
    text("大阪産業大学", 0, 0);
    pop();
  }

  step++;
}

// 減速回転イージング関数
function easeOutCubic(x) {
  return 1 - pow(1 - x, 3);
}