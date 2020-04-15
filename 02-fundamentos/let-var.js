// Normalmente let y var hacen lo mismo, declaran una variable
// Pero la forma en la que esa variable vive, es diferente

var nombre = 'Wolverine';
let nombreReal = 'Logan';

if (true) {
    var nombre = 'Magneto';
    let nombreReal = 'Eric';
}

console.log(nombre);
console.log(nombreReal);