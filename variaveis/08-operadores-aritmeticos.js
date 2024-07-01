console.log("Operadores Aritméticos");

const n1 = 5;
const n2 = 2;
const n3 = 3;

console.log(`Soma ${n1} + ${n2} = `, n1 + n2);
console.log(`Subtração ${n1} - ${n2} = `, n1 - n2);
console.log(`Multiplicação ${n1} * ${n2} = `, n1 * n2);
console.log(`Divisão ${n1} / ${n2} = `, n1 / n2);
console.log(`Resto da divisão ${n1} % ${n2} = `, n1 % n2);
console.log(`Potência ${n1} ** ${n2} = `, n1 ** n2);

console.log("\nUsando precedência");

console.log(`\n${n1} + ${n3} / ${n2}`);
console.log(n1 + n3 / n2);
console.log((n1 + n3) / n2);