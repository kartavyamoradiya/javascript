function Alert(){
alert("only this offer item");
}
function Load(){
    var request=new XMLHttpRequest()
    request.open("GET","yoyo.xml");
    request.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            console.log(this.responseText);
           alert(this.responseText);
        }
    };
    request.send();
}
function confirm(){
    alert("Confirm Order");
}
function contact(){
    alert("Mo:-6880367575");
    alert("Gmail:-yoyoburger@gmail.com")
}

