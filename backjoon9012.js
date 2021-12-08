var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
let answer = '';

const calculator = ps => {
  let copyPs = ps.trim().split('');
  let array = [];
  let length = copyPs.length;

  if (length <= 50 && length >= 2) {
    for (let i = 0; i < length; i++) {
      let pop = copyPs.pop();
      if (array[array.length - 1] == ')' && pop == '(') {
        array.pop();
      } else {
        array.push(pop);
      }
    }
    if (array.length === 0) {
      answer = 'YES';
    } else {
      answer = 'NO';
    }
  } else {
    answer = 'NO';
  }

  console.log(answer);
};

for (let i = 1; i < Number(input[0]) + 1; i++) {
  calculator(input[i]);
}
