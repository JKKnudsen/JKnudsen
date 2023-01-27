let radius=100;
let cx=150;
let cy=150
let qArray=[];
let q= new Quaternion(0.5,2,5,1);
let timer=0;
function setup() {
  createCanvas(1400, 480);
  let test=4;
  for(let i=-test;i<test;i++){
    for(let j=-test;j<test;j++){
      for(let k=-test;k<test;k++){
        for(let alph=-test;alph<test;alph++){
          q.setQ(alph/test,i/test,j/test,k/test);
          if(q.normQ()-1<0.01){
            qArray.push(new Quaternion(alph/test,i/test,j/test,k/test));
       
        }
      }
    }
  }
 }

}


function draw() {
  colorMode(RGB,255);
  background(255);
   for(let i=0;i<qArray.length;i++){
    if(abs(qArray[i].a-(mouseX)/(( PI*400)/6))<0.01){
/*if(i==timer){
        qArray[i].pointPlotQ(10,200,400,8,false);
      }*/
      qArray[i].pointPlotQ(10,200,400,5,false); 
    }
    else {qArray[i].pointPlotQ(10,200,400,2,false); }
  }

}

function mouseClicked(){
  if(mouseButton===LEFT){timer++;}
  if(mouseButton===RIGHT){timer--;}
}
