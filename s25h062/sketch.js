let rightAngle = 0;
let leftAngle = 0;
let centerAngle = 0;
let lineProgress = 0;
let textAlpha = 0;
const startAngleRight = Math.atan2(185 - 200, 221 - 230);
let animationState = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(120);
  textFont('ＭＳ ゴシック');
}

function draw() {
  background(255, 255, 255);
  switch (animationState) {
    case 0:
      rightAngle += 0.05;
      if (rightAngle >= TWO_PI) {
        rightAngle = TWO_PI;
        animationState++;
      }
      break;
    case 1:
      leftAngle += 0.05;
      if (leftAngle >= TWO_PI) {
        leftAngle = TWO_PI;
        animationState++;
      }
      break;
    case 2:
      centerAngle += 0.05;
      if (centerAngle >= TWO_PI) {
        centerAngle = TWO_PI;
        animationState++;
      }
      break;
    case 3:
      lineProgress += 0.02;
      if (lineProgress >= 1.0) {
        lineProgress = 1.0;
        animationState++;
      }
      break;
    case 4:
      textAlpha += 3;
      if (textAlpha >= 255) {
        textAlpha = 255;
        animationState++;
      }
      break;
  }
  rigthCircle();
  leftCircle();
  centerCircle();
  if (animationState >= 3) {
    centerLine();
  }
  if (animationState >= 4) {
    OSUtext();
  }
}

function centerCircle() {
  const sw = 12;
  const d = 60;

  fill(255, 255, 255);
  noStroke();
  circle(200, 200, d);

  noFill();
  stroke(0, 64, 152);
  strokeWeight(sw);
  arc(200, 200, d, d, 0, centerAngle);
}

function rigthCircle() {
  const sw = 12;
  const d = 36;
  const x = 236;

  noFill();
  stroke(0, 64, 152);
  strokeWeight(sw);
  arc(x, 200, d, d, startAngleRight, startAngleRight + rightAngle);
}

function leftCircle() {
  const sw = 12;
  const d = 36;
  const x = 164;

  noFill();
  stroke(0, 64, 152);
  strokeWeight(sw);
  arc(x, 200, d, d, 0, leftAngle);
}

function centerLine() {
  const sw = 12;
  const startX = 182;
  const startY = 212;
  const endX = 225.2;
  const endY = 182;
  
  stroke(0, 64, 152);
  strokeWeight(sw);

  const currentX = lerp(startX, endX, lineProgress);
  const currentY = lerp(startY, endY, lineProgress);
  
  line(startX, startY, currentX, currentY);
}

function OSUtext() {
  const y = 284;
  textSize(24);
  textAlign(CENTER);
  fill(0, 0, 0, textAlpha);
  noStroke();
  text("大阪産業大学", width / 2, y);
}