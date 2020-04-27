import { loadNext } from './levels.js';

let winDiv = document.getElementById('win');
let ui = document.getElementById('ui');
let canvas = document.getElementById('canvas');
let target = document.getElementById('target');

export let showMsg = false;
export let targetOpen = false;

function openTarget() {
    target.classList.add('target-large');
    targetOpen = true;
}

function closeTarget() {
    target.classList.remove('target-large')
    targetOpen = false;
}

target.onmouseenter = () => {
    openTarget();
}


target.onmouseout = () => {
    closeTarget();
}

target.onclick = () => {
    if (targetOpen) {
        closeTarget();
    } else {
        openTarget();
    }
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
    target.classList.add('target-large');
    setTimeout(() => {
        target.classList.remove('target-large');
    }, 1500)
}

window.addEventListener('load', init);