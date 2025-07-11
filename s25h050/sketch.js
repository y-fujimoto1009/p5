let step = 2;
let meteorStep = 0;
let meteorHit = false;
let fadeOut = false;
let fadeAlpha = 0;

let showText = false;    // フェードアウト後に文字表示フラグ
let textAlpha = 0;       // 文字のフェードイン用透明度
let displayText = "OSU";  

function setup() {
  createCanvas(400, 400);
  frameRate(60);
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(0);
}

function draw() {
  background(255);

  if (!meteorHit) {
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

    // 斜めラインアニメーション（線が伸びる）
    if (step > 90) {
      let x1 = 160;
      let y1 = 225;
      let x2 = lerp(160, 240, constrain((step - 90) / 30, 0, 1));
      let y2 = lerp(230, 175, constrain((step - 90) / 30, 0, 1));
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

    if (step > 180) {
      meteorStep++;
    }
  }

  // 隕石アニメーション（右上から落ちてくる）
  if (meteorStep > 0 && !meteorHit) {
    let mx = lerp(420, 200, meteorStep / 60);
    let my = lerp(-40, 200, meteorStep / 60);
    fill(80);
    noStroke();
    ellipse(mx, my, 40, 40);

    if (meteorStep > 60) {
      meteorHit = true;
      fadeOut = true;
    }
  }

  // フェードアウト（白く塗りつぶし）
  if (fadeOut) {
    fadeAlpha += 10;
    fill(255, fadeAlpha);
    noStroke();
    rect(0, 0, width, height);

    if (fadeAlpha >= 255) {
      fadeOut = false;
      showText = true;  // フェードアウト完了で文字表示開始
    }
  }

  // 白くなった後の文字フェードイン表示
  if (showText) {
    textAlpha += 2;
    if (textAlpha > 255) textAlpha = 255;
    fill(0, textAlpha);
    noStroke();
    textSize(55);
    text(displayText, width / 2, height / 2);
  }

  step++;
}