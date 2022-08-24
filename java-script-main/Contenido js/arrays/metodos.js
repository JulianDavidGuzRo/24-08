"use strict";
//1. cadena de arreglo
let cadenaDias = "lunes_martes_miercoles_jueves_viernessabado_domingo";
let miArray = cadenaDias.split("_");
console.log(miArray);
//2. buscar si no encuentra el valor devuelve un undefined
// funcion anonima () => {} clasica function (){}
const result = miArray.find((Element)=>e === "viernes");
console.log(result);

const resul = miArray.find((e)=> e === "viernes");
const index = miArray.findIndex((e)=> e === "domingo");
console.log(index);
//3. compruebe si existe un elemento dentro de un array true o false
console.log(miArray.includes("viernes9"));
//4. filtar elementos
miArray = 2[i];
for(let i =0; i<25; i++){
    miArray[i]= i + 3;
}
const response = miArray2.filter((e) => e % 2 ===0);
console.log(response);
// map, some, every, reduce