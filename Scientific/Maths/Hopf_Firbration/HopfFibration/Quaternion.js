class Quaternion{
  constructor(a,b,c,d){
  this.a=a;
  this.b=b;
  this.c=c;
  this.d=d
  }
 printQ(){
   console.log(this.a+","+this.b+"i ,"+this.c+"j ,"+this.d+"k");
 }
 setQ(_a,_b,_c,_d){
   this.a=_a;
   this.b=_b;
   this.c=_c;
   this.d=_d;
 }
 addQ(p){
   this.a+=p.a;
   this.b+=p.b;
   this.c+=p.c;
   this.d+=p.d;
 }
 subQ(p){
   this.a+=p.a;
   this.b+=p.b;
   this.c+=p.c;
   this.d+=p.d;
 }
 scaleQ(p){
   this.a*=p;
   this.b*=p;
   this.c*=p;
   this.d*=p;
 }
 multiplyQ(p){
   let a1=this.a;
   let b1=this.b;
   let c1=this.c;
   let d1=this.d;
   
   this.a=a1*p.a-b1*p.b-c1*p.c-d1*p.d;
   this.b=a1*p.b+b1*p.a+c1*p.d-d1*p.c;
   this.c=a1*p.c-b1*p.d+c1*p.a+d1*p.b;
   this.d=a1*p.d+b1*p.c-c1*p.b+d1*p.a;
 }
 conjugateQ(){
   return new Quaternion(this.a,-this.b,-this.c,-this.d);
 }
 normQ(){
  return sqrt(pow(this.a,2)+pow(this.b,2)+pow(this.c,2)+pow(this.d,2)); 
 }
 unitQ(){
   let norm=this.normQ();
   let pA=(1/norm)*this.a;
   let pB=(1/norm)*this.b;
   let pC=(1/norm)*this.c;
   let pD=(1/norm)*this.d;
   return new Quaternion(pA,pB,pC,pD); 
 }
 inverseQ(){
  return this.conjugateQ().scaleQ(pow(this.normQ,2)); 
 }
 pointPlotQ(xPos, yPos, scale,pointS, backdrop){
  noStroke();
  colorMode(HSB, scale);
  if(backdrop){
    for (let i = 0; i < scale; i++) {
     for (let j = 0; j < scale/2; j++) {
       stroke(i, scale-2*j, scale);
       point(PI*i+xPos, yPos-j);
       point(PI*i+xPos+1, yPos-j);
    }
  }
    for (let i = 0; i < scale; i++) {
     for (let j = 0; j < scale/2; j++) {
       stroke(i, scale-2*j, scale-2*j);
       point(PI*i+xPos, yPos+j);
       point(PI*i+xPos+1, yPos+j);
    }
  }
  }
  let unit=this.unitQ();
  if(unit.a>=0){
    if(unit.b>=0){
      this.pointHigh(0,unit.a,unit.b,xPos,yPos,scale,pointS);   
      }
      else{this.pointLow(0,unit.a,unit.b,xPos,yPos,scale,pointS);}  
    if(unit.c>=0){
      this.pointHigh(2/6,unit.a,unit.c,xPos,yPos,scale,pointS);
      }
      else{this.pointLow(2/6,unit.a,unit.c,xPos,yPos,scale,pointS);}  
    if(unit.d>=0){       
      this.pointHigh(4/6,unit.a,unit.d,xPos,yPos,scale,pointS);
      }
      else{this.pointLow(4/6,unit.a,unit.d,xPos,yPos,scale,pointS);}  
  }
  if(unit.a<0){
    if(unit.b>=0){
      this.pointHigh(6/6,unit.a,unit.b,xPos,yPos,scale,pointS);   
      }
      else{this.pointLow(6/6,unit.a,unit.b,xPos,yPos,scale,pointS);}  
    if(unit.c>=0){
      this.pointHigh(2/6,unit.a,unit.c,xPos,yPos,scale,pointS);
      }
      else{this.pointLow(2/6,unit.a,unit.c,xPos,yPos,scale,pointS);}  
    if(unit.d>=0){       
      this.pointHigh(4/6,unit.a,unit.d,xPos,yPos,scale,pointS);
      }
      else{this.pointLow(4/6,unit.a,unit.d,xPos,yPos,scale,pointS);}  
  }
 }
 pointHigh(r,a,b,x,y,s,spotS){
   fill(r*s+s*a/6,s-s*b,s);
   ellipse(PI*(r*s+x+s*a/6),
            y-(s/2)*b,
            spotS,spotS);
 }
  pointLow(r,a,b,x,y,s,spotS){
   fill(r*s+s*a/6,s+s*b,s+s*b);
   ellipse(PI*(r*s+x+s*a/6),
            y-(s/2)*b,
            spotS,spotS);
 }
}
