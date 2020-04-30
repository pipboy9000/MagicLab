import { loadNext } from './levels.js';
import { addColor } from './pot.js';
import { stages } from './levelsData';

let winDiv = document.getElementById('win');
let ui = document.getElementById('ui');
let canvas = document.getElementById('canvas');
let target = document.getElementById('target');
let potionsDiv = document.getElementById('potions');

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
    winDiv.onclick = () => {
        loadNext();
    }

    winDiv.ondblclick = () => {
        loadNext();
    }
    showMsg = true;
}

export function restart() {
    winDiv.style.display = 'none';
    showMsg = false;
}

export function loadLevel(stageIdx, levelIdx) {
    restart();
    target.style.backgroundImage = `url(static/stage${stageIdx}/level_${levelIdx}.png)`;
    target.classList.add('target-large');
    setTimeout(() => {
        target.classList.remove('target-large');
    }, 1500);

    //render
    potionsDiv.innerHTML = "";
    stages[stageIdx].availableColors.forEach(color => {
        let b = document.createElement('button');
        b.className = 'potion ' + color;
        b.onclick = () => { addColor(color) };

        let i = document.createElement('i');
        i.className = 'fas fa-vial';

        b.appendChild(i);
        potionsDiv.appendChild(b);
    });

}

window.addEventListener('load', init);