
let person={
	Name:"kartavya moradiya",
	Age:21,
	Employe:"yes"
};
document.getElementById('demo').innerHTML=person.Name;


const human={
	naMe:"kano",
	lastName:"patel",
	study:"b.sc completed",
	fullName:function () {
	  return this.naMe+""+this.lastName+""+this.study;
	}
};
document.getElementById('demo2').innerHTML=human.fullName().toUpperCase();
function word(){
let text="abcdefghik";
let length=text.length;
document.getElementById('demo3').innerHTML=length;
};
document.getElementById('demo3').innerHTML=word();

