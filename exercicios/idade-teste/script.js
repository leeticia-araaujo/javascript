const verificar = window.document.querySelector('input#clique');

verificar.addEventListener('click', clicar);
verificar.addEventListener('mouseenter', entrar);
verificar.addEventListener('mouseout', sair);

function entrar(){
    verificar.style.background = '#d35cf8';
    verificar.style.color = 'white';
}

function sair(){
    verificar.style.background = '#eadbfd';
    verificar.style.color = 'black';
}

function clicar(){

    const data = new Date();
    const anoatual = data.getFullYear();
    const anodoinput = window.document.querySelector('input#ano');
    const anoform = parseFloat(anodoinput.value);
    const res = window.document.getElementById('div3');

    if(Number.isInteger(anoform) && anoform >=0){ //verifica se é um número inteiro

        if(anodoinput.value.length == 0 || anoform > anoatual){
            window.alert('[ERRO] verifique os dados e tente novamente.');
        } else{
            
            const sex = window.document.getElementsByName('sex');
            const idade = anoatual - anoform;
            let genero = '';
            const img = document.createElement('img'); //cria uma tag <img> no html
            img.setAttribute('id', 'foto'); //coloca um id "foto" na tag <img>

            img.width = 200;
            img.height = 200;

            if(sex[0].checked){ //verifica se marcou a 1° opção
                genero = 'mulher';

                if(idade >= 0 && idade < 12){ //criança
                    img.setAttribute('src', 'img/chd-girl.png');
                } else if(idade < 18){ //jovem
                    img.setAttribute('src', 'img/teen-girl.png');
                } else if(idade < 60){ //adulta
                    img.setAttribute('src', 'img/adult-girl.png');
                } else{ //idosa
                    img.setAttribute('src', 'img/old-girl.png');
                }

            } 
            else{ //marcou a 2° opção
                genero = 'homem';

                if(idade >= 0 && idade < 12){ //chd
                    img.setAttribute('src', 'img/chd-boy.png');
                } else if(idade < 18){ //jovem
                    img.setAttribute('src', 'img/teen-boy.png');
                } else if(idade < 60){ //adulto
                    img.setAttribute('src', 'img/adult-boy.png');
                } else{
                    img.setAttribute('src', 'img/old-boy.png');
                }
            }

            res.innerHTML = `Identificamos ${genero} de ${idade} anos <br>`;
            res.appendChild(img); //adiciona um elemento
        }
    } 
    
    else{ //se o número não é inteiro
        window.alert('[ERRO] verifique os dados e tente novamente.');
    }
}