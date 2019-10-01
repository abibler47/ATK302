var myState = 0;

function setup() {

  createCanvas(800, 800);
}

function draw() {
  background(40, 200, 200);

  switch (myState) {

    case 0:
      background(40, 200, 200);
      textSize(20);
      text("Why did the man forget his car keys?", 100, 100);
      break;

    case 1:
      background(40, 200, 200);
      textSize(15);
      text("He has crippling early onset dementia.", 100, 110);
      break;

  }

}

function mouseReleased() {
  myState++;
  if (myState > 1) {
    myState = 0;
  }
}
