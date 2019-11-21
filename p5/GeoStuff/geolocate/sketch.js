var fence;
var locationData;
var num;
var distance;
var places = [];
var reggieImg;
var alpha, beta, gamma; // orientation data
var pstate1 = false ;
var pstate2 = false ;

function preload() {
  locationData = getCurrentPosition();
  reggieImg = loadImage('assets/reggiePlaceholder.jpeg');
  // TURN "reggieImg;" into "reggieImg = [];" to create an array of different images
  //reggieImg = loadImage('assets/reggiePlaceholder.jpeg'); //these will change to images of pics in front of the buildings for welcome week
  //reggieImg[2] = loadImage('assets/reggiePlaceholder.jpeg');
}

function setup() {
  //fence = new geoFenceCircle(40.506229, -88.990537, 0.02); //sets geofence location to cva room 17
  createCanvas(displayWidth, displayHeight);
  num = 0;
  intervalCurrentPosition(positionPing, 1000);
  places.push(new Place(40.50622797365503, -88.99051350503431, "CVA 17", .02, reggieImg)); // new Place object, for CVA room 17
  places.push(new Place(40.50715473783438, -88.99173550368103, "COB", .02, reggieImg)); // new Place object, for COB.... JUST SWITCHED TO NEW COORDINATES

  places.push(new Place(40.50863221414712, -88.99077591254148, "Old Union", .02, reggieImg)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.50840289459472, -88.9909118880512, "Williams Hall", .02, reggieImg)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.50844449497366, -88.9911676488728, "Cent 4 Perf Arts", .02), reggieImg); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.50864821960959, -88.99120123764614, "Fell Hall", .02, reggieImg)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.50917235949953, -88.99177097641105, "Cook Hall", .02, reggieImg)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.50947612369081, -88.99174125561485, "Edwards Hall", .02, reggieImg)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.51014656358694, -88.9912748009074, "Felmley Hall", .02, reggieImg)); // new Place object, for ISU bridge over College Ave

  // initialize accelerometer variables
  alpha = 0;
  beta = 0;
  gamma = 0;

}

function draw() {

  // for (var i = 0, i < places.length, i++) {
  //   print(places[i].fence.insideFence);
  // }

  // DECORATIONS
  // Just a bunch of text commands to display data coming in from addEventListeners
  background(150);

  textAlign(LEFT);
  textSize(20);
  fill('black');
  text("orientation data:", 25, 25);
  textSize(15);
  text("alpha: " + alpha, 25, 50);
  text("beta: " + beta, 25, 70);
  text("gamma: " + gamma, 25, 90);
  textSize(20);
  text("acceleration data:", 25, 125);
  textSize(15);
  text("permissionState =" + pstate1 + ", " + pstate2, 25, 145) ;

  if((alpha < 120) && (alpha > 80)) {
    text("ghost!!!!!!!!!", 25, 175);

  }
  else {
    text("no ghost", 25, 175);
  }


}

function positionPing(position) {
  textSize(24);
  num++;
  background(255);
  text("lat: " + position.latitude.toFixed(8), 10, 340);
  text("long: " + position.longitude.toFixed(8), 10, 390);
  text("number of updates: " + num, 10, 440);
  distance = calcGeoDistance(locationData.latitude, locationData.longitude, position.latitude, position.longitude, 'mi');

  for (var i = 0; i < places.length; i++) {
    if (places[i].fence.insideFence === true){
      places[i].display();
      break; //should break out of the for loop?
      //text(places[i].desc + ' check1 ' + places[i].fence.insideFence, 10, 240 + (i * 28));
    }
  }

}

function Place(lat, long, desc, radius, reggieImg) {
  this.lat = lat;
  this.long = long;
  this.fence = false;
  this.desc = desc;
  this.radius = radius;
  this.fence = new geoFenceCircle(this.lat, this.long, this.radius); //sets geofence location to coordinates



  this.display = function() {


    image(reggieImg, 10, 10);
    textSize(20);
    text("You are totally at " + this.desc, 10, 240);




  }
}

window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});


// accelerometer Data
window.addEventListener('devicemotion', function(e) {
  // get accelerometer values
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});
