console.log("Arrays ou Vetores \n");

let num = [6, 4, 8]; //cria um array com 3 elementos
num[3] = 2; // adiciona o número 2 na posição 3 criando mais um elemento
num.push(0); // adiciona o número 0 na última posição
//num.length mostra o tamanho do array

console.log(`${num}`); 
console.log(`O vetor tem ${num.length} posições`);  
console.log(`O valor ${num[0]} está na primeira posição`);

num.sort() // ordena em ordem crescente

console.log(`\nVetor em ordem crescente: ${num}\n`); 

/*for (let pos = 0; pos < num.length; pos++){
    console.log(num[pos]); 
}*/

for (let pos in num) {
    console.log(num[pos]);
}

let valor = num.indexOf(6); // busca em qual posição está o valor 6, se ele não for encontrado retorna -1

console.log(`\nO valor 6 está na posição ${valor}`);