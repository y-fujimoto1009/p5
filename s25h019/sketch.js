let step = 0;
let t = 0;
let points = [];
let angle = 0;
let angleSpeed = -0.017;

function setup() {
  createCanvas(400, 400);
  frameRate(60);
}

function draw() {
  background(255);

  stroke(10, 30, 100);
  strokeWeight(10);
  fill(255);

  translate(width / 2, height / 2);

  let x = 80 * sin(t);
  let y = 20 * sin(2 * t + PI);
  points.push(createVector(x, y));

  beginShape();
  for (let v of points) {
    vertex(v.x, v.y);
  }
  endShape();

  t += 0.05;

  if (step > 0) {
    let bigSize = lerp(0, 90, constrain(step / 30, 0, 1));
    circle(0, 0, bigSize);
  }

  let x1 = 40, y1 = 15;
  let x2 = -40, y2 = -15;

  let xt = lerp(x1, x2, t - 3);
  let yt = lerp(y1, y2, t - 3);

  if (step > 60 && step < 80) {
    line(1.1 * x1, 1.1 * y1, 1.1 * xt, 1.1 * yt);
  }

  if (step >= 80) {
    rotate(angle);
    line(40, 15, -40, -15);
    angle += angleSpeed;
    if (angle >= PI / 8) {
      noLoop();
    }
  }

  if (step > 120) {
    noStroke();
    fill(0,30,100,);
    textSize(22);
    textAlign(CENTER);
    rotate(PI/4);
    text("大阪産業大学", 0,  100);
  }

  if (t > TWO_PI) {
    noLoop();
  }

  step++;
}
