function gameStart() {
    let level = document.getElementById('level').value;
    if (level === '') {
        alert('Select a level to start the game');
        return false;
    }
    window.location.href = '/game_started.html?' + level;
}

document.getElementById('letPlay').addEventListener("click", function(){
    document.getElementById('accordionExample').hidden = true;
    document.getElementById('scenatioGame').hidden = false;
});