let step = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(60);
}

function draw() {
  background(255);
  stroke(10, 30, 100);
  strokeWeight(10);
  fill(255);

  let leftY = lerp(400, 200, min(step / 60, 1));
  let rightY = lerp(400, 200, min(step / 60, 1));

  circle(150, leftY, 50);
  circle(250, rightY, 50);

  if (step > 60) {
    let bigSize;
    
    if (step <= 90) { 
      let t = (step - 60)
      bigSize = lerp(0, width * 2, constrain(t, 0, 1)); 
    } 

    else if (step > 90 && step <= 150) { 
      let t = (step - 90) / 60;
      bigSize = lerp(width * 2, 90, constrain(t, 0, 1));
    } 
    
    else { 
      bigSize = 90;
    }
    
    circle(200, 200, bigSize);
  }

  if (step > 150) { 
    let x1 = 160;
    let y1 = 225;
    let x2 = lerp(160, 240, constrain((step - 150) / 30, 0, 1));
    let y2 = lerp(230, 175, constrain((step - 150) / 30, 0, 1));
    line(x1, y1, x2, y2);
  }
  
  if (step > 180) { 
    let t = constrain((step - 180) / 60, 0, 1);
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