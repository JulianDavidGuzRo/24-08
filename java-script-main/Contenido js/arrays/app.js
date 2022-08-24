"use strict"
let miarreglo = [];
let miarreglo2= new Array (1,2,3,4,5);
miarreglo = [2,4,2,5,45, true,"78", "hola mundo"];
miarreglo.push(56,78,true);
//miarreglo = [2,4,3,5,45, tue, "78", "hola mundo"];
for(let i=0;i<miarreglo.length;i++ ){
    console.log(miarreglo[i]);

}
//variaciones del for 
for (let i = 0; i<miarreglo.length;i++){

};

for(let j in miarreglo2);
    //console.log(miarreglo2[j]);
for(let j of miarreglo2){
    console.log(j);
}

miarreglo2.forEach((e)=>{
    console.log(e);
})
miarreglo2.forEach(function(e){
    console.log(e);
})