import { loadNext } from './levels.js';

let winDiv = document.getElementById('win');
let ui = document.getElementById('ui');
let canvas = document.getElementById('canvas');
let target = document.getElementById('target');

export let showMsg = false;

target.onmouseenter = () => {
    target.classList.add('target-large')
}


target.onmouseout = () => {
    target.classList.remove('target-large')
}

target.onclick = () => {
    target.classList.remove('target-large')
}

function init() {
    ui.style.width = canvas.clientWidth + "px";
    ui.style.height = canvas.clientHeight + "px";
}
export function win() {
    winDiv.style.display = 'flex';
    winDiv.onclick = () => { loadNext() }
    showMsg = true;
}

export function restart() {
    winDiv.style.display = 'none';
    showMsg = false;
}

export function loadLevel(i) {
    target.style.backgroundImage = `url(static/level_${i}.png)`;
}

window.addEventListener('load', init);