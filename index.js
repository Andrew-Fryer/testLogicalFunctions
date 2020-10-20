
const values = [false, true];
const expand = l => values.map(v => l.map(a => [...a, v])).reduce((acc, cur) => [...acc, ...cur], []);
const generateArgs = n => n == 1 ? values.map(v => [v]) : expand(generateArgs(n-1));
const findUnequalBehaviour = (f, g, n) => generateArgs(n).map(args => f(...args) === g(...args) ? false : args).filter(x => !!x);

let f = (a, b) => !(a && b);
let g = (a, b) => !a || !b;
//console.log(findUnequalBehaviour(f, g, 2));


Object.assign(module.exports, {
  values,
  findUnequalBehaviour,
});
