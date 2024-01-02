var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//let input = require("fs").readFileSync("./Bee1005.txt", "utf8");
let lines = input.split("\n");

x = +lines.shift();
y = +lines.shift();
media = ((x * 3.5 ) + (y * 7.5)) / 11.0;

console.log(`MEDIA = ${media.toFixed(5)}`);