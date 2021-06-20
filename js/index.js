let height = 0;
let width = 0;

function resizingByCanvas() {
    height = window.innerHeight;
    width = window.innerWidth;

    console.log(width, height);
}

resizingByCanvas();


function randomPosition() {
    let posX = Math.floor(Math.random() * width) - 90;
    let posY = Math.floor(Math.random() * height) - 90;

    posX = posX < 0 ? 0 : posX
    posY = posY < 0 ? 0 : posY

    console.log(posX, posY);

    // cria elemento html
    const pigeon = document.createElement('img');
    pigeon.src = './Img/pombo.png';
    pigeon.className = randomSize();
    pigeon.style.left = posX + 'px';
    pigeon.style.top = posY + 'px';
    pigeon.style.position = ("absolute")


    document.body.appendChild(pigeon);
    randomSize();
}

function randomSize() {
    let classe = Math.floor(Math.random() * 3);
    
    switch(classe){
        case 0:
            return 'mainPigeon';

        case 1:
            return 'mainPigeon1';

        case 2:
            return 'mainPigeon2';     
                
    }
}

