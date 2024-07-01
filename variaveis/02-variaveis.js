console.log("Trabalhando com variáveis");

let nome = "Letícia";
let sobrenome = "Cristina";
const ano = 2024;

console.log("Exibe nome:", nome);
console.log("Exibe ano:", ano);

console.log("\nTrabalhando com atribuição de variáveis");

console.log("Exibe nome + sobrenome:", nome, sobrenome);
console.log("Exibe nome + sobrenome:", nome + " " + sobrenome);

console.log("Exibe nome+sobrenome:", nome + sobrenome);

console.log(`Meu nome é ${nome} ${sobrenome}`);
// a crase + ${} permite colocar uma variável dentro de um texto

nome = nome + sobrenome; 
// sobrescrevo o que está na variável nome

console.log("Exibe nome+sobrenome:", nome);

console.log("\nAtribuindo Variáveis");

let idade; //declarando variável
idade = 20; //atribuindo variável
idade = idade +1; //sobescreve

console.log("Exibe idade", idade);