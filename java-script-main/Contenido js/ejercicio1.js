" use strict"; //directiva que indica que estamos trabajando en modo estricto
/**
 * comentarios de bloque
 */
// declaracion de variables o contenedores//
var variable1=10; // caracter global
let variable2 = 23; //de ambito local
const constante1 = 3.14; // declarar constantes//
console.log(variable2);
var variable1 = 0
if (true){
    var variable1 = 100;
    let variable2= 29;
    console.log(variable2);

}
console.log(variable2);

//realizar un programa que lea 2 numeroa y los sumer

let num1;
let num2;
num1 = prompt ("introduzca un numero");
num2 = prompt ("introduzca otro numero");
let suma = 0;
suma = num1 + parseFloat(num2 );
connsole.log("el resultado de la suma es"+suma);
alert ("la suma es " +suma);