let winDiv = document.getElementById('win');
let ui = document.getElementById('ui');
let canvas = document.getElementById('canvas');

export let showMsg = false;

function init() {
    ui.style.width = canvas.clientWidth + "px";
    ui.style.height = canvas.clientHeight + "px";
}
export function win() {
    winDiv.style.display = 'flex';
    showMsg = true;
}

export function restart() {
    winDiv.style.display = 'none';
    showMsg = false;
}

window.addEventListener('load', init);