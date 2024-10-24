/*var xhttp= new XMLHttpRequest();

xhttp.onload=function(){
    if(this.readyState==4 && this.status==200){
        var xml=xhttp.responseXML;
        var header = document.getElementById('demo');
        var list=xml.getElementsByTagName('li');

        for(let i=0;i<list.length; i++){
            var li=document.createElement('li');                   //XML file se li get
            li.textContent=list[i].textContent;
            demo.appendChild(li);
        }
    }
};
xhttp.open("GET","ajax.xml");
xhttp.send(); */

var xhttp = new XMLHttpRequest();
xhttp.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        if (data["menu-1"]) {
            var menu = data["menu-1"];
            var text = "<li>"; // Initialize the unordered list

            for (let y in menu) {
                let li = document.createElement('li');
                li.textContent = menu[y].title;
                text += "<li>" + li.textContent + "</li>"; // Collecting the list items
            }

            text += "</li>"; // Close the unordered list
            document.getElementById('demo').innerHTML = text; // Set the inner HTML of demo
        }
    }
};
xhttp.open("GET", "http://192.168.1.122/magesture-dev/index.php/wp-json/wp/v2/menu", true);
xhttp.send();

xhttp=new XMLHttpRequest();
xhttp.onload=function(){
    if(this.readyState==4 && this.status==200){
        var data=JSON.parse(this.responseText);
        if(data["menu-2"]){
            var menu=data["menu-2"];
            for(let y in menu){
                console.log(menu[y].title)
            }if(menu.length>2){
                console.log(menu[2].title);
                document.getElementById('h1').innerHTML=menu[2].title;
            }
        }
    }
};
xhttp.open("GET","http://192.168.1.122/magesture-dev/index.php/wp-json/wp/v2/menu",true)
xhttp.send();

//document.getElementById('img').src='Bild 1.png';      //javascript thi image get

const jsondata='{"image":{"id":1,"url":"Bild 1.png"}}';
const data=JSON.parse(jsondata);
const imgElement=document.getElementById('img');                  //json data ni rite image get
imgElement.src=data.image.url;

var xhttp=new XMLHttpRequest();
xhttp.onload=function(){
    if(this.readyState==4 && this.status== 200){
        var deta=JSON.parse(this.responseText);      /*menu-1 mese hi id get karayi hai*/
        if (deta["menu-1"]){    
            var menu= deta["menu-1"];
            console.log(menu);
            for(let y in menu){
                console.log(menu[y].ID)
                document.getElementById('01').innerHTML=menu[y].ID;
            }if(menu.length>2){
                console.log(menu[2].ID);
                document.getElementById('01').innerHTML=menu[2].ID;
            }
        }
    }
};
xhttp.open("GET","http://192.168.1.122/magesture-dev/index.php/wp-json/wp/v2/menu",true)
xhttp.send();

var xhttp=new XMLHttpRequest();
xhttp.onload=function(){
    if(this.readyState==4 && this.status== 200){
        var deta=JSON.parse(this.responseText);      /*menu-1 mese hi id get karayi hai*/
        if (deta["menu-1"]){    
            var menu= deta["menu-1"];
            console.log(menu);
            for(let y in menu){
                console.log(menu[y].ID)  
            }if (menu.length>3){
                console.log(menu[3].ID);
                document.getElementById('02').innerHTML=menu[3].ID;
            }
        }
    }
};
xhttp.open("GET","http://192.168.1.122/magesture-dev/index.php/wp-json/wp/v2/menu",true)
xhttp.send();

var xhttp=new XMLHttpRequest();
xhttp.onload=function(){
    if(this.readyState==4 && this.status== 200){
        var deta=JSON.parse(this.responseText);      /*menu-1 mese hi id get karayi hai*/
        if (deta["menu-2"]){    
            var menu= deta["menu-2"];
            console.log(menu);
            for(let y in menu){
                console.log(menu[y].ID)  
            }if (menu.length>1){
                console.log(menu[1].ID);
                document.getElementById('03').innerHTML=menu[1].ID;
            }
        }
    }
};
xhttp.open("GET","http://192.168.1.122/magesture-dev/index.php/wp-json/wp/v2/menu",true)
xhttp.send();

var xhttp=new XMLHttpRequest();
xhttp.onload=function(){
    if(this.readyState==4 && this.status==200){
        var deta=JSON.parse(this.responseText);
        if (deta["menu-2"]){    
            var menu= deta["menu-2"];                   /*live data me menu-2 mese sirf third id ko get kiya*/
           for(let y in menu){
                //console.log(menu[y].title)
                //document.getElementById('Kitchens').innerHTML=menu[y].title;
            }if (menu.length > 2) {
                console.log(menu[2].title); 
                document.getElementById('04').innerHTML = menu[2].title;
            }
        }
    }
};
xhttp.open("GET","http://192.168.1.122/magesture-dev/index.php/wp-json/wp/v2/menu",true)
xhttp.send();
var xhttp=new XMLHttpRequest();
xhttp.onload=function(){
    if(this.readyState==4 && this.status== 200){
        var deta=JSON.parse(this.responseText);      /*menu-1 mese hi id get karayi hai*/
        if (deta["menu-2"]){    
            var menu= deta["menu-2"];
            console.log(menu);
            for(let y in menu){
                console.log(menu[y].ID)  
            }if (menu.length>1){
                console.log(menu[1].ID);
                document.getElementById('05').innerHTML=menu[1].ID;
            }
        }
    }
};
xhttp.open("GET","http://192.168.1.122/magesture-dev/index.php/wp-json/wp/v2/menu",true)
xhttp.send();


