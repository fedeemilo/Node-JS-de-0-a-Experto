const fs = require('fs');

let listarTabla = (base, limite) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} x ${i} = ${base * i}`);
    }
} 

let crearArchivo = (base, limite) => {
	return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número.`);
            return;
        }

		let data = '';

		for (let i = 1; i <= limite; i++) {
			data += `${base} x ${i} = ${base * i}\n`;
		}

		// const data = new Uint8Array(Buffer.from('Hello Node.js'));
		fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) 
                reject(err);
            else 
                resolve(`tabla-${base}-al-${limite}.txt`);
		});
	});
};

module.exports = {
    crearArchivo,
    listarTabla
}
