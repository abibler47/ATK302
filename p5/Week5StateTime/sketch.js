var myState = 0;
var myTimer = 300;
var myBackground;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  myBackground = color(random(256), random(256), random(256));
}

function draw() {
  // put drawing code here

  switch (myState) {
    case 0:
      background(myBackground);
      fill('white');
      textSize(100);
      text("case 0", 300, 100);
      break;

    case 1:
      background(myBackground);
      fill('white');
      textSize(100);
      text("case 1", 300, 100);
      break;

    case 2:
      background(myBackground);
      fill('white');
      textSize(100);
      text("case 2", 300, 100);
      break;
  }

  myTimer--;
  textSize(50);
  text(Math.trunc(myTimer / 60) + 1 + " sec", 100, 100);
  if (myTimer <= 0) {
    myState++;
    if (myState > 2) {
      myState = 0;
    }
    myTimer = 300;
    textSize(50);
    text(myTimer, 100, 100);
    myBackground = color(random(256), random(256), random(256));
  }

}

function mouseReleased() {

}
