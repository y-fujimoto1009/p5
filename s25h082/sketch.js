let step = 0;
let stars = [];

function setup() {
  createCanvas(400, 400);
  frameRate(60);

  for (let i = 0; i < 50; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      size: random(1, 3),
    });
  }
}

function draw() {
  background(255);


  if (step > 30) {
    let starAlpha = constrain((step - 30) / 60, 0, 1) * 255;
    noStroke();
    fill(200, 200, 255, starAlpha);
    for (let s of stars) {
      circle(s.x, s.y, s.size);
    }
  }

  stroke(10, 30, 100);
  strokeWeight(10);
  fill(255);
  let leftY = lerp(-30, 200, constrain((step - 60) / 30, 0, 1));
  let rightY = lerp(430, 200, constrain((step - 120) / 30, 0, 1));
  circle(150, leftY, 50);
  circle(250, rightY, 50);
  let bigSize = lerp(0, 90, constrain((step - 180) / 30, 0, 1));
  if (step > 60) {
    circle(200, 200, bigSize);
  }
  if (step > 90) {
    let t = constrain((step - 90) / 30, 0, 1);
    let len = lerp(0, 35, t);
    line(200, 200, 200 + len, 215 - len);
    line(200, 200, 200 - len, 185 + len);
  }
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
