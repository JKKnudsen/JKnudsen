let a;
let b;
let c;
let d;
let e;
let f;
let g;
let scale;
let aSlider;
let bSlider;
function setup() {
  createCanvas(600,300);
  scale=20;
  //We assume a<=b<=c
  a=1;
  b=2;
  c=3;
  d=sqrt(pow(a,2)+pow(b,2));
  e=sqrt(pow(a,2)+pow(c,2));
  f=sqrt(pow(b,2)+pow(c,2));
  g=sqrt(pow(a,2)+pow(b,2)+pow(c,2));
  aSlider=createSlider(0,10,a,0);
  aSlider.position(50,240);
  aSlider.style('width', '80px');
  bSlider=createSlider(0,10,b,0);
  bSlider.position(50,260);
  bSlider.style('width', '80px');
  cSlider=createSlider(0,10,c,0);
  cSlider.position(50,280);
  cSlider.style('width', '80px');
}


function draw() {
 background(0);
 a=aSlider.value();
 b=bSlider.value();
 c=cSlider.value();
 translate(100,100);
 stroke(0);
 //Outer square
 fill(255);
 beginShape();
 vertex(scale*(a+b+c)/2,scale*(a+b+c)/2);
 vertex(scale*(a+b+c)/2,-scale*(a+b+c)/2);
 vertex(-scale*(a+b+c)/2,-scale*(a+b+c)/2);
 vertex(-scale*(a+b+c)/2,scale*(a+b+c)/2); 
 endShape(CLOSE);
 
 fill(0);
 beginShape();
 vertex(scale*(c-(a+b),scale*(a+b+c)/2));
 vertex(scale*(a+b+c)/2,scale*(c-(a+b)));
 vertex(-scale*(c-(a+b)),-scale*(a+b+c)/2);
 vertex(-scale*(a+b+c)/2,scale*(c-(a+b)));

}
