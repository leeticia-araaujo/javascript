const botao = window.document.getElementById('btn');

botao.addEventListener('mouseenter', entrar);
botao.addEventListener('mouseout', sair);
botao.addEventListener('click', clicar);

function entrar() {
    botao.style.background = '#bebcfdc4';
}

function sair() {
    botao.style.background = 'white'; 
}

function clicar() {
    const num = window.document.querySelector('input#num');
    const numero = parseFloat(num.value)
    const res = window.document.querySelector('p#res');

    if (Number.isInteger(numero) && num.value.length != 0) {//verifica se é um número inteiro e se o campo está preenchido
        res.innerHTML = `Tabuada de multiplicação do número ${numero} <br>`; 
        res.innerHTML += ` <br>`; 
        
        for (let contador = 0; contador <= 10; contador++){
            res.innerHTML += `${numero} x ${contador} = ${numero * contador} <br>`;
        }

    } else {
        window.alert('[ERRO] Verifique os dados e tente novamente. Por favor, insira um número inteiro.');
    }
}   