const contar = window.document.getElementById('contar');

contar.addEventListener('mouseenter', entrar);
contar.addEventListener('mouseout', sair);
contar.addEventListener('click', clicar);

function entrar(){
    contar.style.boxShadow = '2px 2px 8px #0000003d';
}

function sair(){
    contar.style.boxShadow = 'none';
}

function clicar(){
    
    let inicio = window.document.getElementById('inicio');
    let fim = window.document.getElementById('fim');
    let passo = window.document.getElementById('passo');
    let result = window.document.querySelector('div#res');

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value < 1){ //verifica se os campos não estão vazios
        window.alert('[ERRO] Verifique os dados e tente novamente.');
    } else {
        let start = Number(inicio.value);
        let end = Number(fim.value);
        let step = Number(passo.value);

        result.innerHTML = `Contando: `;

        if (start < end) { // se o número inicial for menor que o final conta em ordem crescente
            for (let contador = start; contador <= end; contador += step) { 
                result.innerHTML += `${contador} `;
                if (contador + step <= end) { 
                    result.innerHTML += ` \u{2192} `; 
                }
            }
        } else { // se o número inicial for maior que o final conta em ordem decrescente
            for (let contador = start; contador >= end; contador -= step){
                result.innerHTML += `${contador} `;
                if (contador - step >= end) {
                    result.innerHTML += ` \u{2192} `;  
                }
            }
        }
    }
}