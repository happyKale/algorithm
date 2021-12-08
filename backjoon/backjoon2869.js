var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
const problem = input[0].split(' ');

const up = parseInt(problem[0]);
const down = parseInt(problem[1]);
const height = parseInt(problem[2]);

let day = (height - down) / (up - down);
if (day % 1 !== 0) {
  day = parseInt(day) + 1;
}
console.log(day);
