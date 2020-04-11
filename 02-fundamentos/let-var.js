// Normalmente let y var hacen lo mismo, declaran una variable
// Pero la forma en la que esa variable vive, es diferente

var nombre = 'Wolverine';

if (true) {
    var nombre = 'Magneto';
}

console.log(nombre);