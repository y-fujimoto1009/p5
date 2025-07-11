let step = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(60);
}

function draw() {
  background(255);
  stroke(10, 30, 100);
  strokeWeight(10);
  fill(255);

  let bigCircleY = 200;
  if (step > 60) {
    let tDrop = constrain((step - 60) / 30, 0, 1);
    bigCircleY = lerp(-50, 200, tDrop);
  }

  let leftX, rightX;
  if (step > 90) {
    let tMove = constrain((step - 90) / 60, 0, 1);
    let ease = 1 - pow(1 - tMove, 3); // easeOutCubic
    leftX = lerp(200, 150, ease);
    rightX = lerp(200, 250, ease);

    circle(leftX, 200, 50);
    circle(rightX, 200, 50);
  }

  if (step > 60) {
    circle(200, bigCircleY, 90);
  }

  if (step > 90) {
    let tLine = constrain((step - 90) / 30, 0, 1);
    let x1 = 160;
    let y1 = 225;
    let x2 = lerp(160, 240, tLine);
    let y2 = lerp(230, 175, tLine);
    line(x1, y1, x2, y2);
  }

  if (step > 150) {
    let tText = constrain((step - 150) / 60, 0, 1);
    let moveY = lerp(20, 0, tText);
    let alpha = tText * 255;
    fill(10, 30, 100, alpha);
    noStroke();
    textSize(22);
    textAlign(CENTER);
    text("大阪産業大学", width / 2, 300 + moveY);
  }

  step++;
}
