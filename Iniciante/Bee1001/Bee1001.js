var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//let input = require("fs").readFileSync("./Bee1001.txt", "utf8");
let lines = input.split("\n");

x = +lines.shift();
y = +lines.shift();

console.log(`X = ${x + y}`);