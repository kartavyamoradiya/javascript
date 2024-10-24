let marks=[85,66,78,65,77,65];
let sum =0;
for(let val of marks){
	sum+=val;
}

document.getElementById('demo').innerHTML="Total mark"+"-"+sum;
console.log(sum)




let mark=[85,66,78,65,77,65];
let max= mark[0];

for(let i=1;i<mark.length;i++){
	if (mark[i]>max) {
		max=mark[i];
	}
}
let avg= sum/ marks.length;
document.getElementById('mark').innerHTML="maximum mark"+"-"+max;
console.log(max)
console.log(avg);

let mar=[90,66,78,65,77,65];
let maxvalue=Math.max(...mar);
console.log(maxvalue);
document.getElementById('maxmark').innerHTML=maxvalue;

let kano="my name is kartavya";
let result=kano.substr(kano.length-8);
document.getElementById('string').innerHTML=result;
console.log(result);

let text="my,name,is,yash,test,test25";
let myArry=text.split(",");
console.log(myArry.length);
document.getElementById('yash').innerHTML=myArry[myArry.length - 3];
console.log(myArry[myArry.length - 3]);

let a=12;
let b=10

console.log('a=',a,'&b=',b);
a= a+1;
b++;
console.log('a=',a);
console.log('b=',b);

let c=15;
let d=13;
c=c-1;
d--;
console.log('c=',c);
console.log('d=',d);


let e=4;
let f=9;

e +=4; 
f+=3;  
console.log(e);
document.getElementById('opearators').innerHTML=e;
document.getElementById('assignment').innerHTML=f;
console.log(f);

let juice={chiku:40,banana:20,apple:50};
let price="";
for(let [juic,amount] of Object.entries(juice)){
	price += juic+":"+amount+"<br>";

}
console.log(price);
document.getElementById('juice').innerHTML=price;
document.getElementById('juic').innerHTML=JSON.stringify(juice);

let run={virat:25,rohit:40,subhaman:50,rahul:35};
let runs= Object.values(run);
console.log(runs);
document.getElementById('match').innerHTML=runs

let wife={virat:"anuska",rohit:"ritika",subhaman:"sara",rahul:"athiya"};
let wifes= Object.values(wife);
console.log(result);
console.log(wifes);
document.getElementById('wife').innerHTML=wifes;

let criketer="virat";
let criket=criketer.repeat(2);
console.log(criket);


















