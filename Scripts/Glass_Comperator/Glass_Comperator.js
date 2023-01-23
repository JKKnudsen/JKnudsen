


let buttonIndex=0;

 // 
let constituents=['SiO2','Na2O','CaO','Al2O3','K2O','MgO','Fe2O3','TiO2','SO3','B2O3','PbO','CeO2','ZrO2','ZnO','As2O3','Sb2O3','Y2O3','La2O3','Er2O3','P2O5','BaO'];

//Make a composition array, and replace the element with coresponding wt%
//[SiO2, Na2O, CaO, Al2O3, K2O, MgO, Fe2O3, TiO2, SO3, B2O3,PbO,CeO2,ZrO2,ZnO,As2O3,Sb2O3,Y2O3,La2O3,Er2O3,P2O5,BaO]

//Then make a new glass object of the form
//myGlass = new Glass('name',Density(g/cm3),
//                    Refractive index (nd @20C), dispersion (10^4x(nf-nc)),
//                    Glass transition temperature(C), Thermal expansion (ppm/K), 
//                    Liquidus temperature (C),
//                    A from VFT.eq, B from VFT.eq, Temperature fit from VFT.eq, composition array)
//VFT.eq =Vogel-fulcher-Tammann equation. ln(n)=A+B/(T-T.fit)
//Soda Lime container
let sodaConComp=[74, 13, 10.5, 1.3, 0.3, 0.2, 0.04, 0.01,0.2,0,0,0,0,0,0,0,0,0,0,0,0];
let sodaCon=new Glass('Soda-Lime:Container',2.52,1.518,86.7,573,9,1040,0,3922,291,sodaConComp);

//Soda Lime flatt
let sodaFlattComp=[73,14,9,0.15,0.03,4,0.1,0.02,0,0,0,0,0,0,0,0,0,0,0,0,0];
let sodaFlatt=new Glass('Soda-Lime:Flatt',2.53,1.52,87.7,564,9.5,1000,-2.585,4215,263,sodaFlattComp);

//Soda lime Standard No 710
let sodaStn710Comp=[70.5,8.7,11.6,0.725,7.7,0,0.02,0,0.2,0.25,0,0,0,0,0,1.1,0.45,0.50,0.05,0,0];
let sodaStn710 = new Glass('Soda-Lime:Stnd. No.710',2.53,1.523,88.4,560,9,1020,-1.626,4239,265.7,sodaStn710Comp);

let  boroFloat33Comp=[81,3,0,2,1,0,0,0,0,13,0,0,0,0,0,0,0,0,0,0,0];
let boroFloat33=new Glass('Borofloat33',2.23,1.471,71.4,525,9.75,1270,-1.657,6546.69,112.8,boroFloat33Comp)

let  boroBK7Comp=[69.13,10.4,0,0,6.29,0,0,0,0,10.75,0,0,0,0,0.36,0,0,0,0,0,3.07];
let boroBK7=new Glass('Boro BK7',2.51,1.5168,80.8,557,7.1,1270,-1.62,5178.76,392.9,boroBK7Comp)

let glass=[];

function setup() {
  createCanvas(1280,960);
  glass=[sodaCon,sodaFlatt,sodaStn710,boroFloat33,boroBK7];
}


function draw() {
  background(255);
  for(let i=0;i<glass.length;i++){
   if(buttonIndex==i){
     continue;
   } else {glass[i].setLow();}
   glass[i].drawEverything();
  }
  glass[buttonIndex].setHigh();
  glass[buttonIndex].drawGrid();
  glass[buttonIndex].drawBars();
  glass[buttonIndex].drawEverything();
  drawButtons();
}

function drawButtons(){
  stroke(0);
  strokeWeight(1);
  for(let i=0;i<glass.length;i++){
    if(mouseX>20+i*150 &&mouseX<150+i*150&&mouseY>25&&mouseY<45){
      fill(230);
      if (mouseIsPressed){buttonIndex=i;}
    } 
    else{
      fill(200);     
    }
    rect(20+i*150,25,140,20);
    fill(0);
    textSize(12);
    text(glass[i].name,25+i*150,40);
  }
}
