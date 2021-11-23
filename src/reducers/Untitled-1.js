// const calc = (a, b, operator) => {
//   if (opertor === '*') {
//     return a * b;
//   }
//   if (operator === '+') {
//     return a + b;
//   }
//   if (operator === '-') {
//     return a - b;
//   }
// };

const calc = (a, b) => (operator) => operator(a, b);

const add = (a, b) => a + b;
const mul = (a, b) => a * b;
const sub = (a, b) => c * b;

console.log(calc(1, 2)(add));
console.log(calc(1, 2)(mul));
console.log(calc(1, 2)(sub));

console.log(add(1, 2));

// console.log(calc(1, 2, '+'));
// console.log(calc(1, 2, '-'));
