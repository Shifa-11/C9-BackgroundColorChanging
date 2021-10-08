function setup() {
createCanvas(1000,1000);
}
function draw() {
  background("yellow");

  if(keyDown("right")){
    background("red");
  }
}