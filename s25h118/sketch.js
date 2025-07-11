let d = 0;
let x = 200;
let y = 200;

const a = 120;
const b = 40;
const c = 60;
const set = 100;

const e = 15;
const f = -35;

const g = 130;

let h = false;
let i = 16;

let j = 0; // テキストアニメーション用カウンター

function setup() {
  createCanvas(400, 400);
  strokeCap(ROUND);
  angleMode(RADIANS);
  textAlign(CENTER);
  textSize(22);
}

function draw() {
  background(230, 240, 255);

  if (!h) {
    d += 1;
    i += 0.03;
    if (d > g) d = g;
  }

  let blueDiameter = map(d, 0, g, a, b);
  blueDiameter = constrain(blueDiameter, b, a);
  let blueRadius = blueDiameter / 2;

  let　set2 = map(d, 0, g, set, blueRadius);

  if (!h && (set2 - blueRadius) <= (d / 2 + e / 2 + f)) {
    h = true;
  }

  noFill();
  stroke(0, 64, 152);
  strokeWeight(e);
  circle(x, y, d);

  push();
  translate(x, y);
  rotate(i);

  noFill();
  stroke(0, 64, 152);
  strokeWeight(e);

  let centerLeftX = -set2;
  let centerRightX = set2;
  let centerY = 0;

  arc(centerLeftX, centerY, blueDiameter, blueDiameter, PI / 2, 3 * PI / 2);
  arc(centerRightX, centerY, blueDiameter, blueDiameter, 3 * PI / 2, PI / 2);

  noStroke();
  fill(230, 240, 255);
  circle(0, 0, c);

  noFill();
  stroke(0, 64, 152);
  strokeWeight(e);
  line(centerLeftX, centerY + blueRadius, centerRightX, centerY - blueRadius);

  pop();

  if (h) {
    j++;
    let t = constrain(j / 20, 0, 1);
    let moveY = lerp(20, 0, t);
    let alpha = t * 255;
    fill(10, 30, 100, alpha);
    noStroke();
    text("大阪産業大学", width / 2, 300 + moveY);
  } 
  else {
    j = 0;
  }
}
