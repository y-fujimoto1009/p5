let chroma = 0;
let sec = 0;
let step = 0;
let timer = 0;

function setup() {
  createCanvas(400, 400);
  background(255);
  noStroke();
  angleMode(RADIANS);
}

function draw() {
  if (step >= 0) drawOring();
  if (step >= 1) drawSring();
  if (step >= 2) drawText();

  timer++;
  if (step === 0 && chroma >= 255 && timer > 60) {
    step = 1;
    timer = 0;
  } else if (step === 1 && sec >= 1 && timer > 60) {
    step = 2;
    timer = 0;
  }
}

function drawOring() {
  fill(0, 64, 152, chroma);
  strokeWeight(11);
  stroke(0, 64, 152, chroma);
  noFill();
  circle(200, 200, 100);
  if (chroma < 255) {
    chroma += 2;
    chroma = min(chroma, 255);
  }
}

function drawSring() {
  noFill();
  stroke(0, 64, 152);
  strokeWeight(9);
  arc(150, 200, 50, 50, 1, 5);
  for (let j = 0; j < 1; j++) {
    sec = min(sec + 0.01, 1);
    x = lerp(160, 240, sec);
    y = lerp(220, 180, sec);
    circle(x, y, 5);
  }
  arc(250, 200, 50, 50, 4.5, 1.5);
}

function drawText() {
  fill(0, 64, 152);
  strokeWeight(1);
  textSize(24);
  textAlign(LEFT, TOP);
  text("大阪産業大学", 125, 275);
}
