let timer=document.querySelector(".time");
let board=document.querySelector(".gameBoard");
let spins=document.querySelector(".spining");

function currentTime() {
	
let n=new Date();	
let watch=n.toLocaleTimeString();
timer.innerHTML=watch;

}

currentTime();

function clock() {

let n=new Date();	
let watch=n.toLocaleTimeString();
timer.innerHTML=watch;

}

let start=setInterval(clock, 1000);


let changeColor=document.querySelectorAll(".unit");
let r1=document.querySelectorAll(".row1");
let coloringRed=[

0,2,3,5,6,8,9,11,14,17,20,23,26,28,31,32,34,37

];

let filled=[

0,0,0,0,
0,0,0,0,
2,2,2,2

];

function coloringFields() {
	
for(let i=0; i < coloringRed.length; i++)  {

r1[coloringRed[i]].style.background="indianred";

 }

for(let i=0; i < r1.length; i++)  {

if(r1[i].style.background=="" && r1[i].style.background !="indianred" && r1[i].textContent !="2:1") {

r1[i].style.background="black";

  }

}


}

coloringFields();

let unit=document.querySelectorAll(".unit");
let in1=document.querySelector("#twoForOne1");
let in2=document.querySelector("#twoForOne2");
let in3=document.querySelector("#twoForOne3");
let aColors1=document.querySelectorAll("#aColors");
let bColors1=document.querySelectorAll("#bColors");
let cColors1=document.querySelectorAll("#cColors");
let fTwelve=document.querySelector("#fTwelve1");
let sTwelve=document.querySelector("#sTwelve2");
let tTwelve=document.querySelector("#tTwelve3");
let f81=document.querySelector("#f81");
let s81=document.querySelector("#s81");
let oddNumbers1=document.querySelector("#oddNumbers");
let evenNumbers1=document.querySelector("#evenNumbers");
let redOne1=document.querySelector("#redOne");
let blackOne1=document.querySelector("#blackOne");

let result1=document.querySelector(".result");

let unitAll1=[

0,2,7,9,13,15,19,21,24,26,31,33,35

];

let unitAll2=[

1,4,6,10,12,17,18,23,25,29,32,35

];

let unitAll3=[

3,5,8,11,14,16,20,22,27,28,30,36

];

in1.addEventListener("click", line1);

function line1() {
	
for(let i=0; i < 12; i++) {
for(let y=0; y < unit.length; y++) {

aColors1[i].style.color="orange";
bColors1[i].style.color="white";
cColors1[i].style.color="white";

unit[unitAll3[i]].style.color="orange";
unit[unitAll2[i]].style.color="white";
unit[unitAll1[i]].style.color="white";

  }

 }


}

in2.addEventListener("click", line2);

function line2() {
	
for(let i=0; i < 12; i++) {
for(let y=0; y < unit.length; y++) {

aColors1[i].style.color="white";
bColors1[i].style.color="orange";
cColors1[i].style.color="white";

unit[unitAll2[i]].style.color="orange";
unit[unitAll3[i]].style.color="white";
unit[unitAll1[i]].style.color="white";

  }

 }

}

in3.addEventListener("click", line3);

function line3() {
	
for(let i=0; i < 12; i++) {
for(let y=0; y < unit.length; y++) {

aColors1[i].style.color="white";
bColors1[i].style.color="white";
cColors1[i].style.color="orange";

unit[unitAll1[i]].style.color="orange";
unit[unitAll2[i]].style.color="white";
unit[unitAll3[i]].style.color="white";

  }

 }

}

let numbers1=[0,1,2,3,13,14,15,16,26,27,28,29];
let numbers2=[4,5,6,7,17,18,19,20,30,31,32,33];
let numbers3=[8,9,10,11,21,22,23,24,34,35,36,37];
let numbers4=[0,1,2,3,4,5,13,14,15,16,17,18,26,27,28,29,30,31];
let numbers5=[6,7,8,9,10,11,19,20,21,22,23,24,32,33,34,35,36,37];

let odd=[0,2,4,6,8,10,14,16,18,20,22,24,26,28,30,32,34,36];
let even=[1,3,5,7,9,11,13,15,17,19,21,23,27,29,31,33,35,37];
let redOnly=[0,2,3,5,6,8,9,11,14,17,20,23,26,28,31,32,34,37];
let blackOnly=[1,4,7,10,13,15,16,18,19,21,22,24,27,29,30,33,35,36];

let unitAll4=[

0,1,2,3,4,5,6,7,8,9,10,11

];

let unitAll5=[

12,13,14,15,16,17,18,19,20,21,22,23

];

let unitAll6=[

24,25,26,27,28,29,30,31,32,33,35,36

];

fTwelve.addEventListener("click", line12O);

function line12O() {
	
for(let i=0; i < 12; i++) {
for(let y=0; y < unit.length; y++) {

r1[numbers1[i]].style.color="orange";
r1[numbers2[i]].style.color="white";
r1[numbers3[i]].style.color="white";

unit[unitAll4[i]].style.color="orange";
unit[unitAll5[i]].style.color="white";
unit[unitAll6[i]].style.color="white";

  }

 }

}

sTwelve.addEventListener("click", line12T);

function line12T() {
	
for(let i=0; i < 12; i++) {
for(let y=0; y < unit.length; y++) {

r1[numbers1[i]].style.color="white";
r1[numbers2[i]].style.color="orange";
r1[numbers3[i]].style.color="white";

unit[unitAll5[i]].style.color="orange";
unit[unitAll4[i]].style.color="white";
unit[unitAll6[i]].style.color="white";

  }

 }

}


tTwelve.addEventListener("click", line12Th);

function line12Th() {
	
for(let i=0; i < 12; i++) {
for(let y=0; y < unit.length; y++) {

r1[numbers1[i]].style.color="white";
r1[numbers2[i]].style.color="white";
r1[numbers3[i]].style.color="orange";

unit[unitAll6[i]].style.color="orange";
unit[unitAll4[i]].style.color="white";
unit[unitAll5[i]].style.color="white";

  }

 }

}

let unit7=[];

f81.addEventListener("click", eighteenN);

function eighteenN() {
	
for(let i=0; i < 18; i++) {
for(let y=18; y < 37; y++) {

r1[numbers4[i]].style.color="orange";
r1[numbers5[i]].style.color="white";

unit[i].style.color="orange";
unit[y].style.color="white";

  }

 }

}

s81.addEventListener("click", thirtySixN);

function thirtySixN() {
	
for(let i=0; i < 18; i++) {
for(let y=18; y < 36; y++) {

r1[numbers5[i]].style.color="orange";
r1[numbers4[i]].style.color="white";

unit[y].style.color="orange";
unit[i].style.color="white";
unit[34].style.color="white";
unit[36].style.color="orange";


  }

 }

}

let unitOdd=[

0,3,4,7,8,10,13,14,17,19,20,23,24,27,29,30,31,35

];

let unitEven=[

1,2,5,6,9,11,12,15,16,18,21,22,25,26,28,32,33,36

];

oddNumbers1.addEventListener("click", onlyOdd);

function onlyOdd() {
	
for(let i=0; i < 18; i++)  {

r1[odd[i]].style.color="orange";
r1[even[i]].style.color="white";

unit[unitOdd[i]].style.color="orange";
unit[unitEven[i]].style.color="white";

 }

}

evenNumbers1.addEventListener("click", onlyEven);

function onlyEven() {
	
for(let i=0; i < 18; i++)  {

r1[even[i]].style.color="orange";
r1[odd[i]].style.color="white";

unit[unitOdd[i]].style.color="white";
unit[unitEven[i]].style.color="orange";

 }

}

let unitRed=[

0,3,4,7,8,10,13,14,17,19,20,23,24,27,29,30,31,35

];

let unitBlack=[

1,2,5,6,9,11,12,15,16,18,21,22,25,26,28,32,36,33

];

redOne1.addEventListener("click", onlyRed);

function onlyRed() {
	
for(let i=0; i < 18; i++)  {

r1[redOnly[i]].style.color="orange";
r1[blackOnly[i]].style.color="white";

unit[unitRed[i]].style.color="orange";
unit[unitBlack[i]].style.color="white";

 }

}

blackOne1.addEventListener("click", onlyBlack);

function onlyBlack() {
	
for(let i=0; i < 18; i++)  {

r1[redOnly[i]].style.color="white";
r1[blackOnly[i]].style.color="orange";

unit[unitRed[i]].style.color="white";
unit[unitBlack[i]].style.color="orange";

 }

}


let rotation=[

"119deg","128deg","138deg","147deg","157deg",
"166deg","175deg","184deg","194deg","203deg",
"213deg","221deg","231deg","241deg","252deg",
"261deg","270deg","279deg","289deg","298deg",
"308deg","317deg","327deg","338deg","347deg",
"356deg","366deg","375deg","385deg","394deg",
"404deg","414deg","424deg","433deg","441deg",
"451deg","461deg","469deg"

];

let allCombination=[

"0 green", "D blue","35 black odd","1 red odd","2 black even","3 red odd",
"4 black even","5 red odd","6 black even","7 red odd","8 black even",
"9 red odd","10 black even","12 red even","11 black odd","14 red even",
"13 black odd","16 red even","15 black odd","18 red even","17 black odd",
"19 red odd","20 black even","21 red odd","22 black even","23 red odd","24 black even",
"25 red odd","26 black even","27 red odd","28 black even","30 red even","29 black odd",
"32 red even","31 black odd","34 red even","33 black odd","36 red even"

];

let colorSpin=[

34,34,35,0,1,3,2,4,5,7,6,8,9,11,10,12,13,15,14,16,17,19,18,20,21,23,22,24,25,27,26,28,29,32,31,33,30,36

];

let wheel=document.querySelector(".wheel");
let movement=document.querySelector(".movement");
let money=document.querySelector(".money");

let i=0;
let g=0;
let entry=0;

let ball=document.querySelector(".ball");
let stopWheel=document.querySelector(".stopWheel");

function isometric() {
	
movement.style.transform="rotate("+rotation[i]+")";
i++;

if(i==rotation.length) {

i=0;

 }

result1.textContent=allCombination[g];
g++;

result1.style.color=unit[colorSpin[entry]].style.color;
entry++;

if(entry==colorSpin.length) {

entry=0;

}

if(g==allCombination.length) {

g=0;

}

}


let bettingChip=document.querySelector(".bettingChip");
let earn=document.querySelector(".earn");

let numberColors=[

"10px solid pink","10px solid lightgreen","10px solid lightblue","10px solid coral",
"10px solid plum","10px solid orange"

];

let colorBackground=[

"hotpink","green","deepskyblue","crimson","purple","chocolate"

];


let numbers=[5,10,25,50,100,1];

let p=0;
let r=4;

bettingChip.addEventListener("click", changeChipColor);

function changeChipColor() {
	
bettingChip.style.border=numberColors[p];
bettingChip.style.background=colorBackground[p];
bettingChip.textContent=numbers[p];
p++;

if(p==6) {

p=0;

 }

earn.textContent=this.textContent;

}

let spinner;
let as=0;

let spinWheel=document.querySelector(".spinWheel");

function addingEvents() {

for(let i=0; i < 36; i++)  {

if(r1[i].style.color=="orange" && unit[i].style.color=="orange" && earn.textContent > 0)  {

spinWheel.addEventListener("click", rouletteSpins);

    } 
  }
}

let starting=setInterval(addingEvents, 1);

let imobiled;

let combine=[36,37,38,39,40];

function rouletteSpins() {

spins.style.visibility="visible";
spinner=setInterval(isometric, combine[Math.floor(Math.random()*combine.length)]);
wheel.style.animation="anim 4s linear infinite";

stopWheel.textContent=0;
imobiled=setInterval(wheelStopped, 2000);

}

function wheelStopped() {
	
let updating=parseInt(stopWheel.textContent);

stopWheel.textContent=updating+1;

if(stopWheel.textContent==4) {

stoped();

 }

if(stopWheel.textContent==7) {

spins.style.visibility="hidden";

$(".row1").css("color","white");
$(".unit").css("color","white");
clearInterval(imobiled);
spinWheel.removeEventListener("click", rouletteSpins);

 }

}

function stoped() {

wheel.style.animationPlayState="paused";
clearInterval(spinner);

let dollars=parseInt(earn.textContent);
let deposit=parseInt(money.textContent);

if(result1.style.color=="orange") {

money.textContent=deposit+dollars;

 } else if(result1.textContent=="D blue") {

money.textContent=deposit+0;

} else {

money.textContent=deposit-dollars;

 }

for(let i=0; i < 12; i++)  {

if(unit[unitAll3[i]].style.color=="orange" && result1.style.color=="orange") {

money.textContent=deposit+dollars+dollars;

}


if(unit[unitAll2[i]].style.color=="orange" && result1.style.color=="orange") {

money.textContent=deposit+dollars+dollars;

}

if(unit[unitAll1[i]].style.color="orange" && result1.style.color=="orange") {

money.textContent=deposit+dollars+dollars;

}


}


}
