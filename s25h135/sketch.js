let step = 0;

function setup() {
    createCanvas(400, 400);
    frameRate(60);
}

function draw() {
    background(255);
    
    let progress1 = constrain(step / 60, 0, 1);
    
   
    let x1 = lerp(50, 150, progress1);
    let y1 = lerp(350, 200, progress1);
    
    
    let x2 = lerp(350, 250, progress1);
    let y2 = lerp(50, 200, progress1);
    
    fill(255);
    stroke(10, 30, 100);
    strokeWeight(10);
    circle(x1, y1, 50);
    circle(x2, y2, 50);
    
    
    if (step > 60) {
        let shrinkProgress = constrain((step - 60) / 30, 0, 1);
        let bigSize = lerp(400, 90, shrinkProgress); 
        fill(255);
        stroke(10, 30, 100);
        strokeWeight(10);
        circle(200, 200, bigSize);
    }
    
    
    if (step > 90) {
        let lineProgress = constrain((step - 90) / 2, 0, 1);
        let x1 = 160;
        let y1 = 225;
        let x2 = lerp(160, 240, lineProgress);
        let y2 = lerp(225, 175, lineProgress);
        
        stroke(10, 30, 100);
        strokeWeight(10);
        line(x1, y1, x2, y2);
    }
    
   
    if (step > 92) {
        let textProgress = constrain((step - 92) / 60, 0, 1);
        let moveY = lerp(-200, 0, textProgress);
        let alpha = textProgress * 255;
        
        fill(10, 30, 100, alpha);
        noStroke();
        textSize(35);
        textAlign(CENTER);
        text("大阪産業大学", width / 2,  120+moveY);
    }
    
    step++;
    
  
    if (step > 180) {
        step = 0;
    }
}