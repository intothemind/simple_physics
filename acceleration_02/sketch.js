var pos; //vector
var vel; //vector
var acc; //vector

var friction = 0.98;


function setup() {
  createCanvas(800,600);

  pos = createVector(width/2,height/2);
  vel = createVector(0,0);
  acc = createVector(0,0);
}


function draw() {
  background(255);

  console.log(acc);
  //update 
  
  //vel = vel + acc;
  vel.add(acc);

  //vel = vel*friction;
  vel.mult(friction);

  //pos = pos + vel;
  pos.add(vel);

  ellipse(pos.x,pos.y,10,10);

}

function keyPressed(){

console.log('keyPressed',key)
  if(key == 'A'){
    acc.set(-0.1,0)
  }
  else if(key == 'D'){
    acc.set(0.1,0);
  }
  else if(key == 'W'){
    acc.set(0,-0.1);
  }
  else if(key== 'X'){
    acc.set(0,0.1);
  }

}

function keyReleased(){

  console.log('keyReleased');
  acc.set(0,0);


}