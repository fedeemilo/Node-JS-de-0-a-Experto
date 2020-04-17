/**
 * Async Await
 */

//  let getNombre = async () => {

//      return 'Federico';
//  }

let getNombre = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('Federico');
        }, 3000)

    });
}

let saludo = async () => {
   let nombre =  await getNombre();

    return `Hola ${nombre}`;
}

 saludo().then(mensaje => {
     console.log(mensaje);
 }).catch(err => {
     console.log('Error de ASYNC', err);
 })

