let step = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(60);
  textFont("sans-serif");
}

function draw() {
  let bgFade = constrain(step / 60, 0, 1);
  let bgColor = lerpColor(color(0), color(255), bgFade);
  background(bgColor);

  stroke(10, 30, 100);
  strokeWeight(10);
  fill(255);
  if (step >= 60) {
    let tLeft = constrain((step - 60) / 30, 0, 1);
    let leftX = lerp(0, 150, tLeft);
    circle(leftX, 200, 50);
  }

  if (step >= 90) {
    let tRight = constrain((step - 90) / 30, 0, 1);
    let rightX = lerp(400, 250, tRight);
    circle(rightX, 200, 50);
  }

  if (step >= 120) {
    let t2 = constrain((step - 120) / 30, 0, 1);
    let bigSize = lerp(0, 90, t2);
    circle(200, 200, bigSize);
  }

  if (step >= 150) {
    let t3 = constrain((step - 150) / 30, 0, 1);
    let x1 = 160;
    let y1 = 225;
    let x2 = lerp(160, 240, t3);
    let y2 = lerp(230, 175, t3);
    line(x1, y1, x2, y2);
  }

  noStroke();
  textSize(32);
  textAlign(CENTER);
  fill(10, 30, 100);
  let baseY = 320;

  if (step >= 180) {
    let t4 = constrain((step - 180) / 40, 0, 1);
    let moveY = lerp(20, 0, t4);
    let alpha = t4 * 255;
    fill(10, 30, 100, alpha);
    text("大阪", width / 2 - 80, baseY + moveY);
  }

  if (step >= 220) {
    let t5 = constrain((step - 220) / 40, 0, 1);
    let moveY = lerp(20, 0, t5);
    let alpha = t5 * 255;
    fill(10, 30, 100, alpha);
    text("産業", width / 2, baseY + moveY);
  }

  if (step >= 260) {
    let t6 = constrain((step - 260) / 40, 0, 1);
    let moveY = lerp(20, 0, t6);
    let alpha = t6 * 255;
    fill(10, 30, 100, alpha);
    text("大学", width / 2 + 80, baseY + moveY);
  }
  step++;
}
