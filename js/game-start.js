//tamanho do cenario
let scenario = document.getElementById('scenario');
let height = scenario.offsetHeight;
let width = scenario.offsetWidth;
let lives = 1;
let time = 17;
let score = 0;
let pigeonBreederTime = 1500;
localStorage.setItem("score", score);

let level = window.location.search;
level = level.replace('?', '');

if (level === 'medium') {
  pigeonBreederTime = 1500;
} else if (level === 'hard') {
  pigeonBreederTime = 1050;
} else if (level === 'ironhack') {
  pigeonBreederTime = 850;
}

//cria posição aleatória 
function randomPosition() {

  //remove o pombo anterior (caso exista)
  if (document.getElementById('pigeon')) {
    document.getElementById('pigeon').remove();

    if (lives > 3) {
      window.location.href = '/start-code/game_over.html';
    } else {
      document.getElementById("life" + lives).src = "../Img/medalha_vazia.png";
    }

    lives++;
  }

  let posX = Math.floor(Math.random() * ((width * 0.9) - (width * 0.1) + 1) + (width * 0.1));
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
  pigeon.onclick = function () {
    this.remove();
    score += 1;
    updateScore();
  };


  scenario.appendChild(pigeon);

}

function updateScore() {
  localStorage.setItem("score", score);
  document.getElementById('scores').innerHTML = score;

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
}, pigeonBreederTime);

let chronometer = setInterval(function () {

  time -= 1;

  if (time < 0) {
    clearInterval(chronometer);
    clearInterval(pigeonBreeder);
    window.location.href = '/start-code/victory_congratulations.html';
  } else {
    document.getElementById('chronometer').innerHTML = time;
  }
}, 1000);
