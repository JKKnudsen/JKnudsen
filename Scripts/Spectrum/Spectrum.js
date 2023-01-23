 let grid,soda,boro,lead,uvSi,irSi,sodaR,boroR,leadR,uvSiR,irSiR;
 let a=0;

function setup() {
  createCanvas(900, 420);
  grid = loadImage('Grid.png');
  soda = loadImage('Soda_Lime.png');
  boro = loadImage('Boro.png');
  lead = loadImage('Lead.png');
  uvSi = loadImage('UV_Silica.png');
  irSi = loadImage('IR_Silica.png');
  sodaR = loadImage('Soda_LimeR.png');
  boroR = loadImage('BoroR.png');
  leadR = loadImage('LeadR.png');
  uvSiR = loadImage('UV_SilicaR.png');
  irSiR = loadImage('IR_SilicaR.png');
}


function draw() {
  background(250);
  textSize(14);
  
  image(grid, 0, 0);
  fill(200);
  
  
  if(mouseX>40+a&&mouseX<120+a&&mouseY>380&&mouseY<405){
    image(sodaR, 0, 0);
    fill(255);
  }else {
    fill(200);
    image(soda, 0, 0);
  }
  rect(40+a,382,80,22); 
  fill(0);
  text('Soda Lime', 45+a, 400);
  a+=100;
  
  
if(mouseX>40+a&&mouseX<120+a&&mouseY>380&&mouseY<405){
    image(boroR, 0, 0);
    fill(255);
  }else {
    fill(200);
    image(boro, 0, 0);
  }
  rect(40+a,382,80,22); 
  fill(0);
  text('Boro', 45+a, 400);
  a+=100;
  
  
if(mouseX>40+a&&mouseX<120+a&&mouseY>380&&mouseY<405){
    image(leadR, 0, 0);
    fill(255);
  }else {
    fill(200);
    image(lead, 0, 0);
  }
  rect(40+a,382,80,22); 
  fill(0);
  text('Lead', 45+a, 400);
  a+=100;
  
  
if(mouseX>40+a&&mouseX<120+a&&mouseY>380&&mouseY<405){
    image(uvSiR, 0, 0);
    fill(255);
  }else {
    fill(200);
    image(uvSi, 0, 0);
  }
  rect(40+a,382,80,22); 
  fill(0);
  text('UV Silica', 45+a, 400);
  a+=100;
  
  
if(mouseX>40+a&&mouseX<120+a&&mouseY>380&&mouseY<405){
    image(irSiR, 0, 0);
    fill(255);
  }else {
    fill(200);
    image(irSi, 0, 0);
  }
  rect(40+a,382,80,22); 
  fill(0);
  text('IR Silica', 45+a, 400);
  a=0;
}
