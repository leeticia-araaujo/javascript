const verificar = window.document.getElementsByClassName('input')[1];

verificar.addEventListener('mouseenter', entrar);
verificar.addEventListener('mouseout', sair);
verificar.addEventListener('click', clicar);

function entrar(){
    verificar.style.background = '#005CC8';
    verificar.style.color = 'white';
}

function sair(){
    verificar.style.background = '#f5f5f5';
    verificar.style.color = 'black';
}

function clicar(){
    let data = new Date();
    let anoatual = data.getFullYear();
    let anoform = window.document.getElementById('ano');
    let res = window.document.querySelector('div#res');

    if(anoform.value.length == 0 || anoform.value > anoatual || anoform.value < anoatual -200){ // ano.value.length == 0 verifica se a caixa está vazia
        window.alert('[ERRO] Verifique os dados e tente novamente.');
    } else {
        let sex = window.document.getElementsByName('sex');
        let idade = anoatual - Number(anoform.value); 
        let genero = '';
        let img = document.createElement('img'); // cria uma tag img no html 
        img.setAttribute('id', 'foto'); // coloca o id "foto" na tag criada 

        if(sex[0].checked){
            genero = 'Mulher';
            if(idade >= 0 && idade < 10){
                //criança mulher
                document.body.style.background = '#79b7e8';
                img.setAttribute('src', 'img/chd-girl.png');
            } else if(idade < 18){
                //jovem mulher
                document.body.style.background = '#e69151';
                img.setAttribute('src', 'img/teen-girl.png');
            } else if(idade < 60){
                //adulta mulher
                document.body.style.background = '#fcb6b8';
                img.setAttribute('src', 'img/adult-girl.png');
            } else{
                //idosa mulher
                document.body.style.background = '#899ebb';
                img.setAttribute('src', 'img/old-girl.png');
            }
        }else{
            genero = 'Homem';
            if(idade>=0 && idade <12){
                //criança
                document.body.style.background = '#578ea2';
                img.setAttribute('src', 'img/chd-boy.png');
            } else if(idade < 18){
                //jovem
                document.body.style.background = '#aa8990';
                img.setAttribute('src', 'img/teen-boy.png');
            } else if(idade < 60){
                //adulto
                document.body.style.background = '#d69496';
                img.setAttribute('src', 'img/adult-boy.png');
            } else{
                //idoso
                document.body.style.background = '#3a94b6';
                img.setAttribute('src', 'img/old-boy.png');
            }
        }

        res.style.textAlign = 'center';
        res.innerHTML = `Identificamos ${genero} de ${idade} anos.`;
        res.appendChild(img); //adiciona um elemento
    }
}