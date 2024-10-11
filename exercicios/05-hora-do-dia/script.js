function carregar(){

    const data = new Date();
    const hora = data.getHours();
    const min = data.getMinutes();
    const texto = window.document.querySelector('p#texto');
    const img = window.document.getElementsByTagName('img')[0];

    let time = "";
    let minutes = "";

    if(hora != 1){
        time = "horas";
    } else{
        time = "hora";
    }

    if(min != 1){
        minutes = "minutos";
    } else{
        minutes = "minuto";
    }

    texto.innerHTML = `Agora são ${hora} ${time} e ${min} ${minutes}. <br>`;

    if(hora >= 5 && hora < 12){
        texto.innerHTML += `Bom dia!`;
        img.src = 'img/dia.png';
        document.body.style.background = '#f2e2ff';
    } else if(hora >= 12 && hora < 18){
        texto.innerHTML += `Boa tarde!`;
        img.src = 'img/tarde.png';
        document.body.style.background = '#9fd9fe';
    } else if(hora >= 18 && hora <= 23){
        texto.innerHTML += `Boa noite!`;
        img.src = 'img/noite.png';
        document.body.style.background = '#fff59e';
    } else{
        texto.innerHTML += `Boa madrugada!`;
        img.src = 'img/madrugada.png';
        document.body.style.background = '#29dddc';
    }
}

//dia - #f2e2ff
//tarde - #9fd9fe
//noite - #fff59e
//madru - #29dddc
