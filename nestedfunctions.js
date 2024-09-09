function addSqures(a,b){
	const sa = squre(a);
	const sb = squre(b);



	function squre(num){
		return num*num;
	}
	return sa + sb;
}
console.log(addSqures(3,4));



function maggi(maggi,water,tapeli) {
	console.log("your maggi ready in"
		+maggi*2+"minute"+""+"What to do with Maggi?"+
		maggi+"Maggi"
		+
		+water+"cup of water"
		+""
		+"using"+tapeli+"pan")
}
maggi(2,1,1);

//arrow function
function greet(count){
	console.log("Hello world")
}
greet(3);


 const value = (count) => {
	for (let i =0; i< count;i++)console.log("Hello world")
}
value(3);

const Squre = (num) => {
	return num*num;};
console.log(Squre(3));


//callback function

const calculate =(a, b, operation) => {
	return operation(a,b);
};

const addition = calculate(3,4, function (num1,num2){
	return num1+num2;
});
console.log(addition);



const a = [14, 12, 10, -2, -4, -10];
const firstNeg =(num) => {
	return num < 0;
}
const ans = a.find(firstNeg);
console.log(ans);  

const person = {
	firstname:"kartavya" 
	lastname:"moradiya"
	age:"21"
};
let x="firstname";
let y="lastname";
let z="age";
document.getElementById('info').innerHTML=peron[x]+"is"+person[z]+"year yung man.";