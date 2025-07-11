let angle = 0;
let step =0
function setup() {
  createCanvas(400, 400);
  frameRate(60)
}

function draw() {
  background(255);
  stroke(10,20,100)
  strokeWeight(10)
  fill(255)
  
  let leftX = lerp(300,90,min(step/60,1))
  let leftY = lerp (100,210,min(step/60,1))
  circle(leftX,leftY,50)
  
  let rightX = lerp(300,210,min(step/60,1))
  let rightY = lerp(200,210,min(step/60,1))
  circle(rightX,rightY,50)
  
  let midX = lerp(300,150,min(step/60,1))
  let midY = lerp(150,210,min(step/60,1))
  circle(midX,midY,100)
  
  let x1=lerp(325,105,min(step/60,1))
  let x2=lerp(275,195,min(step/60,1))
  let y1=lerp(100,190,min(step/60,1))
  let y2=lerp(190,230,min(step/60,1))
  line(x1,y1,x2,y2)

  let t = constrain((step -85) / 60, 0, 1);
 let moveX= lerp(0,100,t);
 let alpha = t * 255;
 fill(10, 30, 100, alpha);
 noStroke();
 textSize(22);
 textAlign(CENTER);
 text("大阪産業大学", 250-moveX,300)

 
  step++
  
}
