console.log('Loops em JS \n');

const destino = new Array(
    'Brasil',
    'Itália',
    'Portugal'
)

console.log('Destinos possíveis:');
console.log(destino, '\n');

let contador = 0;
const lugar = 'Brasil';

while (contador < 3) {
    if (destino[contador] == lugar) {
        console.log('Destino disponível');
    } else {
        console.log('Destino indisponível');
    }
    contador++;
}