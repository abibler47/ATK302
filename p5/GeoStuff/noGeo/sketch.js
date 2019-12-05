var fence;
var locationData;
var num;
var distance;
var places = [];
var reggieImg;
var alpha, beta, gamma; // orientation data
var pstate1 = false ;
var pstate2 = false ;
var ghost = false;
var stories = [];
var alphaGhost, betaGhost;
var ghostNum;
var myState = 0;
var randomStory;

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
  // intervalCurrentPosition(positionPing(locationData), 1000);
  // places.push(new Place(40.50622797365503, -88.99051350503431, "CVA 17", .02, reggieImg)); // new Place object, for CVA room 17
  // places.push(new Place(40.50715473783438, -88.99173550368103, "COB", .02, reggieImg)); // new Place object, for COB.... JUST SWITCHED TO NEW COORDINATES
  //
  // places.push(new Place(40.50863221414712, -88.99077591254148, "Old Union", .02, reggieImg)); // new Place object, for ISU bridge over College Ave
  // places.push(new Place(40.50840289459472, -88.9909118880512, "Williams Hall", .02, reggieImg)); // new Place object, for ISU bridge over College Ave
  // places.push(new Place(40.50844449497366, -88.9911676488728, "Cent 4 Perf Arts", .02), reggieImg); // new Place object, for ISU bridge over College Ave
  // places.push(new Place(40.50864821960959, -88.99120123764614, "Fell Hall", .02, reggieImg)); // new Place object, for ISU bridge over College Ave
  // places.push(new Place(40.50917235949953, -88.99177097641105, "Cook Hall", .02, reggieImg)); // new Place object, for ISU bridge over College Ave
  // places.push(new Place(40.50947612369081, -88.99174125561485, "Edwards Hall", .02, reggieImg)); // new Place object, for ISU bridge over College Ave
  // places.push(new Place(40.51014656358694, -88.9912748009074, "Felmley Hall", .02, reggieImg)); // new Place object, for ISU bridge over College Ave

  stories.push(new Story("Welcome to Edwards Hall! This beautiful building located on the Northwest side of the campus is home to the School of Nursing and the Charles L. Capen Auditorium. The auditorium was named after Capen, who was a prominent lawyer within the Bloomington/Normal area. However, while this man was well respected, he has a dark past. Legend has it that Capen did not die peacefully with his wife and kids at his side, but rather a more sinister way. Capen was accused of stealing money from his children. While he was a very successful man, he wasn’t perfect. His kids didn’t take too kindly to this. His children murdered him in his home in Bloomington. After his death, the auditorium was named after him and his contributions. His children, still furious with his actions, decided to punish the university for naming the auditorium after their father. They dug up his body and stowed it away somewhere within the building (the location is still unknown). People report hearing strange sounds throughout the building and strange single room power outages."))

  stories.push(new Story("Cook hall is a one-of-a-kind building located on the west side of campus and houses the school of music. The building used to be the former gymnasium in the school. However, students have been reporting strange occurrences in the building for years. Some rooms dipping in temperature drastically in a short period of time, strange noises, rooms being rearranged in mere seconds while students and staff leave the room. Something strange is going on. Well, according to ISU lore, a construction worker who was on the project when the building was being created was accidentally buried beneath the building’s foundation causing him to suffocate to death. His body has never been recovered and supposedly haunts the building even to this day."))

  stories.push(new Story("Fell Hall. THe structure that houses the academic and administrative space on campus. The building, while beautiful, has a sinister past behind it. Fell used to be a dormitory building on campus. Back in 1903, Jonathan Davis, an Elementary Education student at the school, mysteriously disappeared one day. His body was found in the basement of the building three weeks later. The autopsy ruled natural causes as the cause of death, but rumors started spreading that Davis was murdered with ricin and stowed away in the building. While this is not what the official ruling of death, legend has it that he still haunts the building and other nearby parts of campus as well."))

  stories.push(new Story("Legend has it the spirit of the old librarian, Ange Milner, roams the old bookstacks of Williams Hall. The bookstacks, which are now mostly empty aside from the buildup of dust over the years and old book pages found laying around, used to house old books. The books have since been relocated to a warehouse off-campus."))

  stories.push(new Story("The Old Union Building is home to the School of Information Technology, the Web and Interactive Communications office, and WGLT Radio.The Old Union Building opened in 1956 and was the original student union on campus. It has also been called the Educational Media Building and Media Services.President Strand named this building Old Union in the 1990s. But we call that connecting to spirit world. Which the old technology built to connecting you to see the world that not exist in the reality."))

  stories.push(new Story("Felmley Hall of Science contains offices from the School of Biological Sciences, the Illinois State Planetarium, the Department of Health Sciences, and the Department of Geography, Geology, and the Environment. Felmley Hall of Science is named after David Felmley, president of Illinois State Normal University from 1900-1930. David Felmley was an advocate for the needs of students and faculty for three decades and worked to expand areas of curriculum. Felmley Hall opened in 1930. In 1962, the University received a grant from the National Science Foundation to assist with a $1.8 million annex. The science department has a secret hall room for all the dangerous chemical using stuff. Long times ago, our lead student was doing a dangerous lab overnight which turned out the chemical changed. Then he turned himself into monster science beast. You will not want to become like that and have to close yourself into a cage, never being out again."))

  stories.push(new Story("The construction of the Center for Performing Arts cost $19.8 million and was completed and dedicated in the Fall of 2002. An 800-seat concert hall and a 450-seat theatre are the building's main features. As you could see, the most part of the building is built by large pieces of glasses. At night, you can see all the ghost around by this area which could stop by. You don’t want to look at the glass by the dark outside unless you wants to “talk” with your neighbor ghost."))

  stories.push(new Story("The 118,000-square foot State Farm Hall of Business building, designed in the Georgian style of architecture, opened in January 2005. The facility blends the small college campus environment with a corporate presence and state-of-the art technologies. The COUNTRY Insurance and Financial Services Atrium, the central core of the building, was designed to reflect the modern, strategic focus of Corporate America. Those entering the building are greeted by a six-story, 1,000-plus square foot open area. A glass wall on five levels offers a picturesque view of the courtyard. The Atrium also serves as the crossroads between the building's classroom wing on the building's west side and the faculty/administrative wing on the first, second, and third levels on the building's east side. The building's four stories wrap around a courtyard in a 21st century version of the Oxford College model. Three arched openings from the Quad lead directly into the courtyard, a scenic location for informal study sessions, conversation, and meetings. University Street, on the south end of the quad. Business hall is the most beautiful building here at ISU. But its not only because the cost outside, but always it’s the ghost bank inside. Once the night has come, the whole building turned into a bank for the ghost storge their daily use and supplies."))

  // initialize accelerometer variables
  alpha = 0;
  beta = 0;
  gamma = 0;
  alphaGhost = random(330);
  betaGhost = random(150);
  randomStory = round(random(stories.length) - 0.5);

}

function draw() {

  // for (var i = 0, i < places.length, i++) {
  //   print(places[i].fence.insideFence);
  // }

  // DECORATIONS
  // Just a bunch of text commands to display data coming in from addEventListeners
  background('red');
  // fill('red');
  // rect(0, 0, 300, 200);

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

  text("Ghost is around " + alphaGhost + " alpha, " + betaGhost + " beta", 25, 200)

  switch (myState) {
    case 0:
    if((alpha > alphaGhost) && (alpha < alphaGhost + 30) && (beta > betaGhost) && (beta < betaGhost + 30) ) {
      myState = 1;
      text("ghost!!!!!!!!!", 25, 175);



    }
    else {
      text("no ghost", 25, 175);
      // console.log("no ghost");
    }

      break;

    case 1:
      //play music


      myState = 2;
      break;

    case 2:
      textSize(12);
      text(stories[randomStory].story, 25, 220);
      break;
  }



  // if((alpha > alphaGhost) && (alpha < alphaGhost + 30) && (beta > betaGhost) && (beta < betaGhost + 30) ) {
  //   text("ghost!!!!!!!!!", 25, 175);
  //   console.log("ghost");
  //   text()
  //   ghost = true;
  //
  // }
  // else {
  //   text("no ghost", 25, 175);
  //   // console.log("no ghost");
  //   ghost = false;
  //   text(stories[round(random(stories.length))].story)
  // }


}

// function positionPing(position) {
//   textSize(24);
//   num++;
//   background(255);
//   text("lat: " + position.latitude.toFixed(8), 10, 340);
//   text("long: " + position.longitude.toFixed(8), 10, 390);
//   text("number of updates: " + num, 10, 440);
//   distance = calcGeoDistance(locationData.latitude, locationData.longitude, position.latitude, position.longitude, 'mi');
//
//   for (var i = 0; i < places.length; i++) {
//     if (places[i].fence.insideFence == true && ghost == true){
//       places[i].display();
//       break; //should break out of the for loop?
//       //text(places[i].desc + ' check1 ' + places[i].fence.insideFence, 10, 240 + (i * 28));
//     }
//   }
//
// }

// function Place(lat, long, desc, radius, reggieImg) {
//   this.lat = lat;
//   this.long = long;
//   this.fence = false;
//   this.desc = desc;
//   this.radius = radius;
//   this.fence = new geoFenceCircle(this.lat, this.long, this.radius); //sets geofence location to coordinates
//
//
//
//   this.display = function() {
//
//
//     image(reggieImg, 10, 10);
//     textSize(20);
//     text("You are totally at " + this.desc, 10, 240);
//
//
//
//
//   }
// }

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

function Story(words) {
  this.story = words;
}
