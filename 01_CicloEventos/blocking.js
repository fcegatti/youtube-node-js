const fs = require('fs');

console.log('Inicio del programa');

const data = fs.readFileSync('01_CicloEventos/archivo.txt', 'utf8');

console.log(data);

console.log('Fin del programa');
