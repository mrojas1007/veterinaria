let fs = require('fs');

function registrar(nombre, edad, animal, color, enfermedad){
    let file = fs.readFileSync('citas.json');
    let citas = JSON.parse(file);
    citas.push({nombre, edad, animal, color, enfermedad})
    fs.writeFileSync('citas.json', JSON.stringify(citas))
}

function leer(){
    let file = fs.readFileSync('citas.json');
    let citas = JSON.parse(file);
    console.log(citas);
}

module.exports = { registrar, leer }
