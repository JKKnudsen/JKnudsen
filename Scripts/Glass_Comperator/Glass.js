let startTemp=500;
let endTemp=1700;

//Composition graph
let originX=50;
let originY=140;
let windowX=280;
let windowY=280;

//Viscosity
let originViscX=360;
let originViscY=140;
let windowViscX=280;
let windowViscY=280;
let scaleViscX=0.25;
let scaleViscY=20;

//Abbe number
let originAbbeX=680;
let originAbbeY=140;
let windowAbbeX=280;
let windowAbbeY=280;
let scaleAbbeX=0.1;
let scaleAbbeY=0.1;


class Glass{
  
  constructor(name,density,reIndex,dispersion,gTrans,themExp,liqTemp, a, b, tFit, comp){
    this.name=name;
    this.density=density;
    this.reIndex=reIndex;
    this.dispersion=dispersion;
    this.gTrans=gTrans;
    this.themExp=themExp;
    this.liqTemp=liqTemp;
    this.a=a;
    this.b=b;
    this.tFit=tFit;
    this.comp=comp;
    this.col='black';
    this.high=0;


  }
  drawBars(){
    let ang=radians(90);
    let x,y,d,h;
    textSize(12);
    strokeWeight(1);
   // stroke(180);
    for(let i=0;i<this.comp.length;i++){
      fill(170);
      x=(windowX/this.comp.length)*i;
      y=windowY-(windowY/100)*this.comp[i];
      d=0.9*windowX/this.comp.length;
      h=(windowY/100)*this.comp[i];
      rect(originX+x,originY+y,d,h);
      fill(0);
      push();      
      translate(2+originX+(windowX/this.comp.length)*i,originY+windowY/2);
      rotate(ang);
      text(constituents[i]+'   '+this.comp[i]+ '%',0,0);
      pop();
  }  
 }
 drawGrid(){
   //Draw the composition grid
   stroke(0);
   strokeWeight(1);
   fill(color(0,100));
   for(let i=0;i<this.comp.length+1;i++){
    line(originX+(windowX/this.comp.length)*i,originY,originX+(windowX/this.comp.length)*i,originY+windowY);
   }
   for(let i=0;i<10;i++){
     line(originX,originY+windowY/10*i,originX+windowX,originY+windowY/10*i);
     text(i*10+'%',originX-30,originY+windowY-windowY/10*i);
   }
   stroke(0);
   strokeWeight(1);
   textSize(10);
   //Draw Abbe grid
   for(let i=0;i<windowAbbeX;i+=windowAbbeX*scaleAbbeX){
     line(originAbbeX+i, originAbbeY+windowAbbeY,originAbbeX+i,originAbbeY); 
     text(100*(windowAbbeX-i)/windowAbbeX,originAbbeX+i-3,originAbbeY+windowAbbeY+10)
   }
   let convert;
   for(let i=0;i<windowAbbeY;i+=(windowAbbeY*scaleAbbeY)){
     line(originAbbeX,originAbbeY+i,originAbbeX+windowAbbeX,originAbbeY+i); 
     convert=nf(2-(0.05)*i/(windowAbbeY*scaleAbbeY),1,2);
     text(convert,originAbbeX-20,originAbbeY+i);
   }
   
   if(this.high){   
    stroke(0);
    strokeWeight(1);
    textSize(10);
    for(let i=startTemp;i<endTemp;i+=100){
        line(originViscX+(i-startTemp)*scaleViscX,originY+windowViscY,originViscX+(i-startTemp)*scaleViscX,originViscY);
        text(i,originViscX+(i-startTemp)*scaleViscX-5,originViscY+windowViscY+10);
    }
    textSize(12);
    for(let i=windowViscY;i>0;i-=scaleViscY){
       line(originViscX,originViscY+windowViscY-i,originViscX+windowViscX,originViscY+windowViscY-i);
       text(i/scaleViscY,originViscX-20,originViscY+windowViscY-i);
    }
  }
 }
 drawEverything(){ 
   this.plotVisc();
   this.plotAbbe();
 }
 plotVisc(){
  let logN;
  stroke(this.col);
  for(let i=startTemp;i<endTemp;i++){
    logN=this.a+this.b/(i-this.tFit);
    if((i-startTemp)*scaleViscX<windowViscX&&logN*scaleViscY < windowViscY){
      if(this.high==1){strokeWeight(3);}
      else{strokeWeight(1);}
      point(originViscX+(i-startTemp)*scaleViscX,originViscY+windowViscY-logN*scaleViscY);
    }
  }
  strokeWeight(1);
  stroke(0);
}
plotAbbe(){
  let abbe=(this.reIndex-1)/(this.dispersion*pow(10,-4));
  if(this.high){
  stroke(this.col);
  strokeWeight(14);
  point(originAbbeX+windowAbbeX-abbe*(windowAbbeX/100),originAbbeY+windowAbbeY-this.reIndex*(windowAbbeY*scaleAbbeY) );
  }
  colorMode(HSB,100);
  stroke(100-this.dispersion,100,100);
  strokeWeight(10);
  point(originAbbeX+windowAbbeX-abbe*(windowAbbeX/100),originAbbeY+windowAbbeY-this.reIndex*(windowAbbeY*scaleAbbeY) );
  
  colorMode(RGB,255);
}

setHigh(){
  this.high=1;
  this.col=color(255,0,0);
}
setLow(){
  this.high=0;
  this.col=color(0,100);
}
}
