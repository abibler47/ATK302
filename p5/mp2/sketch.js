var myState = 0;
var timer = 0;
var diamond, heart, spade, club;
var cardNum = 0;
var lobster, mansalva;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  diamond = loadImage('assets/diamond.png');
  heart = loadImage('assets/heart.png');
  spade = loadImage('assets/spade.png');
  club = loadImage('assets/club.png');

  lobster = loadFont('assets/lobster.ttf');
  mansalva = loadFont('assets/mansalva.ttf');

}

function draw() {
  // put drawing code here
  background(150);

  rectMode(CENTER);
  noStroke();
  fill(255);
  rect(width / 2, height / 2, 200, 300, 20);
  textSize(40);
  textFont(mansalva);
  text('Pick a card, any card!', 200, 600);
  textSize(20)
  fill(0);
  text('click to pick a card', 200, 650);





  switch (myState) {
    case 0: //base
      fill(224, 72, 95);
      rect(width / 2, height / 2, 190, 290, 20);


      break;

    case 1:
      fill(255);
      image(diamond, width / 2 - 80, height / 2 - 130);
      image(diamond, width / 2 + 30, height / 2 + 80);


      textSize(70);
      fill('red');
      textFont(lobster);
      text(cardNum, 375, 420);

      doTimer();

      break;

    case 2:
      fill(255);
      image(heart, width / 2 - 80, height / 2 - 130);
      image(heart, width / 2 + 30, height / 2 + 80);

      textSize(70);
      fill('red');
      textFont(lobster);
      text(cardNum, 375, 420);


      doTimer();

      break;


    case 3:

      fill(255);
      image(spade, width / 2 - 80, height / 2 - 130);
      image(spade, width / 2 + 30, height / 2 + 80);

      textSize(70);
      fill('black');
      textFont(lobster);
      text(cardNum, 375, 420);


      doTimer();

      break;


    case 4:

      fill(255);

      image(club, width / 2 - 80, height / 2 - 130);
      image(club, width / 2 + 30, height / 2 + 80);

      textSize(70);
      fill('black');
      textFont(lobster);
      text(cardNum, 375, 420);



      doTimer();

      break;

  }

  textFont(mansalva);
  textSize(20);
  fill('black');
  text(timer, 20, 20);


  //console.log(timer)

}

function doTimer() {
  timer = timer + 1;
  if (timer > 300) {
    myState = 0;
    timer = 0;
  }
}

function doNumber() {

  var num;

  num = round(random(1, 13));
  textSize(30);

  if (num == 1) {
    return 'A';
  } else if (num == 11) {
    return 'J';
  } else if (num == 12) {
    return 'Q';
  } else if (num == 13) {
    return 'K';
  } else {
    return num;
  }


}

function mouseReleased() {

  myState = round(random(1, 4));
  cardNum = doNumber();
  timer = 0;

}
