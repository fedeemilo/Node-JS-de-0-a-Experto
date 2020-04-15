//  Templates literales

let nombre = 'Deadpool';
let real = 'Ron Canterbi';


// Ejemplo 1 de igualdad
let nombreCompleto = nombre + ' ' + real;
let nombreTemplate = `${nombre}  ${real}`;

console.log(nombreCompleto === nombreTemplate);

// Ejemplo 2 funcion en template

function getNombre() {
    return `${nombre} ${real}`;
}

console.log(`El nombre de: ${ getNombre() }`)