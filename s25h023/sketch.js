let step = 0;
let parts = [];

function setup() {
  createCanvas(400, 400);
  frameRate(60);
  textSize(22);
  textAlign(CENTER);

  // 各ロゴ要素の初期位置（ランダムな方向から）
  parts = [
    {
      targetX: 150, targetY: 200, size: 50, delay: 0
    },
    {
      targetX: 250, targetY: 200, size: 50, delay: 0
    },
    {
      targetX: 200, targetY: 200, size: 90, delay: 30
    }
  ];

  // ランダムに飛ばすための出発位置を生成
  for (let p of parts) {
    let angle = random(TWO_PI);
    let r = random(250, 400);
    p.startX = p.targetX + cos(angle) * r;
    p.startY = p.targetY + sin(angle) * r;
  }
}

function draw() {
  background(255);
  stroke(10, 30, 100);
  strokeWeight(10);
  fill(255);

  // ロゴ各パーツをスライドインさせる
  for (let p of parts) {
    let t = constrain((step - p.delay) / 60, 0, 1);
    let x = lerp(p.startX, p.targetX, t);
    let y = lerp(p.startY, p.targetY, t);
    ellipse(x, y, p.size, p.size);
  }

  // 線のアニメーション（固定位置で伸びる）
  if (step > 90) {
    let x1 = 160;
    let y1 = 225;
    let x2 = lerp(160, 240, constrain((step - 90) / 30, 0, 1));
    let y2 = lerp(230, 175, constrain((step - 90) / 30, 0, 1));
    stroke(10, 30, 100);
    strokeWeight(4);
    line(x1, y1, x2, y2);
  }

  // テキストアニメーション（フェードイン）
  if (step > 120) {
    let t = constrain((step - 120) / 60, 0, 1);
    let moveY = lerp(20, 0, t);
    let alpha = t * 255;
    fill(10, 30, 100, alpha);
    noStroke();
    text("大阪産業大学", width / 2, 300 + moveY);
  }

  step++;
}
