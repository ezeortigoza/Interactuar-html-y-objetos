const mensajes = ['Bienvenido!' ,'Buenas!', 'Buenos dias!'];
let mensaje = mensajes[Math.floor(Math.random()*mensajes.length)];
alert(mensaje);
console.log(mensaje);
let inicio = prompt("Buenas por favor ingrese su nombre");
console.log("Bienvenido " + inicio);

bienvenidxs = ["Hoy veras los diferentes tipos de deportes"];
alert(bienvenidxs);
console.log(bienvenidxs);

bienvenidxs = ["Calistenia ,  Crossfit  , Volley  , Futbol  , Streetlifting , Powerlifting , Tennis  y Paddle"];
alert(bienvenidxs);
console.log(bienvenidxs);

let entrada = parseInt (prompt("Si te gusto alguno de estos deportes elegi un numero del 1 al 8"));


if (entrada !=0 && entrada <=8){

    switch (entrada){
        case 1:
            alert("Calistenia");
        break;
  
        case 2:
            alert("Crossfit");
        break;
  
        case 3:
            alert("Volley");
        break;
  
        case 4:
            alert("Futbol");
        break;
        
        case 5:
            alert("Streetlifting");
        break;

        case 6:
            alert("Powerlifting");
        break;

        case 7:
            alert("Tennis");
        break;

        case 8:
            alert("Paddle");
        break;

    }
    console.log("Has elegido el deporte " + entrada);
  
  } else{
      alert("No es valido el numero ni palabra");
  } 




const h1 = document.querySelector("#titulo");
let titulo = h1.innerHTML;

console.log(titulo);

h1.innerHTML = "Hola Lautaro Garcia";

h1.className = "texto";

const p = document.querySelector("p");
console.log(p.classList);
p.classList.add("text");



const principal = document.querySelector("#principal");
let li = document.createElement("li");
li.innerHTML = "Futbol";

principal.append(li);

 const SW = document.querySelector(".SW");
 li = document.createElement("li");
 li.innerHTML = "Streetlifting";

SW.appendChild(li); 

const PW = document.querySelector(".PW");
li = document.createElement("li");
li.innerHTML = "Powerlifting";

PW.appendChild(li); 

const Tennis = document.querySelector(".Tennis");
li = document.createElement("li");
li.innerHTML = "Tennis";

Tennis.appendChild(li); 

const Paddle = document.querySelector(".Paddle");
li = document.createElement("li");
li.innerHTML = "Paddle";

Paddle.appendChild(li); 

const body = document.querySelector(".background");
let background = body.innerHTML;
body.className = "bg";





