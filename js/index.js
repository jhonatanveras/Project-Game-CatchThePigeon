let height = 0;
let width = 0;

function resizingByCanvas () {
    height = window.innerHeight;
    width = window.innerWidth;
    
    console.log( width, height);
}

resizingByCanvas();

const posX = Math.floor(Math.random() * width);
const posY = Math.floor(Math.random() * height);

console.log (posX, posY);
