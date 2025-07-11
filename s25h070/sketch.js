let step = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(60);
}

function draw() {
  background(255);

  let t = constrain(step / 30, 0, 1);
  let dropY = lerp(100,200,t);  

  let leftX = 150;
  let rightX = 250;

  stroke(10, 30, 100);
  strokeWeight(10);
  fill(255);
  circle(leftX, dropY, 50);
  circle(rightX, dropY, 50);
  circle(200, 200, 90);

  let x1 = 160;
  let y1 = 225;
  let x2 = 240;
  let y2 = 175;
  line(x1, y1, x2, y2);

  if (step > 90) {
    let textT = constrain((step - 90) / 30, 0, 1);
    let moveY = lerp(20, 0, textT);
    let alpha = textT * 255;
    fill(10, 30, 100, alpha);
    noStroke();
    textSize(22);
    textAlign(CENTER);
    text("大阪産業大学", width / 2, 300 + moveY);
  }

  step++;
}
