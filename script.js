var request=new XMLHttpRequest()
request.onload=function(){
    if(this.readyState==4 && this.status==200 ){
        var data = JSON.parse(this.responseText);
        console.log(data);
        let text="<table>"
        for(let x in data){
            console.log(x, data[x])
            //text+="<tr><td>"+data[x].title+"</td></tr>"
            var menu = data[x];
            for(let y in menu) {
                console.log(menu[y].title)
                text+="<tr><td>"+menu[y].title+"</td></tr>"
            }

        }
        text+="</table>"
        document.getElementById('demo').innerHTML=text;
        
    }
}
request.open("GET","http://192.168.1.122/magesture-dev/index.php/wp-json/wp/v2/menu");
request.send();
