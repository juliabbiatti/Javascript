/** Clase 13: Intro JS */

//Hola mundo desde un archivo externo
//console.log("Hola Mundo");

//Variables
/*
var nombre = "Harry";
console.log(nombre)


let nombreLet = "Hermione"; //string
console.log(nombreLet);


let edad; //numérica

const PI = 3.14;
let tenerMascotas = true; //boleana

console.log(edad, PI, tenerMascotas)

edad = 20;
console.log(edad, PI, tenerMascotas)


//Operaciones básicas 
let numeroA = 2;
let numeroB = 5;

let resultadoSuma = numeroA + numeroB;

console.log(numeroA + numeroB);
console.log(resultadoSuma);


let nombre = "Cosme";
let apellido = "Fulanito";
const ESPACIO = " ";

let nombreCompleto = nombre + ESPACIO + apellido;

console.log(nombreCompleto);
 */

//Prompt

/*
let entrada = prompt("Ingrese su nombre");
let salida = "Hola " + entrada;
alert(salida);


let numero = parseInt(prompt("Ingrese su número"));
const NUMEROB = 30;

let salidaNumero = numero + NUMEROB;
alert(salidaNumero);


//Arrays
//Unidimensional
let numeros = [1, 2, 3, 5, 8];
let colores = ["rojo", "verde", "azul"];

console.log(numeros[1]);
console.log(colores[0]);

//multidimencionales
let colorMascotas = [
  ['perro', 'marron', 'gris', 'rojo'],
  ['gato', 'blanco', 'negro'],
  ['pez', 'amarillo'],
  ['Jirafa', 'naranja'],
];
console.log(colorMascotas[1][2]);
console.log(colorMascotas[1][1].length);
 */

//Objeto utilizado como array asociativo
/*let persona = {
  nombre: "Juan",
  edad: 32,
  profesion: "Desarrollador"
};

console.log(persona["nombre"]);
console.log(persona.edad);

let empleados = [
{ nombre: "Juan", edad: 32, profesion: "Desarrollador" },
{ nombre: "Cosme", edad: 22, profesion: "Tester" },
{ nombre: "Pepito", edad: 42, profesion: "Frontend" }
];

console.log(empleados[1].nombre);
*/

//Clase 14: Condicionales en JS//

// if else if else

/*let numero = 15;
if (numero > 3) {
  console.log("El número es mayor a 3");
} else if (numero === 3) {
  console.log("El número es igual a 3");
} else {
  console.log("El número es menor a 3");
}
console.log("Continua con la ejecución");

//Operador condicional ternario (3 operadores)
//Else resumido

/*let edad = 15;
let esMayorEdad;

if (edad > 18) {
  esMayorEdad = true;
} else {
  edad < 18;
  esMayorEdad = false;
}

console.log("¿Es mayor de edad?", esMayorEdad);

let esMayorEdad = edad > 18 ? true : false;

console.log("¿Es mayor de edad?", esMayorEdad);
*/

//Con Operador terniario
/*let edad = 24;
let nombre = "Pepe";
edad >= 18
  ? console.log(nombre, "es mayor de edad")
  : console.log(nombre, "no es mayor de edad");

//SWITCH

/*let powerRanger = "Red";
switch (powerRanger) {
  case "Red":
    console.log("Red Ranger! Jason");
    break;
  case "azul":
    console.log("Blue Ranger! Billy");
    break;
  case "negro":
    console.log("Black Ranger! Zack");
    break;
  default:
    console.log("No sos un Power Ranger");
}

console.log (new Date().getDay());
let day = (new Date().getDay());
switch(day){
case 0:
  console.log("domingo");
  break;
  case 1:
    console.log("lunes");
    break;
    case 2:
      console.log("martes");
      break;
      case 3:
        console.log("miercoles");
      break;
      case 4:
        console.log("jueves");
      break;
      case 5:
        console.log("viernes");
        break;
        case 6:
          console.log("sábado");
          break;
          default:
            console.log("Ese día no existe")
}
//01:07
*/

/*let edad = prompt("Por favor, ingresá tu edad.");
edad = Number(edad); //que la entrada sea numero

if (edad !== null) {
if (edad > 1000) {
  document.write("El número ingresado no es válido.");
} else if (edad <= 100) {
  document.write("Puedes ingresar al sitio.");
} else {
  document.write("Mayor a 100 años");
}
}


/*if (a < 5) {
  if (a === 1) {
  alert("El número es menor a 5 y es 1");
  } else {
  alert("El número es menor a 5, pero no es 1");*/

//While

/*let i = 0;
while (i < 5) {
  console.log("Valor de i: ", i);
  i = i + 1;
}

let numero = 100;
while (numero > 0) {
  document.write('Te queda de saldo: ', numero, "<br>");
  numero = numero - 5;
}

let pasos = 100;
while (pasos >= 2) {
  document.write('Te quedan ', pasos, ' pasos', "<br>");
  pasos = pasos - 1;
} if (pasos == 1){ //2 iguales porque queremos que sea en el numero 1, no asignarle un valor de 1 a la variable
document.write("Solamente te queda un paso para caminar");
}

    //ForEach


    let objetosMagicos = ["Varita", "Libro", "Lechuza", "Caldero"];
    /* objetosMagicos.forEach(function(objetosMagicos, indice){
        console.log("Objeto con forEach es: ", objetosMagicos, indice);
      })

      objetosMagicos.forEach((objetosMagicos, indice) =>
        console.log("Objeto con forEach ,con función flecha, es: ", objetosMagicos, indice))


      //Map - Generar un nuevo array basado en las trabnsformaciones del array original 

      objetosMagicos.map((objetosMagicos) => {
        console.log("Objeto con map: " + objetosMagicos )
      });
      const numeros = [1, 2, 3,4, 5, 6, 10];
      const porDos = numeros.map((x) => x * 2 );
      const porCien = numeros.map((x) => x * 100 );

      console.log(numeros);      
      console.log("Por dos ", porDos);
      console.log("Por dos ", porCien);

     

      const numeros = [1, 2, 3, 4, 5, 6, 10];
      const encontrado = numeros.find(elemento => elemento > 4);
      console.log(encontrado);


      const nombres = ["Harry", "Hermione", "Ron"];
      const nombreEncontrado = nombres.find(elemento => elemento === "Harry");
      console.log("El nombre encontrado es: ", nombreEncontrado);
 */

/* const numeros = [1, 2, 3, 4, 5, 6, 10];
      const numMayoresCinco = numeros.filter((n) =>
      n >= 5 );
      console.log(numMayoresCinco);

    const palabras = ["manzanas", "banana", "uva", "frutillas", "naranja", "mora", "anana"]; 
    
    const palabraBuscada = "na";

    const palabrasClave = palabras.filter(
      (palabra) => palabra.includes(palabraBuscada)
    )

    console.log(palabrasClave);


    //El método 'includes' verifica si una subcadena o elemento estás presente en una cadena o en un array. En este caso, la usamos para corroborar que "na" está presente en las palabras dentro array.

    */

//CLASE 16-FUNCIONES

/*function holacomoestas(){
      prompt('Holaaa')
    }

    holacomoestas()

function saludar(nombre, apellido , edad) {
  document.write("Hola ", nombre, " ", apellido, " tu edad es ", edad);
}

saludar("juli", "abbiatti", 23);

//clase 16 

console.log(document.body) //Nos imprime el objeto
console.dir(document.body) //Nos imprime las propiedades
*/

//Selección de elementos del DOM querySelector

let titulo = document.querySelector('#titulo');
let parrafos = document.querySelectorAll('.parrafo');
let cambiarTextoBtn = document.querySelector('#cambiarTexto');
let cambiarColorBtn = document.querySelector('#cambiarColor');
let cambiarClaseBtn = document.querySelector('#cambiarClase');


console.log(titulo);
console.log(parrafos);
console.log(cambiarTextoBtn);


// Función para cambiar texto del título 
function cambiarTexto(){
  titulo.textContent = 'Texto nuevo';
}

//Función para cambiar el color de todos los parrafos seleccionados 

function cambiarColor() {
  parrafos.forEach(parrafo => {
      parrafo.classList.toggle('cambiarColor');
  });
}

function cambiarClase() {
  parrafos.forEach(parrafo => {
    parrafo.classList.toggle('nuevaClase');
});
}



//Asignar Evento CLICK a los botones
cambiarTextoBtn.addEventListener('click', cambiarTexto);
cambiarColorBtn.addEventListener('click', cambiarColor);
cambiarClaseBtn.addEventListener('click', cambiarClase);

//Clase 17