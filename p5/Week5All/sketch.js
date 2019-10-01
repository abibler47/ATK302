var x = 0;
var dir = true;
var myState = 0;

function setup() {
  // put setup code here
  createCanvas(500, 500)
}

function draw() {
  // put drawing code here
  background(100)





  if (dir == true) {
    x += 5;
  } else {
    x -= 5;
  }

  if (x > width - 100) {
    dir = false;
  }

  if (x < 0) {
    dir = true;
  }

  switch(myState) {
    case 0:
    background(255, 0, 0);
    fill(0);
    text("case 0", 100, 50)
    break;

    case 1:
    background(0, 255, 0);
    fill(0);
    text("case 1", 100, 50)
    break;

    case 2:
    background(0, 0, 255);
    fill(0);
    text("case 2", 100, 50)
    break;
  }

  fill(200)
  rect(x, 100, 100, 100)

}

function mouseReleased() {
  if ((mouseX >= x) && (mouseX <= x + 100) && (mouseY >= 100) && (mouseY <= 200)) {
    console.log("beep");
    myState++;
    if (myState > 2) {
      myState = 0;
    }
  }
}
