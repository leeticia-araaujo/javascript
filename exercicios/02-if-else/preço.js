console.log("Comparando preços: ");

const saia = 487;
const orçamento = 352;

if(orçamento == 350){
    console.log("O orçamento é de R$350");
}else{
    if(orçamento > 350){
        console.log("O orçamento é maior que R$ 350"); 
    }else{
        console.log("O orçamento é menor que R$ 350");
    }
}

if(saia > orçamento){
    console.log(`A saia custa R$ ${saia}. O preço é maior que o orçamento \n`); 
}else{
    console.log(`A saia custa R$ ${saia}. O preço está dentro do orçamento \n`); 
}