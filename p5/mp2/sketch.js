var myState = 0;
var timer = 0;

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here

  background(100)

  switch (myState) {
    case 0:
      background(255, 0, 0);
      fill(255);
      text("click", 100, 50)

      timer++;
      if (timer > 100) {
        myState = 1;
      }
      break;

    case 1:
      background(255, 127, 0);
      fill(255);
      text("case 1", 100, 50)

      timer++;
      if (timer > 200) {
        myState = 2;
      }
      break;

    case 2:
      background(255, 255, 0);
      fill(0);
      text("case 2", 100, 50)

      timer++;
      if (timer > 300) {
        myState = 3;
      }
      break;

    case 3:
      background(0, 255, 0);
      fill(0);
      text("case 3", 100, 50)

      timer++;
      if (timer > 400) {
        myState = 4;
      }
      break;

    case 4:
      background(0, 0, 255);
      fill(255);
      text("case 4", 100, 50)

      timer++;
      if (timer > 500) {
        myState = 5;
      }
      break;

    case 5:
      background(255, 0, 255);
      fill(255);
      text("case 5", 100, 50)

      timer++;
      if (timer > 600) {
        myState = 0;
        timer = 0

      }
      break;
  }

}

function mouseReleased() {

  console.log("beep");
  myState++;
  if (myState > 5) {
    myState = 0;
  }

}
