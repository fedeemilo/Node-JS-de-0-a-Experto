let empleados = [
	{
		id: 1,
		nombre: 'Federico'
	},
	{
		id: 2,
		nombre: 'Melisa'
	},
	{
		id: 3,
		nombre: 'Juan'
	}
];

let salarios = [
	{
		id: 1,
		salario: 1000
	},
	{
		id: 2,
		salario: 2000
	}
];

let getEmpleado = (id) => {
	// La promesa en una función como cualquiera que contiene 3 callbacks
	// Resolve se llama si la promesa es exitosa, Reject en caso contrario
	return new Promise((resolve, reject) => {
		let empleadoDB = empleados.find((empleado) => empleado.id === id);

		if (!empleadoDB) {
			reject(`No existe un empleado con el ID ${id}`);
		} else {
			resolve(empleadoDB);
		}
	});
};

let getSalario = (empleado) => {
	return new Promise((resolve, reject) => {
		let salarioDB = salarios.find((salario) => salario.id === empleado.id);

		if (!salarioDB) {
			reject(`No se encontró un salario para el empleado ${empleado.nombre}`);
		} else {
			resolve({
				nombre: empleado.nombre,
				salario: salarioDB.salario,
				id: empleado.id
			});
		}
	});
};

getEmpleado(5)
	.then((empleado) => {
		return getSalario(empleado);
	})
	.then((res) => {
		console.log(`El salario de ${res.nombre} es de ${res.salario}`);
	})
	.catch((err) => console.log(err));
