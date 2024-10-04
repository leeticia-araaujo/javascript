const adicionar = window.document.querySelector('input#adc'); 
const finalizar = window.document.querySelector('input#fin');
const limpar = window.document.querySelector('input#limpar');
const num = window.document.getElementById('num');
const tabela = window.document.getElementById('tabela');
const res = window.document.getElementById('res');
let array = [];

adicionar.addEventListener('click', clique1);
finalizar.addEventListener('click', clique2);
limpar.addEventListener('click', clique3);

function numero(n) { //verifica se o valor está entre 1 e 100
    if (n >= 1 && n <= 100) {
        return true; //valor válido
    } else {
        return false; //valor inválido
    }
}

function lista(n, a) { //verifica se o valor já foi adicionado na lista
    if (a.indexOf(n) == -1) { 
        return true; //valor não encontrado 
    } else {
        return false; //valor já encontrado
    }
}

function clique1() { //botão de adicionar número
    const valor = Number(num.value);

    if (numero(valor) && lista(valor, array)) {
        array.push(valor);
        let item = document.createElement('option');
        item.text = `Valor ${valor} adicionado`;
        tabela.appendChild(item);
    } else {
        window.alert('[Erro] Valor inválido ou já adicionado, tente novamente.');
    }

    num.value = '';
    num.focus();
    res.innerHTML = '';
}

function clique2() { //botão de finalizar

    if (array.length == 0) {
        window.alert('Adicione um valor antes de finalizar.');
    } else {
        let maior = array[0];
        let menor = array[0];
        let soma = 0;

        for (let pos in array) {
            soma += array[pos];

            if (array[pos] > maior) {
                maior = array[pos];
            }
            if (array[pos] < menor) {
                menor = array[pos];
            }
        }

        if (array.length == 1) {
            res.innerHTML = `Foi adicionado apenas ${array.length} número <br> O menor e maior valor é ${maior}`;
        } else {
            res.innerHTML = `Foram adicionados ${array.length} números`; 
            res.innerHTML += `<br> O menor valor é ${menor}`;
            res.innerHTML += `<br> O maior valor é ${maior}`;
        }

        const media = soma / array.length;

        res.innerHTML += `<br> A soma dos números é ${soma}`;
        res.innerHTML += `<br> A media dos números é ${media}`;
        }
}

function clique3() { //botão de limpar
    tabela.innerHTML = '';
    res.innerHTML = '';
    num.value = '';
    num.focus();
    array = [];
}