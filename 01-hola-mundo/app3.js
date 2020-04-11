// Ciclos de eventos de Node - Ejemplos

// Antes de ejecutar el programa, pensar en que orden se ejecutará cada instrucción
console.log('Inicio del programa');

setTimeout(function() {
    console.log('Primer Timeoute');
}, 3000);

setTimeout(function() {
    console.log('Segundo Timeoute');
}, 0);

setTimeout(function() {
    console.log('Tercer Timeoute');
}, 0);

console.log('Fin del programa');