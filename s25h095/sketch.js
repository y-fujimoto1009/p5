let x = 0;
let y = 200;
let vy = 0;
let gravity = 0.6;
let bounce = -0.8;

let squash = 1;
let squashTarget = 1;
let x1 = -80;
let x2 = 80;
let step = 0;

function setup() {
  createCanvas(400, 400);
  ellipseMode(CENTER);
  angleMode(RADIANS);
}

function draw() {
  background(255);

  // Slide logo horizontally
  if (x < width / 2) {
    x += 4;
  }

  // Move side arcs inward
  if (x1 < -40) x1 += 0.5;
  if (x2 > 40) x2 -= 0.5;

  // Vertical bounce
  vy += gravity;
  y += vy;
  if (y > height - 80) {
    y = height - 80;
    vy *= bounce;
  }

  squash = lerp(squash, squashTarget, 0.2);

  push();
  translate(x, y);
  scale(1, squash);
  noFill();
  stroke(30, 90, 255);

  // Left arc
  strokeWeight(5);
  arc(x1, -200, 40, 40, PI / 2, PI * 1.5);

  // Center circle
  strokeWeight(6);
  ellipse(0, -200, 80, 80);

  // Right arc
  strokeWeight(5);
  arc(x2, -200, 40, 40, -PI / 2, PI / 2);
  pop();

  let leftX = x + x1;
  let leftY = y - 200 + 20;
  let rightX = x + x2;
  let rightY = y - 200 - 20;

  stroke(30, 90, 255);
  strokeWeight(5);
  line(leftX, leftY, rightX, rightY);
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

//function mousePressed() {
  //print("x" + mouseX + " y" + mouseY);
//}
