const logicalness = require(".");

let f = (a, b) => !(a && b); 
logicalness.printTruthTable(f, 2);
let g = (a, b) => !a || !b; 
console.assert(logicalness.findUnequalBehaviour(f, g, 2).length === 0, "de morgan's");
g = () => true;
console.assert(logicalness.findUnequalBehaviour(f, g, 2).length === 1, "finds inequality");
