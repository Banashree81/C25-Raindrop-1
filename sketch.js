var rainDrops = [];

function setup() {
  createCanvas(800,400);
  for(var i = 0; i < 300; i++){
    rainDrops.push(new Raindrop());
 }
 
}
  


function draw() {
  background(0,0,0);  
  displayRaindrops(); 
  
}

function displayRaindrops(){
 for(var i = 0; i < 300; i++){
    rainDrops[i].display();
    rainDrops[i].fall();
  }

  
}