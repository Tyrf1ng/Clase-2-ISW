const numeros = [1,2,3,4,5];

function totalarray(array){
    let total = 0 ;
    for (let i = 0; i < array.length; i++){
        total = total + numeros[i];
    };
    return total;
};
console.log(totalarray(numeros));



const numeros2 = [1,2,3,4,5];

function promediomatriz(){
    let tamaño = numeros2.length
    let promedio = 0;
    for ( let i = 0 ; i < tamaño; i++){
        promedio += numeros2[i]/tamaño;
    }
    return promedio;
}
console.log(promediomatriz(numeros2));



const frutas = ['manzana','pera','uva','sandia','melon'];
const frutas2 = [];
function matrizmayus(array,array2){
    for ( let i = 0 ; i < array.length; i++){
    array2.push(array[i].toUpperCase());
    };
    return array2;
};
console.log(matrizmayus(frutas,frutas2));



const numeros3 = [1,2,3,4,5,6,7,8,9,10];
const numeros4 = [];

function numerospares(array,array2){
    for (let i = 0 ; i < array.length; i++){
        if (array[i]%2 == 0){
            array2.push(array[i]);
        }
    }
    return array2;
}
console.log(numerospares(numeros3,numeros4));