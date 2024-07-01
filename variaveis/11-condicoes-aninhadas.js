console.log("Condições Aninhadas \n");

var idade = 76;

console.log(`Sua idade é ${idade} anos`);

if(idade < 16){ 
    console.log('Não vota');
} else {
    if(idade < 18 || idade > 65){ // se a idade não for menor que 16 significa que é maior ou igual 16
        console.log('Voto opcional');
    } else {
        console.log('Voto obrigatório');
    }
}

// outra opção de código 

if(idade < 16){
    console.log('Não vota');
} else if(idade < 18 || idade > 65){
    console.log('Voto opcional');
} else {
    console.log('Voto obrigatório');
}