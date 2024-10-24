
function myFunction(){
	var name=document.getElementById('inputbox').value;
	document.getElementById('inputbox').value="";
	if(name==""){
		alert("please valid value");
	}
		if(name.toLowerCase().indexOf('abc') >= 0.) {
		var names=document.getElementById('listA').innerHTML;
		document.getElementById('listA').innerHTML=names+'<li>'+name+'</li>';
	} else if (name.toLowerCase().indexOf('xyz') >= 0) {
		var nams=document.getElementById('listB').innerHTML;
		document.getElementById('listB').innerHTML=nams+'<li>'+name+'</li>';
	}
}

function order(){
	var order=document.getElementById('done').value;
	document.getElementById('done').value="";
	if(order==""){
		alert("please enter order");
	}	
	if(order.indexOf('1234567890')>=0.){
		var orders=document.getElementById('confirm').innerHTML;
		document.getElementById('confirm').innerHTML=orders+'<li>'+order+'</li>';
	}
}
