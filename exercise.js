function myname(){
	const name=("kartavya moradiya");
	document.getElementById('myname').innerHTML=name;
}
function adrees(){
	var loction="vilige-kadiyana,near-post office and presenter school,"+""
	+""+"taluko-halvad,"+""
	+"dis-morbi";
	return loction
}
var result = adrees();
document.getElementById('demo').innerHTML=result;

function contact(number){
	var number="9714446158";
	document.getElementById('contect').innerHTML=number;
}
function gmail(email){
	var mail="moradiyakartavya@gmail.com";
	document.getElementById('email').innerHTML=mail;
}
function skills(){
	console.log("communication,"+""+
		"time managment,"+""+
		"immediate learner")
}
skills();

function addSkill(){
	let skill = document.getElementById('demo2').value;
	document.getElementById('demo2').value = '';
	let skills = document.getElementById('new-skills').innerHTML;
	document.getElementById('new-skills').innerHTML = skills+'<li>'+skill+'</li>';
}
function calculation(){
	let digit = parseInt(document.getElementById('demo3').value);
	document.getElementById('demo3').value = '';
	let digits = document.getElementById('new-calculation').innerHTML;
	if (digits == '') {
		digits = 0
	} else {
		digits = parseInt(digits);
	}
	console.log(typeof digits)
	let sum=digit+ digits
	document.getElementById('new-calculation').innerHTML = sum;
}


function newhobbies(){
	var hobbie ="kabaddi,"+""+"travaling,";
	document.getElementById('demo4').value;
	var sokh ="photography,"+""+"treaking,";
	document.getElementById('add-hobbies').innerHTML;
	var sum= hobbie + sokh;
	document.getElementById('add-hobbies').innerHTML=sum; 
}

function declar(){
	var declars="i solemnly declar that all the above information is correct"
	+"to the best of my knowledge and belief."
	document.getElementById("declaration").innerHTML=declars;
}

function nam(){
	var myname ="kartavya moradiya"
	if (myname == '') {
		myname ='' }
	document.getElementById("name").innerHTML=myname;
}