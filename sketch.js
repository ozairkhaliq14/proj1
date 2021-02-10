let x = 2500;
let y = 1400;
let r;
let g;
let b;
let a;
let ax = 3;
let xspeed = 5;
let yspeed = 5;
let strokeVal = 10;
let frX = 0.001;
let frY = 0.001;
let frZ = 0.01;

  






function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    background(255, 255, 255);
}

function draw(){
  
  if (keyIsDown(88)) {
     rotateX(frameCount * frX)
     }
  else if (keyIsDown(89)) {
     rotateY(frameCount * frX)
     }
  else if (keyIsDown(90)) {
     rotateZ(frameCount * frX)
     }
  else if (keyIsDown(65)) {
     rotateX(frameCount * frX)
     rotateY(frameCount * frX)
     rotateZ(frameCount * frX)
     }
  else if (keyIsDown(70)) {
     rotateX(frameCount * 0.1)
     rotateY(frameCount * 0.1)
     rotateZ(frameCount * 0.1)
     }
  else if (keyIsDown(13)) {
    clear();
  }
    
  
  if(x > windowWidth) {
    xspeed = -5;
    fill(127, 212, 93);
    //rotate(PI / ax);
  }
  if(x < 0){
    xspeed = 5;
    fill(43, 97, 212);
    //rotate(PI / ax);
  }
  if(y > windowHeight){
    //rotate(PI / ax);
    yspeed = -5
    
  }
  if(y < 0) {
    //rotate(PI / ax);
    yspeed = 5;
    
  }
  if (x > 50) {
    a = random(0, 250);
       fill(184, 157, 157, a);
    }
   if (x > 100) {
     a = random(0, 250);
       fill(127, 235, 204, a);
   }
    if(x > 150) {
      a = random(0, 250);
        fill(140, 73, 73, a);
    }
    if(x > 200) {
      a = random(0, 250);
        fill(255, 255, 0, a);
    }
    if(x > 250) {
      a = random(0, 250);
        fill(255, 0, 225, a);
    }
    if(x > 300) {
      a = random(0, 250);
        fill(127, 212, 93, a);
    }
    if(x > 350) {
      a = random(0, 250);
        fill(166, 15, 15, a);
    }
    if(x > 400) {
      a = random(0, 250);
        fill(176, 173, 14, a);
    }
    if(x > 450) {
      a = random(0, 250);
        fill(12, 179, 51, a);
    }
    if(x > 500) {
      a = random(0, 250);
        fill(19, 164, 186, a);
    }
    if(x > 550) {
      a = random(0, 250);
        fill(51, 17, 186, a);
    }
    if(x > 600) {
      a = random(0, 250);
        fill(147, 15, 184, a);
    }
    if(x > 650) {
      a = random(0, 250);
        fill(132, 184, 22, a);
    }
    if(x > 700) {
      a = random(0, 250);
        fill(184, 141, 22, a);
    }
    if(x > 750) {
      
  r = random(0, 255); 
  g = random(0, 255); 
  b = random(0, 255); 
  a = random(0, 50);
      
        fill(r, g, b, a);
     
    }
  
    if(x > 850) {
      
  r = random(0, 255); 
  g = random(0, 255); 
  b = random(0, 255); 
  a = random(0, 150);
      
        //x = random(800, 1600);

        fill(r, g, b, a);
     
    }
  
    if(x > 950) {
      
  r = random(0, 255); 
  g = random(0, 255); 
  b = random(0, 255); 
  a = random(0, 200);
      
        fill(r, g, b, a);
     
    }
  
    if(x > 1050) {
      
  r = random(0, 255); 
  g = random(0, 255); 
  b = random(0, 255); 
  a = random(0, 250);
      
        fill(r, g, b, a);
     
    }
  
    if(x > 2400) {
      
  r = random(0, 255); 
  g = random(0, 255); 
  b = random(0, 255); 
  a = random(0, 10);
      
        fill(r, g, b, a);
     
    }
  
    //ax = ax * 8;
    //translate(width / 6, height / 6);
    //rotate(PI / ax);

  
  
  
  
  
  
  //rotateX(frameCount * frX);
  //rotateY(frameCount * frY);
  //rotateZ(frameCount * frZ);
  
  
    
    
  stroke(strokeVal);
  //cone(x*2, y*2);
  //fill (67, 70, 75);
  cylinder(x, y);
  orbitControl();
  
  
  
  //x = x + xspeed;
  //y = y + yspeed;
  
}
