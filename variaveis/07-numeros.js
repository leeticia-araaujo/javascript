console.log("Formatando números");

var numero = 1550.52;

console.log(numero);

console.log(numero.toFixed(1)); // mostra X números depois da ,

console.log(numero.toFixed(1).replace('.' , ',')); // muda o . para ,

console.log(numero.toLocaleString('pt-BR', {style: 'currency', currency: "BRL"})); // mostra o número em reais