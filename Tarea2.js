// Ejercicio #1 Es realizar un programa que visualice los números del 1 al 10 en orden creciente y decreciente a la vez


// algo que hice aca fue declarar los resultados vacios para poderlos llamar por separado y en orden. 
let resultado1 = "";
let resultado2 = "";

// Iaca se inicia la variable de donde debe de partir. 
let i = 1;
let j = 10;

// Usamos un ciclo while para hacer el conteo creciente y despues el decreciente.
while (i <= 10 && j >= 1) {
  resultado1 += ` ${i}` // le puse un espacio porque sino se ve todo pegado
  resultado2 += ` ${j}`;
  i++;
  j--;
}

// Mostramos el resultado en la consola.
console.log(resultado1 , resultado2);



////////////

// Ejercicio #2 Ingrese un número y mostrar su potencia n^2, repetir este proceso hasta que se ingrese un número negativo

// // Inicializamos una variable para almacenar el número ingresado por el usuario.
// let numero = parseInt(prompt("Ingrese un número:"));

// // Mientras el número ingresado no sea negativo...
// while (numero >= 0) {
//   // Calculamos la potencia al cuadrado y la mostramos.
//   let resultado = numero * numero;
//   console.log(`El cuadrado de ${numero} es: ${resultado}`);

//   // Pedimos al usuario que ingrese otro número.
//   numero = parseInt(prompt("Ingrese otro número (negativo para salir):"));
// }

// // Cuando se ingrese un número negativo, el ciclo while se detendrá y el programa finalizará.
// console.log("Has ingresado un número negativo. El programa ha terminado.");


////////////
////////////

// Ejercicio #3 Defina una variable número hasta que se ingrese un número negativo, luego mostrar cuantos números se introdujeron

var contador = 0;

// Usamos un bucle while para solicitar números al usuario / en el ejercicio de adivinar creo qu eno lo usamos con perseINt
while (true) {
  var numeros = parseInt(prompt("Introduce un número:"));

  if (numeros < 0) {
    break; // para salir del bucle cunado sea negativo
  }

  contador++; // Incrementamos en cada ciclo
}

// Mostramos la cantidad de números introducidos
console.log("Se introdujeron " + contador + " números."); // IMPORTANTE //okay parece que si funciona, pero cae en un ciclo infinito y hay que cerrar completamente la web. 

////////////
////////////

// Ejercicio #4 Pedir números hasta que se introduzca un número negativo y calcular la media, mostrar máximo con dos decimales

//En este podemos hacer algo similar a lo anterior, pero agrenando lo de la media

var suma = 0;
var contador = 0;

while (true) {
  var numero = parseFloat(prompt("Introduce un número:"));

  if (isNaN(numero)) { // hasta donde entiendo isNnan lo que hace es validar que sea un numero y no otro caracter el que se ingrese con un true/false
    alert("Por favor, ingresa un número válido."); // por lo que nos daria esta alerta si la persona ingresa algo erroneo
    continue;
  }

  if (numero < 0) {
    break;
  }

  suma += numero;
  contador++;
}

if (contador > 0) // me falta terminar este ejercico porque estoy inverstigando de la media. 


////////////
////////////


 //Ciclos Do While 

//Ejercicio #1 Determinar si un número es primo o no. El número digitado deberá estar entre 0 y 100. Si es primo indicará en consola “El número digitado es un número Primo”. Si no  saldrá “El número digitado no es un número primo”


var numero = parseInt(prompt("Introduce un número entre 0 y 100:"));

if (numero >= 0 && numero <= 100) {
  if (numero <= 1) {
    console.log("El número ingresado no es un número primo.");
  } else if (numero === 2) {
    console.log("El número ingresado es un número primo.");
  } else {
