let step = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(60);
  textFont('sans-serif');
}

function draw() {
  background(255);
  stroke(10, 30, 100);
  strokeWeight(10);
  noFill();

  const centerX = 200;
  const centerY = 200;

  // 1. 外円
  let p1 = constrain(step / 90, 0, 1);
  if (p1 > 0) {
    let ang = map(p1, 0, 1, -HALF_PI, 1.5 * PI);
    arc(centerX, centerY, 90, 90, -HALF_PI, ang);
  }
  if (step > 90) {
    arc(centerX, centerY, 90, 90, -HALF_PI, 1.5 * PI);
  }

  // 2. 小円
  let p2 = constrain((step - 90) / 60, 0, 1);
  if (p2 > 0 && step <= 150) {
    const drop = easeOutBounce(p2);
    let leftX = lerp(centerX, 150, drop);
    let rightX = lerp(centerX, 250, drop);
    let yPos = lerp(-50, centerY, drop);
    fill(255);
    circle(leftX, yPos, 50);
    circle(rightX, yPos, 50);
  }
  if (step > 150) {
    fill(255);
    circle(150, centerY, 50);
    circle(250, centerY, 50);
  }

  // 3. 斜めライン（端から端まで）
  let p3 = constrain((step - 150) / 30, 0, 1);
  let radius = 45;
  if (p3 > 0 && step <= 180) {
    let ang = lerp(PI / 2, -PI / 4, p3);
    let x1 = centerX + cos(ang + PI) * radius;
    let y1 = centerY + sin(ang + PI) * radius;
    let x2 = centerX + cos(ang) * radius;
    let y2 = centerY + sin(ang) * radius;
    line(x1, y1, x2, y2);
  }
  if (step > 180) {
    let ang = -PI / 4;
    let x1 = centerX + cos(ang + PI) * radius;
    let y1 = centerY + sin(ang + PI) * radius;
    let x2 = centerX + cos(ang) * radius;
    let y2 = centerY + sin(ang) * radius;
    line(x1, y1, x2, y2);
  }

  // 4. テキスト
  let p4 = constrain((step - 180) / 60, 0, 1);
  if (p4 > 0 && step <= 240) {
    noStroke();
    fill(10, 30, 100, 255 * p4);
    textSize(22);
    textAlign(CENTER, CENTER);
    let ty = lerp(350, 300, p4);
    text("大阪産業大学", width / 2, ty);
  }
  if (step > 240) {
    noStroke();
    fill(10, 30, 100);
    textSize(22);
    textAlign(CENTER, CENTER);
    text("大阪産業大学", width / 2, 300);
  }

  step++;
}

function easeOutBounce(x) {
  const n1 = 7.5625,
    d1 = 2.75;
  if (x < 1 / d1) {
    return n1 * x * x;
  } else if (x < 2 / d1) {
    x -= 1.5 / d1;
    return n1 * x * x + 0.75;
  } else if (x < 2.5 / d1) {
    x -= 2.25 / d1;
    return n1 * x * x + 0.9375;
  } else {
    x -= 2.625 / d1;
    return n1 * x * x + 0.984375;
  }
}
