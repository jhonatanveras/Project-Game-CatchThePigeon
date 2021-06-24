function gameStart() {
    let level = document.getElementById('level').value;
    if (level === '') {
        alert('Select a level to start the game');
        return false;
    }
    window.location.href = '/start-code/game_started.html?' + level;
}