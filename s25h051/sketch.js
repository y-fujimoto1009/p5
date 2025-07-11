let step = 0;
let stars = [];

function setup() {
  createCanvas(400, 400);
  frameRate(60);
}

function draw() {
  let bgColor = lerpColor(color(255), color(210, 230, 255), constrain(step / 180, 0, 1));
  background(bgColor);// lerpColor() は色を滑らかに補間する関数step（アニメーションの経過時間）に応じて背景色が白→淡いブルーに変化
  stroke(10, 30, 100);
  strokeWeight(10);
  fill(255);

  // 小円アニメーション（左右から）lerp() を使って X 座標を補間して、円が左右から中央寄りに動くmin(step / 60, 1) により、60フレーム（約1秒）で動きを完了する
  let leftX = lerp(0, 150, min(step / 60, 1));
  let rightX = lerp(400, 250, min(step / 60, 1));
  circle(leftX, 200, 50);
  circle(rightX, 200, 50);

  // 大円アニメーション（中を白に）60フレーム経過後に、大円が 0 → 90 のサイズで拡大fill(255) によって中が白、stroke(...) によって濃紺のふちがついている
  let bigSize = lerp(0, 90, constrain((step - 60) / 30, 0, 1));
  if (step > 60) {
    stroke(10, 30, 100);
    strokeWeight(10);
    fill(255); // 中を白で塗りつぶす
    circle(200, 200, bigSize);

    // 星の生成（最初の1回のみ）step === 90 のタイミングで、20個の星をランダム方向へ生成星は中央から飛び出し、だんだん透明になって消えていく。星の色は黄色で、サイズもランダムに設定
    if (step === 90) {
      for (let i = 0; i < 20; i++) {
        let angle = random(TWO_PI);
        let speed = random(1, 4);
        stars.push({
          x: 200,
          y: 200,
          vx: cos(angle) * speed,
          vy: sin(angle) * speed,
          alpha: 255,
          size: random(4, 8)
        });
      }
    }
  }

  // 星アニメーション（弾けるように飛ぶ）
  for (let s of stars) {
    fill(255, 220, 0, s.alpha);
    noStroke();
    ellipse(s.x, s.y, s.size);
    s.x += s.vx;
    s.y += s.vy;
    s.alpha -= 4;
  }

  // 斜めラインアニメーション線の終点が時間とともに伸びていくように補間されている。90フレーム以降に登場して、視覚的アクセントになる
  if (step > 90) {
    let x1 = 160;
    let y1 = 225;
    let x2 = lerp(160, 240, constrain((step - 90) / 30, 0, 1));
    let y2 = lerp(230, 175, constrain((step - 90) / 30, 0, 1));
    stroke(10, 30, 100);
    line(x1, y1, x2, y2);
  }

  // ロゴテキスト120フレーム以降に、ロゴ文字が徐々に登場alpha によって透明度を制御してフェードイン。moveY で文字の位置が少しずつ下がってくる演出になってるよ
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

