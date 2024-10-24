function leave() {
	var name="leave in 30,31,1,2";
	document.getElementById('leavedate').innerHTML=name;
}
leave();
function intro(){
	var firstname ="yash,"
	var lastname ="kulkarni,"
	var age="23"
	var sum =firstname+""+lastname+""+"that is"+age;
	document.getElementById('name').innerHTML=sum;
}
intro();

let bus={
	firstName:'gsrtc'
};
console.log(bus.firstName);	

const person ={
	firstName:"yash",
	lastName:"kulkarni",
	fullName:function(){
		return this.firstName+ ""+this.lastName;
	}
};
document.getElementById('person').innerHTML=person.fullName();

/*function Adrees(adrees){
	this.vilName=first;
	this.disName=last;
	this.talName=third;
}
const myAdrees= new Adrees("bela","amaran","morbi");
document.getElementById('adrees').innerHTML="village is"+myAdrees.first+"dis is"
+myAdrees.last+"tako is"+myAdrees.third+".";*/

/*let person2={
	firstName:"kano",
	lastName:"patel",
	Hobby:["playing criket","photography","treaking"]
	Living:{
		City:"ahedabad"
		Ariya:"iskone croos road "
	};	
	myFunction:function(){
		return this.firstName+""+this.lastName+""+this.Hobby+""+this.Living;
	}
};*/
//document.getElementById('kano').innerHTML=person2.myFunction();
let person3={
	firstName:"umesh",
	lastName:"mangukiya"
};
for (let key in person3){console.log
(key);};
for (let key in person3){
	console.log(key +':'+person3[key]);
}
document.getElementById('key').innerHTML=(person3[key]);

