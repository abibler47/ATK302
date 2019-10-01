var timer = 300;
var myState = 0;
var myBackground;

function setup() {
  // put setup code here
  createCanvas (800, 800)
  myBackground = color(random(256), random(256), random(256));
}

function draw() {
  // put drawing code here
  background(myBackground);
  timer--;
  textSize(50);
  text(Math.trunc(timer / 60) + 1 + " sec", 100, 100);
  if (timer <= 0) {
    myBackground = color(random(256), random(256), random(256));
    timer = 300;
    textSize(50);
    text(timer, 100, 100);
  }

}

function mouseReleased() {

}
