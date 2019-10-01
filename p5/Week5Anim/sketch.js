var x = 0;
var dir = true;

function setup() {
  // put setup code here
  createCanvas(200, 200)
}

function draw() {
  // put drawing code here
  background(100)
  //rect(x, 10, 10, 10)
  text("WORD", x, 100)

  if (dir == true) {
    x += 5;
  } else {
    x -= 5;
  }

  if (x > 165) {
    dir = false;
  }

  if (x < 0) {
    dir = true;
  }

}

function mouseReleased() {

}
