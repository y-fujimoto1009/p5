let t = 0;
let prevX, prevY;

let mirrorX = 210; // 左右対称軸

// 右カーブ（オリジナル）
let x10 = 240, y10 = 90;
let cx10 = 280, cy10 = 90;
let cx20 = 280, cy20 = 120;
let x20 = 240, y20 = 120;

// 左カーブ（右カーブを左右反転）
let x1 = mirrorX - (x10 - mirrorX);
let y1 = y10;
let cx1 = mirrorX - (cx10 - mirrorX);
let cy1 = cy10;
let cx2 = mirrorX - (cx20 - mirrorX);
let cy2 = cy20;
let x2 = mirrorX - (x20 - mirrorX);
let y2 = y20;

// 円が通る3点
let A, B, C;
let circleX, circleY, circleR;
let angleA, angleB, angleC;

let drawPhase = 0;

let messege ="大阪産業大学";
let charIndex = 0;
let textDelay = 5 //フレーム毎遅延
let frameCounter = 0;

function setup() {
  createCanvas(400, 400);
  background(255);
  frameRate(60);
  stroke(0, 64, 152);
  strokeWeight(10);

  // 3点：A = 左カーブ始点, B = 右カーブ始点, C = 右カーブ終点
  A = createVector(x1, y1);
  B = createVector(x10, y10);
  C = createVector(x20, y20);

  // 円の中心と半径を求める（3点を通る円）
  let a = p5.Vector.sub(B, A);
  let b = p5.Vector.sub(C, B);

  let aMid = p5.Vector.add(A, B).div(2);
  let bMid = p5.Vector.add(B, C).div(2);

  let aPerp = createVector(-a.y, a.x);
  let bPerp = createVector(-b.y, b.x);

  let denom = (aPerp.x * bPerp.y - aPerp.y * bPerp.x);
  if (abs(denom) < 0.001) {
    noLoop();
    console.error("円の中心が計算できません");
    return;
  }

  let t2 = ((bMid.x - aMid.x) * aPerp.y - (bMid.y - aMid.y) * aPerp.x) / denom;
  let center = p5.Vector.add(bMid, p5.Vector.mult(bPerp, t2));

  circleX = center.x;
  circleY = center.y;
  circleR = p5.Vector.dist(center, A);

  // 角度（右終点→左始点→右始点→右終点）
  angleC = atan2(C.y - circleY, C.x - circleX);
  angleA = atan2(A.y - circleY, A.x - circleX);
  angleB = atan2(B.y - circleY, B.x - circleX);

  // 初期点（左カーブの始点）
  prevX = bezierPoint(x1, cx1, cx2, x2, 0);
  prevY = bezierPoint(y1, cy1, cy2, y2, 0);
}

function draw() {
  stroke(0,64,152);
  strokeWeight(10);
  let x, y;

  if (drawPhase === 0) {
    // 左カーブ
    if (t <= 1) {
      x = bezierPoint(x1, cx1, cx2, x2, t);
      y = bezierPoint(y1, cy1, cy2, y2, t);
    } else {
      drawPhase = 1;
      t = 0;

      // 左カーブの終点 → 右カーブの始点への直線
      prevX = x2;
      prevY = y2;
      return;
    }
    line(prevX, prevY, x, y);
    prevX = x;
    prevY = y;
    t += 0.01;
  }

  else if (drawPhase === 1) {
    // 直線：左カーブ終点 → 右カーブ始点
    if (t <= 1) {
      x = lerp(x2, x10, t);
      y = lerp(y2, y10, t);
      line(prevX, prevY, x, y);
      prevX = x;
      prevY = y;
      t += 0.01;
    } else {
      drawPhase = 2;
      t = 0;
      return;
    }
  }

  else if (drawPhase === 2) {
    // 右カーブ
    if (t <= 1) {
      x = bezierPoint(x10, cx10, cx20, x20, t);
      y = bezierPoint(y10, cy10, cy20, y20, t);
    } else {
      drawPhase = 3;
      t = 0;
      prevX = x20;
      prevY = y20;
      return;
    }
    line(prevX, prevY, x, y);
    prevX = x;
    prevY = y;
    t += 0.01;
  }

  else if (drawPhase === 3) {
    // 円弧：右終点 → 左始点 → 右始点 → 右終点
    if (t <= 1) {
      let angle;
      if (t <= 0.5) {
        angle = lerp(angleC, angleA, t * 2);
      } else {
        angle = lerp(angleA, angleC + TWO_PI, (t - 0.5) * 2);
      }
      x = circleX + circleR * cos(angle);
      y = circleY + circleR * sin(angle);
      line(prevX, prevY, x, y);
      prevX = x;
      prevY = y;
      t += 0.01;
    } else {
      noLoop();
    }
  }
  drawTextAnime();
}
function drawTextAnime(){
  fill(0);
  noStroke();
  textSize(30);
  textAlign(LEFT,CENTER);
  let vistibleText = messege.substring(0,charIndex);
  text(vistibleText,120,200);
  frameCounter++;
  if (frameCounter % textDelay === 0 && charIndex < messege.length){
    charIndex++;
  }
}