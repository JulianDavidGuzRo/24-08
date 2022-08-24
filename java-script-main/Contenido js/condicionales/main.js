"use strict"
let num1;
let num2;
num1 = 9
num2 = "9";

if( num2 > 0 ){

}else if (num1 > 0){
    if ((num1 % 3 === 0) && (parseInt(num2) > 0)){
        console.log(" num1 Es multiplo de 3 y num 2 > 0");
    }else{
        if(num1 % 2 === 0) 
        console.log("num1 es multiplo de 2");
    }
}
//switch 
let opcion ;
opcion = prompt("introduzca una opcion 1-4");

switch ( opcion){
    case "1":
        alert("selecciono la opcion 1");
        break
    case "2":
        alert("selecciono la opcion 2");
        break
    case "3":
        alert("selecciono la opcion 3");
        break
    case "4":
        alert("selecciono la opcion 4");
    default:
            alert("seleciiono una opcion invalida")
            break

}