const { registrar, leer } = require('./operaciones.js');

const parameters = process.argv.slice(2);
const operacion = parameters.shift();

if (operacion === "registrar") {
    const [nombre, edad, animal, color, enfermedad] = parameters
    registrar(nombre, edad, animal, color, enfermedad)
}
if (operacion === "leer") {
    leer()
}