console.log("Trabalhando com condicionais");

const destinos = new Array(
    `França`, 
    `Estados Unidos`,
    `Argentina`
);

console.log("Opções de destinos:");
console.log(destinos);

const idadeCliente = 15;
const idadeAcompanhante = 12;
const passaporte = true;

/*if(idadeCliente >= 18){
    console.log("Cliente maior de idade");
    destinos.splice(0,1);
    console.log(destinos);
} else{
    if(idadeAcompanhante >= 18){
        console.log("Acompanhante maior de idade");
        destinos.splice(0,1);
        console.log(destinos);
    }
    else{
        console.log("Cliente menor de idade");
    }
}*/

if(idadeCliente >= 18 || idadeAcompanhante >= 18){
    console.log("Cliente maior de idade");
    destinos.splice(0,1);
    console.log(destinos);
} else{
        console.log("Cliente menor de idade");
    }

if(idadeCliente >= 18 || idadeAcompanhante >= 18 && passaporte){
    console.log("Tem passaporte, pode embarcar");
} else {
    console.log("Não tem passaporte, não pode embarcar");
}

console.log("\nOperadores Lógicos");
console.log(idadeCliente > 18); // maior que 
console.log(idadeCliente >= 18); // maior ou igual
console.log(idadeCliente < 18); // menor que 
console.log(idadeCliente <= 18); // menor ou igual 
console.log(idadeCliente == 18); // igual