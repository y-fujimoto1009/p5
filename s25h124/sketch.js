let step = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(60);
  angleMode(RADIANS);
}

function draw() {
  background(255);
  stroke(10, 30, 100);
  strokeWeight(10);
  noFill();

  const startRight = 21 * PI / 15;
  const endRight = 9 * PI / 15 + TWO_PI;
  if (step <= 60) {
    let a = lerp(startRight, endRight, step / 60);
    arc(250, 200, 50, 50, startRight, a);
  } else {
    arc(250, 200, 50, 50, startRight, endRight);
  }

  if (step > 60 && step <= 120) {
    let x = lerp(240, 160, (step - 60) / 60);
    let y = lerp(175, 225, (step - 60) / 60);
    line(240, 175, x, y);
  } else if (step > 120) {
    line(240, 175, 160, 225);
  }

  const startLeft = 6 * PI / 15;
  const endLeft = 24 * PI / 15;
  if (step > 120 && step <= 180) {
    let a = lerp(startLeft, endLeft, (step - 120) / 60);
    arc(150, 200, 50, 50, startLeft, a);
  } else if (step > 180) {
    arc(150, 200, 50, 50, startLeft, endLeft);
  }

  strokeWeight(10);
  noFill();
  circle(200, 200, 90);


  if (step > 180) {
  let t = step - 180;
  let textStr = "大阪産業大学";
  let revealSpeed = 10;
  let numChars = constrain(floor(t / revealSpeed), 0, textStr.length);

  let partial = textStr.substring(0, numChars);

  fill(10, 30, 100);
  noStroke();
  textSize(22);
  textAlign(CENTER);
  text(partial, width / 2, 300);
  }

  step++;
}