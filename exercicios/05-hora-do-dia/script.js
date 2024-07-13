function carregar(){

    const data = new Date();
    const hora = data.getHours();
    const texto = window.document.querySelector('p#texto');
    const img = window.document.getElementsByTagName('img')[0];

    if(hora >= 5 && hora < 12){
        texto.innerHTML = `Agora são ${hora} horas. <br> Bom dia!`;
        img.src = 'img/dia.png';
        document.body.style.background = '#f2e2ff';
    } else if(hora >= 12 && hora < 18){
        texto.innerHTML = `Agora são ${hora} horas. <br> Boa tarde!`;
        img.src = 'img/tarde.png';
        document.body.style.background = '#9fd9fe';
    } else if(hora >= 18 && hora <= 23){
        texto.innerHTML = `Agora são ${hora} horas. <br> Boa noite!`;
        img.src = 'img/noite.png';
        document.body.style.background = '#fff59e';
    } else{
        texto.innerHTML = `Agora são ${hora} horas. <br> Boa madrugada!`;
        img.src = 'img/madrugada.png';
        document.body.style.background = '#29dddc';
    }
}

//dia - #f2e2ff
//tarde - #9fd9fe
//noite - #fff59e
//madru - #29dddc
