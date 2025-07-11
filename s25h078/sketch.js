let step = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(60);
  angleMode(DEGREES);
}

function draw() {
  background(255);

  push();
  translate(width / 2, height / 2);
  if (step > 180) {
    rotate(90);
  }
  translate(-width / 2, -height / 2);

  stroke(10, 30, 100);
  strokeWeight(10);
  fill(255);

  let t1 = min(step / 60, 1);
  let topY = lerp(0, 150, t1);
  let bottomY = lerp(400, 250, t1);
  circle(200, topY, 50);
  circle(200, bottomY, 50);

  if (step > 60) {
    let t2 = constrain((step - 60) / 30, 0, 1);
    let bigSize = lerp(0, 90, t2);
    noStroke();
    fill(230, 230, 255, 100 + t2 * 155);
    circle(200, 200, bigSize);
    stroke(10, 30, 100);
  }

  // 斜めライン
  if (step > 90) {
    let x1 = 160;
    let y1 = 225;
    let x2 = lerp(160, 240, constrain((step - 90) / 30, 0, 1));
    let y2 = lerp(230, 175, constrain((step - 90) / 30, 0, 1));
    line(x1, y1, x2, y2);
  }
  pop();
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