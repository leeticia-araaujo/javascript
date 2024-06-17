console.log("Operadores ternários:");

const nota1 = 10;
const nota2 = 7;

const media = (nota1 + nota2) / 2;

console.log("Status:", media >= 7 ? "Aprovado" : "Reprovado");

console.log("\nSe a nota 01 dividido por 2 for maior ou igual a 4 você recebe +1, se não recebe +0");
 
const extra = nota1 / 2 >= 4 ? 1 : 0;

console.log(`Extra adicionado: +${extra}`);