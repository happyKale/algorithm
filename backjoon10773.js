var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
let sum = 0;
let array = [];

const calculator = num => {
  if (num === 0) {
    array.pop();
  } else {
    array.push(num);
  }
};

for (let i = 1; i < Number(input[0]) + 1; i++) {
  calculator(parseInt(input[i]));
}

array.map(item => (sum += item));
console.log(sum);
