let step = 0;

let x = 200, y = 200, d = 0;
let x2 = 200, y2 = 200, d2 = 0;
let x3 = 200, y3 = 200, d3 = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(60);
  angleMode(DEGREES);
}

function draw() {
  background(255); // 白背景

  drawBubble1();
  drawBubble2();
  drawBubble3();

  if (step > 0) {
    let t = constrain(step / 60, 0, 1);
    let circleSize = lerp(0, 50, t);

    noStroke();
    fill(255);
    circle(150, 200, circleSize);

    stroke(10, 30, 100);
    strokeWeight(10);
    arc(150, 200, circleSize, circleSize, 60, 300);

    noStroke();
    fill(255);
    circle(250, 200, circleSize);

    stroke(10, 30, 100);
    strokeWeight(10);
    arc(250, 200, circleSize, circleSize, 240, 480);
  }

  if (step > 60) {
    let t = constrain((step - 60) / 30, 0, 1);
    let angleSpan = lerp(0, 180, t);

    noFill();
    stroke(10, 30, 100);
    strokeWeight(10);
    arc(200, 200, 90, 90, 180, 180 + angleSpan);
    arc(200, 200, 90, 90, 0, angleSpan);
  }

  if (step > 90) {
    let t = constrain((step - 90) / 30, 0, 1);
    stroke(10, 30, 100, 255);
    strokeWeight(10);
    let x1 = 160;
    let y1 = 225;
    let x2 = lerp(160, 240, t);
    let y2 = lerp(230, 175, t);
    line(x1, y1, x2, y2);
  }

  if (step > 120) {
    let t = constrain((step - 120) / 60, 0, 1);
    let moveY = lerp(20, 0, t);
    let alpha = t * 255;

    let baseSize = 22;
    let sizeEffect = lerp(baseSize * 1.5, baseSize, t);

    fill(10, 30, 100, alpha);
    noStroke();
    textSize(sizeEffect);
    textAlign(CENTER);
    text("大阪産業大学", width / 2, 300 + moveY);
  }

  step++;
}

function drawBubble1() {
  if (d > 150) {
    x = random(400);
    y = 400;
    d = 0;
  }
  fill(173, 216, 230); // 水色
  noStroke();
  circle(x, y, d);
  d += 1;
  y -= 10;
}

function drawBubble2() {
  if (d2 > 160) {
    x2 = random(400);
    y2 = 400;
    d2 = 0;
  }
  fill(173, 216, 230); // 水色
  noStroke();
  circle(x2, y2, d2);
  d2 += 3;
  y2 -= 10;
}

function drawBubble3() {
  if (d3 > 170) {
    x3 = random(400);
    y3 = 400;
    d3 = 0;
  }
  fill(173, 216, 230); // 水色
  noStroke();
  circle(x3, y3, d3);
  d3 += 5;
  y3 -= 10;
}
