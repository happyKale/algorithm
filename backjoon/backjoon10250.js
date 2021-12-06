var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
const num = parseInt(input[0]);

const calculator = num => {
  for (let i = 1; i <= num; i++) {
    const problem = input[i].split(' ');
    const h = parseInt(problem[0]);
    const w = parseInt(problem[1]);
    const n = parseInt(problem[2]);

    let number = parseInt(n / h + 1);
    let layer = n % h;

    if (layer === 0) {
      layer = h;
      number = parseInt(n / h);
    }
    if (number < 10) {
      number = `0${number}`;
    }

    console.log(`${layer}${number}`);
  }
};

calculator(num);
