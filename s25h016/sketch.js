let step = 0;
let pulseCount = 0;
const pulseMax = 3;
const pulsePeriod = 60;

function setup() {
  createCanvas(400, 400);
  frameRate(60);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  strokeWeight(10);
  stroke(10, 30, 100);
  noFill();

  if (step < 60) {
    let leftX = lerp(0, 200, step / 60);
    let rightX = lerp(400, 200, step / 60);
    circle(leftX, 200, 90);
    circle(rightX, 200, 90);
  }

  if (step >= 60) {
    circle(200, 200, 90);

    if (step >= 90) {
      let progress = constrain((step - 90) / 40, 0, 1);

      push();
      translate(200, 200);
      rotate(-180 * (1 - progress));
      circle(-60, 0, 30);
      pop();

      push();
      translate(200, 200);
      rotate(180 * (1 - progress));
      circle(60, 0, 30);
      pop();
    }

    if (step >= 140) {
      let bubbleCount = 10;
      let appear = constrain((step - 140) / 30, 0, 1);

      if (pulseCount < pulseMax) {
        for (let i = 0; i < bubbleCount; i++) {
          let t = i / (bubbleCount - 1);
          let x = lerp(160, 240, t);
          let y = lerp(225, 175, t);
          if (t <= appear) {
            let pulse = 1 + 0.3 * sin((frameCount % pulsePeriod) * TWO_PI / pulsePeriod + i * 20);
            fill(10, 30, 100);
            noStroke();
            circle(x, y, 10 * pulse);
          }
        }

        if ((frameCount % pulsePeriod) === 0) {
          pulseCount++;
        }
      } else {
        stroke(10, 30, 100);
        strokeWeight(3);
        line(165, 225, 235, 175);
      }
    }
  }

 
  if (step > 180) {  
    let t = constrain((step - 200) / 60, 0, 1);
    let moveY = lerp(20, 0, t);
    let alpha = t * 255;
    fill(10, 30, 100, alpha);
    noStroke();
    textSize(22);
    textAlign(CENTER);
    text("大阪産業大学", width / 2, 300 + moveY);
  }

  if (pulseCount < pulseMax || step < 200) {
    step++;
  }
}

