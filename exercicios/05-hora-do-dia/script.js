function carregar(){

    const texto = window.document.getElementById('texto');
    const img = window.document.getElementById('imagem');
    //const data = new Date();
    //const hora = data.getHours();

    hora = 15

    texto.innerHTML = `Agora são ${hora} horas.<br>`;

    if(hora > 4 && hora < 12){
        texto.innerHTML += `Bom dia!`;
        img.src = 'img/dia.png';
        document.body.style.background = '#80c0f5';
    } else if(hora >= 12 && hora < 18){
        texto.innerHTML += `Boa tarde!`;
        img.src = 'img/tarde.png';
        document.body.style.background = '#e3a262';
    } else{
        texto.innerHTML += `Boa noite!`;
        img.src = 'img/noite.png';
        document.body.style.background = '#1d454d';
    }
}