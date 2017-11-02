var pos = 100;
var vel = 0;
var acc = 0;

var friction = 0.98;


function setup() {
  createCanvas(800,600);
}


function draw() {
  background(255);


  //update 
  vel = vel + acc;
  vel = vel*friction;
  pos = pos + vel;

  ellipse(pos,height/2,5,5);


}

function keyPressed(){

console.log('keyPressed',key)
  if(key == 'Q'){
    acc = -0.1;
  }

  else if(key == 'W'){
    acc = 0.1;
  }


}

function keyReleased(){

  console.log('keyReleased');
  acc = 0;


}