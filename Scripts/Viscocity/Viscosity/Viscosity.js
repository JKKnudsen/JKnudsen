
let startTemp=500;
let endTemp=2000;
let logN,plogN;
let originX=100;
let originY=10;
let frameY=400;
let frameX=500;
let scaleX=0.25;
let scaleY=20;
let a=0;
let containerC;
let flattC;
let glass=[];
let glassC=[];

function setup() {
  createCanvas(1500,500);
  scaleX=frameX/width;
  containerC=color(0);
  flattC=color(0);
  glass[0]='Container';
  glass[1]='Flatt';
  glass[2]='Standar';
  glassC[0]=color(0);
  glassC[1]=color(0);
  glassC[2]=color(0);
}


function draw() {
  background(255);
  stroke(0);
  strokeWeight(2);
  //Soda Lime Container
  plotVisc(0,3922,291,glassC[0]);
  
  //Soda Lime Flat
  plotVisc(-2.585,4215,263,glassC[1]);
  
  //Soda Lime Standard
  plotVisc(-1.626,4239,265.7,glassC[2]);
  
  strokeWeight(1);
  for(let i=startTemp;i<endTemp;i+=100){
      line(originX+(i-startTemp)*scaleX,originY+frameY,originX+(i-startTemp)*scaleX,originY);
      text(i,originX+(i-startTemp)*scaleX,originY+frameY+10);
  }
  for(let i=frameY;i>0;i-=scaleY){
     line(originX,originY+frameY-i,originX+frameX,originY+frameY-i);
     text(i/scaleY,originX-20,originY+frameY-i);
  }
  drawButtons();

}


function plotVisc(a,b,tFit,c){
  stroke(c);
  for(let i=startTemp;i<endTemp;i++){
    logN=a+b/(i-tFit);
    point(originX+(i-startTemp)*scaleX,originY+frameY-logN*scaleY);
  }
  stroke(0);
}

function drawButtons(){
  
  for(let i=0;i<3;i++){
    if(mouseX>20+i*100 &&mouseX<80+i*100&&mouseY>frameY+25&&mouseY<frameY+45){
      fill(230);
      glassC[i]=color(255,0,0);
    } 
    else{
      fill(200);
      glassC[i]=color(0);
    }
    rect(20+i*100,frameY+25,80,20);
    fill(0);
    text(glass[i],25+i*100,frameY+40);
  }
}
