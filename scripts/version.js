const fs = require('fs');
const argv = require('minimist') (process.argv.slice(2));

let count = Object.keys(argv).length;
let fichero = fs.readFileSync('VERSION', 'utf8');
fichero = fichero.replace ("\n" ,"");
let delim = fichero.split (".");

let x = parseInt (delim[0], 10);
let y = parseInt (delim[1], 10);
let z = parseInt (delim[2], 10);
let data;

if(argv.x && count == 2)  {
   x += 1;
   data = x + '.' + 0 + '.' + 0;
} else if (argv.y && count == 2) {
   y += 1;
   data = x + '.' + y + '.' + z;
} else if (argv.z && count == 2) {
   z += 1;
   data = x + '.' + y + '.' + z;
} else {
   console.log("Opciones validas:");
   console.log("-x, -y, -z");
}
fs.writeFileSync('VERSION', data);
console.log("Cambio de version realizado!");
