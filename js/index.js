let height = 0;
let width = 0;

    //tamanho do browser
function resizingByCanvas() {
    height = window.innerHeight;
    width = window.innerWidth;

    console.log(width, height);
}

resizingByCanvas();

    //cria posição aleatória 
function randomPosition() {

    //remove o pombo anterior (caso exista)
    if (document.getElementById('pigeon')) {
        document.getElementById('pigeon').remove();
    }
    
    let posX = Math.floor(Math.random() * width) - 90;
    let posY = Math.floor(Math.random() * height) - 90;

    posX = posX < 0 ? 0 : posX;
    posY = posY < 0 ? 0 : posY;

    console.log(posX, posY);

    // cria elemento html
    const pigeon = document.createElement('img');
    pigeon.src = './Img/pombo.png';
    pigeon.className = randomSize() + ' ' + randomSide();
    pigeon.style.left = posX + 'px';
    pigeon.style.top = posY + 'px';
    pigeon.style.position = ("absolute");
    pigeon.id = 'pigeon';


    document.body.appendChild(pigeon);

}

    //cria tamanhos aleatórios 
function randomSize() {
    let classe = Math.floor(Math.random() * 3);

    switch (classe) {
        case 0:
            return 'mainPigeon';

        case 1:
            return 'mainPigeon1';

        case 2:
            return 'mainPigeon2';

    }
}

    //cria lados aleatórios (direita lado A, esquerda lado B)
function randomSide() {
    let classe = Math.floor(Math.random() * 2);

    switch (classe) {
        case 0:
            return 'rightSide';

        case 1:
            return 'leftSide';

    }
}





