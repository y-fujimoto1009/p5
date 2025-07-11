let angle1 = 0;
let angle2 = 0;
let centerX;
let centerY;
let radius = 62;
let radius2 = -62;
let alphaValue = 0; 
let fadeInSpeed = 15;

function setup() 
{
  createCanvas(400, 400);
  background(255,255, 255);
  
  centerX = width / 2;
  centerY = height / 2;
}


function draw() 
{
  background(255,255, 255);
  
  // --小さな円1--
  let x = centerX + radius * cos(angle1);
  let y = centerY + radius * sin(angle1);
  
  fill(255, 255, 255);
  strokeWeight(14.0);
  stroke(0, 64, 152);
  ellipse(x, y,50, 50);
  
  if ( x <= 138.01)
  {
    noLoop();
  }
  angle1 += 0.07;
  
  // --小さな円2--
  let x2 = centerX + radius2 * cos(angle2);
  let y2 = centerY + radius2 * sin(angle2);
  
  fill(255, 255, 255);
  strokeWeight(14.0);
  stroke(0, 64, 152);
  ellipse(x2, y2,50, 50);
  
  angle2 += 0.07;
  
  // --中央の円--
  fill(255, 255, 255);
  strokeWeight(14.0);
  stroke(0, 64, 152);
  ellipse(centerX, centerY, 100, 100,);  
  
  // --中央の線--  
  stroke(0, 64, 152);
  strokeWeight(14.0);
  line (155, 220, 245, 180);
  
  // --大阪産業大学 テキスト--
  fill(22, 50, 89, alphaValue);
  textAlign(CENTER, TOP);
  textSize(40);
  textStyle(BOLD);
  noStroke();
  text('大阪産業大学', 200, 300);
  
  alphaValue += fadeInSpeed;
}