let step = 0;
let trainX = -200;
let trainY = 140;
let smoke = [];
let trailParticles = [];
let stars = [];

function setup() {
  createCanvas(400, 400);
  frameRate(60);
  textAlign(CENTER);
  textSize(22);

  for (let i = 0; i < 500; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      size: random(1.2, 3.5),
      alpha: random(80, 180),
      dx: random(0.1, 0.6),
      dy: random(-0.2, 0.2),
      offset: random(TWO_PI),
      floatPhase: random(TWO_PI)
    });
  }
}

function draw() {
  background(255);

  for (let s of stars) {
    let flicker = s.alpha + sin(step * 0.02 + s.offset) * 50;
    let floatY = sin(step * 0.01 + s.floatPhase) * 0.5;
    fill(180, 190, 230, flicker);
    noStroke();
    circle(s.x, s.y + floatY, s.size);
    s.x += s.dx;
    s.y += s.dy + floatY * 0.1;
    if (s.x > width + 5) s.x = -5;
    if (s.y < -5 || s.y > height + 5) s.y = random(height);
  }

  if (step > 30 && trainX < width + 200) {
    drawTrain(trainX, trainY);
    trainX += 1.5;

    trailParticles.push({
      x: trainX + 3,
      y: trainY + 20,
      r: random(1, 2),
      alpha: 200,
      dx: random(-0.3, 0.3),
      dy: random(-0.3, 0.3)
    });
  }

 
  for (let i = trailParticles.length - 1; i >= 0; i--) {
    let p = trailParticles[i];
    fill(160, 180, 255, p.alpha);
    noStroke();
    circle(p.x, p.y, p.r);
    p.x += p.dx;
    p.y += p.dy;
    p.alpha -= 2;
    if (p.alpha <= 0) trailParticles.splice(i, 1);
  }

 
  if (frameCount % 3 === 0 && step > 30 && trainX < width + 200) {
    let headOffset = 3 * 45;
    smoke.push({
      x: trainX + headOffset + 25,
      y: trainY - 10,
      r: random(3, 6),
      alpha: 180,
      dx: random(-0.3, 0.3),
      dy: random(-0.5, -1.2)
    });
  }

  for (let i = smoke.length - 1; i >= 0; i--) {
    let s = smoke[i];
    fill(180, 190, 230, s.alpha);
    noStroke();
    circle(s.x, s.y, s.r);
    s.x += s.dx;
    s.y += s.dy;
    s.alpha -= 1.5;
    if (s.alpha <= 0) smoke.splice(i, 1);
  }

 
  strokeWeight(10);
  let t1 = constrain(step / 60, 0, 1);
  stroke(10, 30, 100, t1 * 255);
  fill(255, t1 * 255);
  circle(150, 200, 50);  
  circle(250, 200, 50);  

  if (step > 60) {
    let t2 = constrain((step - 60) / 30, 0, 1);
    stroke(10, 30, 100, 255 * t2);
    fill(255);
    circle(200, 200, 90);  
  }

  
  if (step > 90) {
    let x1 = 160, y1 = 225;
    let x2 = lerp(160, 240, constrain((step - 90) / 30, 0, 1));
    let y2 = lerp(230, 175, constrain((step - 90) / 30, 0, 1));
    stroke(10, 30, 100);
    line(x1, y1, x2, y2);
  }

 
  if (step > 120) {
    let t = constrain((step - 120) / 60, 0, 1);
    let moveY = lerp(20, 0, t);
    fill(10, 30, 100, t * 255);
    noStroke();
    text("大阪産業大学", width / 2, 300 + moveY);

   
    for (let i = 0; i < 10; i++) {
      let angle = random(TWO_PI);
      let r = random(30, 60);
      let x = width / 2 + cos(angle) * r;
      let y = 300 + moveY + sin(angle) * r;
      fill(180, 190, 230, 40);
      circle(x, y, 1.5);
    }
  }

  step++;
}

function drawTrain(x, y) {
  for (let i = 0; i < 4; i++) {
    let offset = (3 - i) * 45;
    fill(10, 30, 100);
    rect(x + offset, y, 40, 20, 4);
    fill(255);
    circle(x + offset + 10, y + 20, 8);
    circle(x + offset + 30, y + 20, 8);
    if (i === 0) {
      fill(10, 30, 100);
      rect(x + offset + 25, y - 10, 10, 8);
    }
  }
}