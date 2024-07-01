console.log("Condições Aninhadas \n");

const horario = new Date();
const hora = horario.getHours();

console.log(`Agora são ${hora} horas`);

/*if(hora < 12){
    console.log('Bom dia!');
} else if(hora < 19){
    console.log('Boa tarde!');
} else{
    console.log('Boa noite!');
} */

if(hora >= 5 && hora < 12){
    console.log('Bom dia!');
} else if(hora >= 12 && hora < 19){
    console.log('Boa tarde!');
} else if(hora >= 19 && hora < 24){
    console.log('Boa noite!');
} else {
    console.log('Boa madrugada!');
}