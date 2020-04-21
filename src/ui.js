let msg = document.getElementById('msg');
let ui = document.getElementById('ui');
let canvas = document.getElementById('canvas');

function init() {
    ui.style.width = canvas.clientWidth + "px";
    ui.style.height = canvas.clientHeight + "px";
}
export function win() {
    msg.innerHTML = '<i class="fas fa-heart"></i>';
}

export function restart() {
    msg.innerHTML = '';
}

window.addEventListener('load', init);