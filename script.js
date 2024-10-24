     var request=new XMLHttpRequest()
 request.onload=function(){
    if(this.readyState==4 && this.status==200){ 
        var data= JSON.parse(this.responseText);
        let text="<table>"
        for(let x in data){
            text+="<tr><td>"+data[x].id+"</td></tr>"
        }
        text+="</table>"
        document.getElementById('demo').innerHTML=text;
    }
 }
request.open("GET","http://192.168.1.122/magesture-dev/index.php/wp-json/wp/v2/posts");
request.send();


/*var request=new XMLHttpRequest()
request.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
        var data=JSON.parse(this)
    }
}*/