"use strict";
// funcion clacica
function nombrefuncion(/**recibo de parametros */){
    /** cuerpo de la funcion */
    return 0;
}
// invocacion de la funcion
//nombrefuncion ();

function suma(num1= 0, num2 = 0){
    return num1 + num2;
}

let result=0;
result=suma(4);
console.log(result);

//funcion tipo flecha
const resta = (num1=1,num2=1)=> {
    return num1 - num2;

}
console.log(resta(12));