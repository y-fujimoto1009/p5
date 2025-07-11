let step = 0;

// 小円
let leftY = -50, rightY = -50;
let leftV = 0,   rightV = 0;

// 大円
let bigY = -90, bigV = 0;

// 斜め線
let lineBaseY = -100, lineVY = 0;

const gravity = 0.8;
const bounceDamping = 0.6;

// 最終座標
const GROUND_Y = 200;      // 円の着地点
const leftX  = 150, rightX = 250, bigX = 200;

const lineX1 = 160, lineX2 = 240;
const lineY1_final = 225, lineY2_final = 175;
const lineY_diff   = lineY2_final - lineY1_final;   // -50

// タイムライン
const BIG_START   =  60;   // 大円が落ち始める
const LINE_START  = 140;   // 斜め線が落ち始める
const TEXT_START  = 220;   // テキストが出始める ★ここを遅らせて最後に

function setup() {
  createCanvas(400, 400);
  frameRate(60);
  textAlign(CENTER);
  textSize(22);
}

function draw() {
  background(255);
  stroke(10, 30, 100);
  strokeWeight(10);
  fill(255);

  //小円２つ
  leftV  += gravity;
  leftY  += leftV;
  if (leftY > GROUND_Y) { leftY = GROUND_Y; leftV *= -bounceDamping; }

  rightV += gravity;
  rightY += rightV;
  if (rightY > GROUND_Y) { rightY = GROUND_Y; rightV *= -bounceDamping; }

  circle(leftX,  leftY, 50);
  circle(rightX, rightY, 50);

  //大円 
  if (step >= BIG_START) {
    if (step === BIG_START) { bigY = -90; bigV = 0; }
    bigV += gravity;
    bigY += bigV;
    if (bigY > GROUND_Y) { bigY = GROUND_Y; bigV *= -bounceDamping; }

    // 拡大
    const t = constrain((step - BIG_START) / 30, 0, 1);
    const bigSize = lerp(0, 90, t);
    circle(bigX, bigY, bigSize);
  }

  //斜め線 
  if (step >= LINE_START) {
    if (step === LINE_START) { lineBaseY = -100; lineVY = 0; }
    lineVY += gravity;
    lineBaseY += lineVY;
    if (lineBaseY > lineY1_final) {
      lineBaseY = lineY1_final;
      lineVY *= -bounceDamping;
    }

    const y1 = lineBaseY;
    const y2 = lineBaseY + lineY_diff; // 差分維持で斜め

    line(lineX1, y1, lineX2, y2);
  }

  //テキスト/
  if (step > TEXT_START) {
    const t = constrain((step - TEXT_START) / 60, 0, 1);  // 1秒かけて
    const moveY = lerp(20, 0, t);        // 上に少しスライド
    const alpha = t * 255;               // 透明→不透明
    fill(10, 30, 100, alpha);
    noStroke();
    text("大阪産業大学", width / 2, 300 + moveY);
  }

  step++;
}
