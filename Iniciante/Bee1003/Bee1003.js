var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var input = require("fs").readFileSync("./Bee1003.txt", "utf8");
let lines = input.split("\n");

x = +lines.shift();
y = +lines.shift();

console.log(`SOMA = ${x + y}`);