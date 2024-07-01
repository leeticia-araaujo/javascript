console.log('Condições Aninhadas \n');

const vel = 10;

console.log('Velocidade máxima da pista: 60 km/h');
console.log('Velocidade minima da pista: 30 km/h');
console.log(`\nSua velocidade é de ${vel} Km/h`);

if(vel > 60){
    console.log('Você está acima do limite de velocidade');
} else if(vel < 30){
    console.log('Você está abaixo do limite de velocidade');
} else{
    console.log('Você está dentro do limite de velocidade');
}
