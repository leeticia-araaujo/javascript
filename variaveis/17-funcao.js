console.log("Funções em JS \n");

function inpar(n) {
    if (n % 2 == 0) {
        return 'par';
    } else {
        return 'ímpar';
    }
}

/*let res = inpar(7);
console.log(res);*/

console.log('Par ou impar?');
console.log(inpar(7));

console.log("\n# \n");

function soma(n1 = 1, n2 = 1) { //parâmetros pré-definidos
    return n1 + n2;
}

console.log('Soma');
console.log(soma(2, 10));

console.log("\n# \n");

let variavel = function (x) {
    return x*2;
}

console.log('Multiplicação');
console.log(variavel(3));