    /*var xhttp=new XMLHttpRequest();
xhttp.open("GET","list.xml",true);
xhttp.onload = function(){
    if(this.readyState==4 && this.status==200){
        var xml=xhttp.responseXML;
        var header = document.getElementById('demo');                      /* xml file se header
        var list=xml.getElementsByTagName('li');

        for(let i=0;i<list.length; i++){
            var li=document.createElement('li');
            li.textContent=list[i].textContent;
            demo.appendChild(li);
        }
    }
};
xhttp.send();*/

/*var xhttp=new XMLHttpRequest();
xhttp.onload = function(){
    if(this.readyState==4 && this.status==200){
        var data=JSON.parse(this.responseText)
        //console.log(this.responseText);                                           //live link mese get karake header
        for(let x in data){
            console.log(x,data[x])
            var menu = data[x];     
            for(let y in menu){                                              //menu-1 or menu-2 ke title ko get kiya
                let li= document.createElement('li');
                li.textContent=menu[y].title;
                console.log(li.textContent)
                demo.appendChild(li);
            }
        }
        document.getElementById('demo').innerhtml=li.textContent;
        text+="</ul>"
        console.log(text)
    }
};
xhttp.open("GET","http://192.168.1.122/magesture-dev/index.php/wp-json/wp/v2/menu",true);
xhttp.send();*/

var xhttp=new XMLHttpRequest();
xhttp.onload = function(){
    if(this.readyState==4 && this.status==200){
        var data=JSON.parse(this.responseText)
        if(data["menu-1"]){
        var menu =data["menu-1"]
    for(let y in menu){
        let li=document.createElement('li');
        li.textContent=menu[y]  .title;
        console.log(li.textContent)
        demo.appendChild(li);
    };
}
    document.getElementById('demo').innerHTML=li.textContent;
    text+="</ul>"
    }
};
xhttp.open("GET","http://192.168.1.122/magesture-dev/index.php/wp-json/wp/v2/menu",true);
xhttp.send();




var request= new XMLHttpRequest();
request.onload=function(){
    if(this.readyState==4 && this.status==200){
    var Data=JSON.parse(this.responseText);
    for(let x in Data){
        console.log(x,Data[x])
        var Menu=Data[x];
        for(let y in Menu){
         document.getElementById('heading').innerHTML=Menu[y].post_status;
         console.log(Menu[y].post_status)
        }
       }
    }                                                                                                                                   
};
request.open("GET","http://192.168.1.122/magesture-dev/index.php/wp-json/wp/v2/menu",true)
request.send();



document.getElementById('img').src='house.jpg';

var welcome="Welcome";
document.getElementById("welcome").innerHTML=welcome;
 
var xhttp=new XMLHttpRequest();
xhttp.onload=function(){
    if(this.readyState==4 && this.status==  200){
        var deta=JSON.parse(this.responseText);      /*menu-1 mese hi id get karayi hai*/
        if (deta["menu-1"]){    
            var menu= deta["menu-1"];
            for(let y in menu){
                console.log(menu[y].ID)
                document.getElementById('welcome').innerHTML=menu[y].ID;
            }
        }
    }
};
xhttp.open("GET","http://192.168.1.122/magesture-dev/index.php/wp-json/wp/v2/menu",true)
xhttp.send();



function myname(){
var pregraph="It is surrounded by forests and teaming with wildlife"+
""+" Your hosts are Melissa and Marcus Richt two Swedes and busy parents of two who enjoy travelling and photography Gransäng is less than a 10 minute dive to the nearest town";
    return pregraph
}
var result=myname();
document.getElementById('pre').innerHTML=result;

var Pregraph='["Keep your space tidy by decluttering. This not only makes your home look better but also feels more relaxingA paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph"]';
var myArray =JSON.parse(Pregraph);
document.getElementById("Pre").innerHTML=myArray;    

//document.getElementById('image').src='country-gallery-backyard (1).jpg'; 

const jsondata='{"image":{"id":1,"url":"country-gallery-backyard (1).jpg"}}';
const dAta=JSON.parse(jsondata);                                             /*JSON se image get */
const imgElement=document.getElementById('image');
imgElement.src=dAta.image.url;

/*var data=[{
    fname:'Gallary'
}];
var tbody = document.getElementById('GAllary');                     /*javascript che text get
for (i=0; i<data.length; i++) {
var h2 = document.createElement("h2");
			h2.innerHTML = data[i].fname
			tbody.appendChild(h2)
};*/
 
var xhttp=new XMLHttpRequest();
xhttp.onload=function(){
    if(this.readyState==4 && this.status==200){
        var deta=JSON.parse(this.responseText);
        if (deta["menu-2"]){    
            var menu= deta["menu-2"];                   /*live data me menu-2 mese sirf secound id ko get kiya*/
           for(let y in menu){
                console.log(menu[y].title)
                //document.getElementById('GAllary').innerHTML=menu[y].title;
            }if (menu.length > 1) {
                console.log(menu[1].title); // Get the second item's ID
                document.getElementById('GAllary').innerHTML = menu[1].title; // Display it
            }
        }
    }
};
xhttp.open("GET","http://192.168.1.122/magesture-dev/index.php/wp-json/wp/v2/menu",true)
xhttp.send();



document.getElementById('Room').src='country-thumbnail-slider-item2-small.jpg'; 
document.getElementById('Bathroom').src='bathroom-1.jpg'; 
document.getElementById('Kitchen').src='country-gallery-terrace.jpg'; 
document.getElementById('Bedroom').src='country-gallery-category8.jpg'; 

/*var kitchen="Kitchen";
document.getElementById('Kitchens').innerHTML=kitchen;*/  //javascrit se get
 
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
                document.getElementById('Kitchens').innerHTML = menu[2].title;
            }
        }
    }
};
xhttp.open("GET","http://192.168.1.122/magesture-dev/index.php/wp-json/wp/v2/menu",true)
xhttp.send();

/*var bathtab="Bathtab";
document.getElementById("bathtab").innerHTML=bathtab;*/ //javascript se heading get

var xhttp=new XMLHttpRequest();
xhttp.onload=function(){
    if(this.readyState==4 && this.status==200){
        var deta=JSON.parse(this.responseText);
        if (deta["menu-2"]){    
            var menu= deta["menu-2"];                   /*live data me menu-2 mese sirf first id ko get kiya*/
           for(let y in menu){
                //console.log(menu[y].title)
                //document.getElementById('Kitchens').innerHTML=menu[y].title;
            }if (menu.length >0) {
                console.log(menu[0].title); 
                document.getElementById('bathtab').innerHTML = menu[0].title;
            }
        }
    }
};
xhttp.open("GET","http://192.168.1.122/magesture-dev/index.php/wp-json/wp/v2/menu",true)
xhttp.send();


/*var terrace="Terrace";
document.getElementById("terrace").innerHTML=terrace;*/

var xhttp=new XMLHttpRequest();
xhttp.onload=function(){
    if(this.readyState==4 && this.status==200){
        var deta=JSON.parse(this.responseText);
        if (deta["menu-2"]){    
            var menu= deta["menu-2"];                   /*live data me menu-2 mese sirf four id ko get kiya*/
           for(let y in menu){
                //console.log(menu[y].title)
                //document.getElementById('Kitchens').innerHTML=menu[y].title;
            }if (menu.length >3) {
                console.log(menu[3].title); 
                document.getElementById('terrace').innerHTML = menu[3].title;
            }
        }
    }
};
xhttp.open("GET","http://192.168.1.122/magesture-dev/index.php/wp-json/wp/v2/menu",true)
xhttp.send();


/*var bedsroom="Bedroom";
document.getElementById('bedsroom').innerHTML=bedsroom;*/

var xhttp=new XMLHttpRequest();
xhttp.onload=function(){
    if(this.readyState==4 && this.status==200){
        var deta=JSON.parse(this.responseText);
        if (deta["menu-2"]){    
            var menu= deta["menu-2"];                   /*live data me menu-2 mese sirf four id ko get kiya*/
           for(let y in menu){
                //console.log(menu[y].title)
                //document.getElementById('Kitchens').innerHTML=menu[y].title;
            }if (menu.length >4) {
                console.log(menu[4].title); 
                document.getElementById('bedsroom').innerHTML = menu[4].title;
            }
        }
    }
};
xhttp.open("GET","http://192.168.1.122/magesture-dev/index.php/wp-json/wp/v2/menu",true)
xhttp.send();


/*var ammenities="ammenities";
document.getElementById('ammenities').innerHTML=ammenities;*/

xhttp=new XMLHttpRequest();
xhttp.onload=function(){
    if(this.readyState==4 && this.status==200){
        var data=JSON.parse(this.responseText);
        if(data["menu-2"]){
            var menu=data["menu-2"];
            for(let y in menu){
                console.log(menu[y].title)
            }if(menu.length>4){
                console.log(menu[4].title);
                document.getElementById('ammenities').innerHTML=menu[4].title;
            }
        }
    }
};
xhttp.open("GET","http://192.168.1.122/magesture-dev/index.php/wp-json/wp/v2/menu",true)
xhttp.send();

document.getElementById('photo').src='sliderimage.jpg';

/*var Amenities="Amenities";
document.getElementById('Amenities').innerHTML=Amenities;*/
xhttp=new XMLHttpRequest();
xhttp.onload=function(){
    if(this.readyState==4 && this.status==200){
        var data=JSON.parse(this.responseText);
        if(data["menu-2"]){
            var menu=data["menu-2"];
            for(let y in menu){
                console.log(menu[y].filter)
            }if(menu.length>4){
                console.log(menu[4].filter);
                document.getElementById('Amenities').innerHTML=menu[4].filter;
            }
        }
    }
};
xhttp.open("GET","http://192.168.1.122/magesture-dev/index.php/wp-json/wp/v2/menu",true)
xhttp.send();

//document.getElementById('table').src='break-table.jpg';
const Jsondata='{"image":{"id":1,"url":"break-table.jpg"}}';
const dATa=JSON.parse(jsondata);                                             /*JSON se image get */
const iMgElement=document.getElementById('table');
iMgElement.src=dATa.image.url;


/*var HeadinG="Contact Us Directly";
document.getElementById('HeadinG').innerHTML=HeadinG;*/
xhttp=new XMLHttpRequest();
xhttp.onload=function(){
    if(this.readyState==4 && this.status==200){
        var data=JSON.parse(this.responseText);
        if(data["menu-1"]){
            var menu=data["menu-1"];
            for(let y in menu){
                console.log(menu[y].ping_status)
            }if(menu.length>4){
                console.log(menu[4].ping_status);
                document.getElementById('HeadinG').innerHTML=menu[4].ping_status;
            }
        }
    }
};
xhttp.open("GET","http://192.168.1.122/magesture-dev/index.php/wp-json/wp/v2/menu",true)
xhttp.send();

