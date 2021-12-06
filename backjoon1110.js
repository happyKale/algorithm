var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
const num = parseInt(input[0]);

const changeNum = num => {
  return (num % 10) * 10 + ((parseInt(num / 10) + (num % 10)) % 10);
};

const calculator = num => {
  let result = 1;
  let newNum = changeNum(num);
  while (num !== newNum) {
    newNum = changeNum(newNum);
    result++;
  }
  console.log(result);
};

calculator(num);
