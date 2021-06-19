let height = 0;
let width = 0;

function resizingByCanvas() {
    height = window.innerHeight;
    width = window.innerWidth;

    //console.log( width, height);
}

resizingByCanvas();

function randomPosition() {
    let posX = Math.floor(Math.random() * width);
    let posY = Math.floor(Math.random() * height);

    //console.log (posX, posY);

    const pigeon = document.createElement('img');
    pigeon.src = './Img/pombo.png';
    pigeon.className = 'mainPigeon';
    pigeon.style.left = posX + 'px';
    pigeon.style.top = posY + 'px';
    pigeon.style.position = ("absolute")


    document.body.appendChild(pigeon);

}