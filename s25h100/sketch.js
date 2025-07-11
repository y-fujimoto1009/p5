let step = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(60);
}

function draw() {
  background(135, 206, 235);

  stroke(10, 30, 100);
  strokeWeight(10);
  fill(255);

  // 左の半円
  if (step <= 60) {
    let t = step / 60;
    let y = lerp(400, 200, t);
    arc(150, y, 50, 50, PI / 2, 3 * PI / 2);
  } else {
    arc(150, 200, 50, 50, PI / 2, 3 * PI / 2);
  }

  // 右の半円
  if (step >= 30 && step <= 90) {
    let t = (step - 30) / 60;
    let y = lerp(400, 200, t);
    arc(250, y, 50, 50, -PI / 2, PI / 2);
  } else if (step > 90) {
    arc(250, 200, 50, 50, -PI / 2, PI / 2);
  }

  // 中央の円
  if (step >= 60 && step <= 90) {
    let t = (step - 60) / 30;
    let size = lerp(0, 90, t);
    circle(200, 200, size);
  } else if (step > 90) {
    circle(200, 200, 90);
  }

  if (step >= 90 && step <= 120) {
    let t = (step - 90) / 30;
    let x2 = lerp(160, 240, t);
    let y2 = lerp(230, 175, t);
    line(160, 225, x2, y2);
  } else if (step > 120) {
    line(160, 225, 240, 175);
  }

  if (step >= 120 && step <= 180) {
    let t = (step - 120) / 60;
    let moveY = lerp(20, 0, t);
    let alpha = t * 255;
    fill(10, 30, 100, alpha);
    noStroke();
    textSize(22);
    textAlign(CENTER);
    text("大阪産業大学", width / 2, 300 + moveY);
  } else if (step > 180) {
    fill(10, 30, 100);
    noStroke();
    textSize(22);
    textAlign(CENTER);
    text("大阪産業大学", width / 2, 300);
  }

  fill(255, 215, 0); // ゴールド色
  noStroke();
  drawStar(width - 40, 40, 10, 5, 5);

  fill(255, 215, 0);
  noStroke();
  drawStar(40, 40, 10, 5, 5);

  step++;
}

// 星
function drawStar(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius1;
    let sy = y + sin(a) * radius1;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius2;
    sy = y + sin(a + halfAngle) * radius2;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
