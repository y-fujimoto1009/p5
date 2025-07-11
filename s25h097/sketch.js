let step = 0;
let particles = [];
let logoAlpha = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(60);

  // 左の小円 (145,200) 半径25
  for (let a = 0; a < TWO_PI; a += PI / 30) {
    particles.push({
      x: random(width), y: random(height),
      tx: 145 + cos(a) * 25, ty: 200 + sin(a) * 25,
      alpha: 0, size: 5
    });
  }

  // 右の小円 (245,200) 半径25
  for (let a = 0; a < TWO_PI; a += PI / 30) {
    particles.push({
      x: random(width), y: random(height),
      tx: 245 + cos(a) * 25, ty: 200 + sin(a) * 25,
      alpha: 0, size: 5
    });
  }

  // 中央の大円 (200,200) 半径45
  for (let a = 0; a < TWO_PI; a += PI / 30) {
    particles.push({
      x: random(width), y: random(height),
      tx: 200 + cos(a) * 45, ty: 200 + sin(a) * 45,
      alpha: 0, size: 5
    });
  }

  // 斜めライン (160,225) → (240,175)
  for (let i = 0; i <= 1; i += 0.05) {
    particles.push({
      x: random(width), y: random(height),
      tx: lerp(160, 240, i), ty: lerp(225, 175, i),
      alpha: 0, size: 5
    });
  }
}

function draw() {
  background(255);

  // 粒子アニメーション（step 0〜90）
  if (step <= 90) {
    for (let p of particles) {
      p.x = lerp(p.x, p.tx, 0.05);
      p.y = lerp(p.y, p.ty, 0.05);
      p.alpha = lerp(p.alpha, 255, 0.05);
      fill(10, 30, 100, p.alpha);
      noStroke();
      ellipse(p.x, p.y, p.size);
    }
  } else {
    // 固定されたロゴ形状の粒子（step > 90）
    for (let p of particles) {
      fill(10, 30, 100, 255);
      noStroke();
      ellipse(p.tx, p.ty, p.size);
    }
  }

  // 正規ロゴ（stroke/fillでフェードイン、step > 120）
  if (step > 120 && logoAlpha < 255) {
    logoAlpha += 5; // フェードイン速度
    logoAlpha = constrain(logoAlpha, 0, 255);
  }

  if (step > 120) {
    // 正規のロゴ描画（stroke/fillを使ってフェードイン）
    stroke(10, 30, 100, logoAlpha);
    strokeWeight(10);
    fill(255, logoAlpha);
    circle(145, 200, 50);  // 左小円
    circle(245, 200, 50);  // 右小円
    circle(200, 200, 90);  // 中央大円
    line(160, 225, 240, 175); // 斜めライン

    // テキスト表示（同じ透明度でフェードイン）
    fill(10, 30, 100, logoAlpha);
    noStroke();
    textSize(22);
    textAlign(CENTER);
    let moveY = logoAlpha < 255 ? lerp(20, 0, logoAlpha / 255) : 0;
    text("大阪産業大学", width / 2, 300 + moveY);
  }

  step++;
}
