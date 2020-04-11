// Normalmente let y var hacen lo mismo, declaran una variable
// Pero la forma en la que esa variable vive, es diferente

// Var - Cuando utilizamos variables con el nombre var nosotros la podemos renombrar, reutilizar
// o reinicializar cuantas veces queramos y esa variable va a tener el valor de la última asignación,
// no importa en el bloque donde se encuentre

var nombre = 'Wolverine';

if (true) {
    var nombre = 'Magneto';
}

console.log(nombre);