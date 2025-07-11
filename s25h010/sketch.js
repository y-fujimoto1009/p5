et classifier;
let video;
let label = "待機中";
let playerHand = "";
let computerHand = "";
let result = "";
let lastCheckTime = 0;
const modelURL = "https://teachablemachine.withgoogle.com/models/XXXXX/"; // ここを自分のURLに変更

function preload() {
  classifier = ml5.imageClassifier(modelURL + "model.json");
}

function setup() {
  createCanvas(640, 520);
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();
  classifyVideo();
}

function draw() {
  background(220);
  image(video, 0, 0);
  
  textSize(24);
  fill(0);
  text("あなたの手: " + playerHand, 10, 270);
  text("コンピュータ: " + computerHand, 10, 310);
  text("結果: " + result, 10, 350);
// 3秒ごとに判定
  if (millis() - lastCheckTime > 3000) {
    lastCheckTime = millis();
    playerHand = label;
    computerHand = random(["Rock", "Paper", "Scissors"]);
    result = judge(playerHand, computerHand);
  }
}

function classifyVideo() {
  classifier.classify(video, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  label = results[0].label;
  classifyVideo();
}