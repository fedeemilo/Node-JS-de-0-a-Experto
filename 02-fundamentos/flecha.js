



// Creo una función normal
//  

// Función de flecha
// let sumar = (a, b) => {
//     return a + b;
// }

// Ya que el cuerpo de la función se escribió en una sola línea, puede ser acotado así:
let sumar = (a, b) => a + b;

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre()  {
        return `${this.nombre} ${this.apellido} - Poder: ${this.poder}`
    }
}


console.log(sumar(10, 20));
console.log(deadpool.getNombre())