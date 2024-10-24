let text="may name is kartavya'my nick name is kano'";
document.getElementById('demo2').innerHTML=text;

let text1="kartavya";
let text2="moradiya";
let text3=text1.concat("",text2);
document.getElementById('demo3').innerHTML=text3;

function Web() {
	let text= document.getElementById('demo4').innerHTML;
	document.getElementById('demo4').innerHTML=
	text.replace("microsoft","Vs code")
}
let ans="it's alright";
let ans2="he is called yash";
let ans3="he is called kano";
document.getElementById('name').innerHTML=ans+"<br>"+ans2+"<br>"+ans3;


let text4="asdfghjkl"
document.getElementById('length').innerHTML=text4.length;

let text5="kartavya is \"learning\" javascript";
document.getElementById('dubblecoma').innerHTML=text5;

let text6=`The quick
brown fox
jumps over
the lazy dog`;
document.getElementById('multilinestring').innerHTML=text6;
 /*let txt="hello word";
 let x= txt.length;
 alert (x);*/

const name="kartavya";
let letter=name.at(2);
document.getElementById('returnindexelement').innerHTML=letter;

let fruit="apple,banana,kiwi,chiku";
let part=fruit.slice(6,13);
document.getElementById('slice').innerHTML=part;
let fruits="apple,banana,kiwi,chiku";
let parts=fruits.slice(6);
document.getElementById('slice2').innerHTML=parts;

let name1="kartavya";
let total=name1.toUpperCase();
document.getElementById('upper').innerHTML=total;

let name2="kano";
let name3="patel";
let name4=name2.concat("",name3);
document.getElementById('concat').innerHTML=name4;

let nam="kano patel";
let nam2=nam.repeat(3);
document.getElementById('repeat').innerHTML=nam2;

let nam3="I love cats. Cats are very easy to love. Cats are very popular.";
let nam4=nam3.replaceAll("Cats","DOGS");
document.getElementById('replace').innerHTML=nam4;

let nam5="I love cats. Cats are very easy to love. Cats are very popular.";
const nam6=nam5.matchAll("love");
document.getElementById('machAll').innerHTML=Array.from(nam6);

let nam7="kano";
let nam8="patel";
let nam9=`welcome ${nam7}${nam8}`;
document.getElementById('allsting').innerHTML=nam9;

let fruities=["banana","chiku","kiwi"];
document.getElementById('click').innerHTML=fruities;
function youFunction(){
	fruities.push("apple");
	document.getElementById('click').innerHTML=fruities;
}

let x="";
let obj={
	cars:[{
		name:"ford",models:["fiesta","focus","mustang"]
	},{name:"xuv700",models:["Xuv300","thar","scorpio"]},
	{name:"bmw",models:["500","320","x5"]}]
}
for (let i in obj.cars){
	x+="<h2>"+obj.cars[i].name+"</h2>";
	for(let j in obj.cars[i].models){
		x+=obj.cars[i].models[j]+"<br>"
	}
}
document.getElementById('kp').innerHTML=x;



