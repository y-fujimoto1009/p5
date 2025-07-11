let t = 0;
let phase = 0;
let logoImage;


function setup() {
  createCanvas(400, 400);
}

function preload() {
  logoImage = loadImage("logo.jpg")
}

function draw() {
  background(255);
  frameRate(60);
  noFill();
  stroke(30,60,200);
  strokeWeight(4);
  translate(width / 2,height / 2);
  
  if (phase === 0) {
    drawInfinity(t);
    t += 0.02;
    if (t > TWO_PI) {
      phase = 1;
      t = 0;
    }
  } else if (phase === 1) {
    drawTransitionToCircles(t);
    t += 0.02;
    if (t > 1) {
      phase = 2
      t = 0
    }
  } else if (phase === 2) {
    drawLogo();
  }
}

function drawInfinity(time) {
  beginShape();
  for (let a = 0; a < TWO_PI; a += 0.05) {
    let r = 80;
    let x = r * sin(a) * cos(a);
    let y = r * sin(a);
    let angle = time;
    let newX = cos(angle) * x - sin(angle) * y;
    let newY = sin(angle) * x + cos(angle) * y;
    vertex(newX, newY);
  }
  endShape();
}

function drawTransitionToCircles(p) {
  let ease = easeOutExpo(p);
  let d = 100;
  let offset = lerp(0, 120, ease);

  ellipse(-offset, 0, d, d);
  ellipse(offset, 0, d, d);
  ellipse(0, 0, d, d);

  
}

function drawLogo() {
  imageMode(CENTER);
  image(logoImage,0,0,200,200);

  strokeWeight(3);
}

function easeOutExpo(x) {
  return x === 1 ? 1 : 1 - pow(2, -10 * x);
}

