import { create, all } from 'mathjs';

const config = {
  matrix: 'Array',
};

const math = create(all, config);

math.range(0, 4);

math.config({
  matrix: 'Matrix',
});

math.range(0, 4);

const bigmath = create(all, {
  number: 'BigNumber',
  precision: 32,
});

const dividir = bigmath.evaluate('1/3');

dividir;

// const config = {
//   epsilon: 1e-12,
//   matrix: 'Matrix',
//   number: 'number',
//   precision: 64,
//   predictable: false,
//   randomSeed: null,
// };

// const math = create(all, config);

// console.log(math.config());

// math.config({
//   number: 'BigNumber',
// });

const calc = ['1', 'x', '4', '+', '5'];

calc;

const setCalc = calc.join();

setCalc;

const index = calc.indexOf('x');

if (index !== -1) {
  calc[index] = '*';
}

calc;
const setCalcNew = calc.join('');
setCalcNew;
const multipl = math.evaluate(setCalcNew);

multipl;

console.log(typeof setCalcNew);

function calculo() {
  const soma = parseInt(setCalcNew);
  console.log(soma);
  return soma;
}
function multi(a, b) {
  return a * b;
}
console.log(calculo());

console.log(multi(2, 3));
console.log(2 * 3);
