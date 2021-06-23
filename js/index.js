//tamanho do cenario
let scenario = document.getElementById('scenario');
let height = scenario.offsetHeight;
let width = scenario.offsetWidth;
let lives = 1;
let time = 10;
let score = 0;

//cria posição aleatória 
function randomPosition() {

    //remove o pombo anterior (caso exista)
    if (document.getElementById('pigeon')) {
        document.getElementById('pigeon').remove();

        if(lives > 3) {
            window.location.href='game_over.html';
        }else {
            document.getElementById("life" + lives).src="/Img/coracao_vazio.png";
        }
        
        lives++;
    }

    let posX = Math.floor(Math.random() * ((width*0.8) - (width*0.1) + 1) + (width*0.1));
    let posY = Math.floor(Math.random() * height) - 90;

    posX = posX < 0 ? 0 : posX;
    posY = posY < 0 ? 0 : posY;

    // cria elemento html
    const pigeon = document.createElement('img');
    pigeon.src = '../Img/pombo.png';
    pigeon.className = randomSize() + ' ' + randomSide();
    pigeon.style.left = posX + 'px';
    pigeon.style.top = posY + 'px';
    pigeon.style.position = ("relative");
    pigeon.id = 'pigeon';
    pigeon.onclick = function() {
        this.remove();
    }


    scenario.appendChild(pigeon);

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
let pigeonBreeder = setInterval(function () {
    randomPosition();
  }, 2000);

let chronometer = setInterval(function(){
    
    time -= 1;
    
    if(time < 0) {
        clearInterval(chronometer);
        clearInterval (pigeonBreeder);
        window.location.href='victory _congratulations.html';
    }else {
        document.getElementById('chronometer').innerHTML = time;
}
}, 1000);

