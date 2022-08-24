"use strict";
let miArray=2[];
for ( let i = 0; i<25; i++){
    miArray2[i] = i + 2;
}
console.log(miArray2)
//spread operator
console.log(...miArray2);
//agregar elementos a un arreglo
miArray2.push(3,78,900,1200);
//console.log(...miArray2);
let miArray3 = [...miArray2, 34,88,3450];
console.log(...miArray3);
let resultado = miArray2.concat(miarreglo3);
console.log(...resultado);
let arrayFinal = [...miArray2, ...,miArray3,...resultado];
//console.log(...arrayFinal);
//propagacion en funciones
let lenguajes = [`php`,`java`,`js`,`ruby`,`c#`,`c++`];

const printlenguajes = (len1,len2,len3="assembler",...len4) =>{
    console.log(`*** los lenguajes top ***
                    ${len1} - ${len2} - ${len3}******`);

}
printlenguajes(...lenguajes, `cobol1`, `f#`);

