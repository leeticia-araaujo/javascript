console.log("Trabalhando com listas");

const rio = `Rio de Janeiro`;
const sp = `São Paulo`;
const bh = `Belo Horizonte`;

console.log(`Destinos de viagem:`);
console.log(rio, sp, bh);

const destinos = new Array(
    `Salvador`,
    `Curitiba`,
    `Natal`
)

destinos.push(`Maceió`); //adiciona um item na lista

console.log(destinos);

destinos.splice(1,1); //tira um item na lista

console.log(destinos);

console.log(destinos [0], destinos [2]);