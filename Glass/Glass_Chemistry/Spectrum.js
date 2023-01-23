 let grid,soda,lead,uvSi,irSi,sodaR,boroR,leadR,uvSiR,irSiR;
let a=0;
function setup() {
  createCanvas(900,420);
  
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
  textSize(14);
}


function draw() {
  background(255);
  tint(255,255);
  image(grid, 0, 0);
  fill(200);
  
  if(mouseX>20+a&&mouseX<80+a&&mouseY>395&&mouseY<415){
    tint(255,255);
    image(sodaR, 0, 0);
    fill(230);
    rect(20+a,395,80,20);
  }
  else{
    tint(255,100);
    image(soda,0,0);
    fill(200);
    rect(20+a,395,80,20);
  }
  fill(0);
  text('Soda Lime',25+a,410);
  a+=100;
  
  if(mouseX>20+a&&mouseX<80+a&&mouseY>395&&mouseY<415){
    tint(255,255);
    image(boroR, 0, 0);
    fill(230);
    rect(20+a,395,80,20);
  }
  else{
    tint(255,100);
    image(boro,0,0);
    fill(200);
    rect(20+a,395,80,20);
  }
  fill(0);
  text('Boro',25+a,410);
  a+=100;
  
  if(mouseX>20+a&&mouseX<80+a&&mouseY>395&&mouseY<415){
    tint(255,255);
    image(leadR, 0, 0);
    fill(230);
    rect(20+a,395,80,20);
  }
  else{
    tint(255,100);
    image(lead,0,0);
    fill(200);
    rect(20+a,395,80,20);
  }
  fill(0);
  text('Lead',25+a,410);
  a+=100;
  
  if(mouseX>20+a&&mouseX<80+a&&mouseY>395&&mouseY<415){
    tint(255,255);
    image(uvSiR, 0, 0);
    fill(230);
    rect(20+a,395,80,20);
  }
  else{
    tint(255,100);
    image(uvSi,0,0);
    fill(200);
    rect(20+a,395,80,20);
  }
  fill(0);
  text('UV Silica',25+a,410);
  a+=100;
  
  if(mouseX>20+a&&mouseX<80+a&&mouseY>395&&mouseY<415){
    tint(255,255);
    image(irSiR, 0, 0);
    fill(230);
    rect(20+a,395,80,20);
  }
  else{
    tint(255,100);
    image(irSi,0,0);
    fill(200);
    rect(20+a,395,80,20);
  }
  fill(0);
  text('IR Silica',25+a,410);
  a=0;
    
}
