var song1;
var playing = false;

function preload() {
  song1 = loadSound('assets/goldbug1.mp3')
}

function setup() {
  // put setup code here

}

function draw() {
  // put drawing code here

}

function mouseReleased() {
  if (song1.isPlaying()) {
    song1.pause();
  } else {
    song1.play();
  }

}
