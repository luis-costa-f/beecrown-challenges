var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var input = require("fs").readFileSync("./Bee1002.txt", "utf8");
let lines = input.split("\n");

var r = +lines.shift();
var cir = 3.14159 * (r * r)

console.log(`A=${cir.toFixed(4)}`);