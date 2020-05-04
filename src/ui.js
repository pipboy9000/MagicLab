import { loadNext } from './levels.js';
import { addColor } from './pot.js';
import { stages } from './levelsData';

let winDiv = document.getElementById('win');
let topHeart = winDiv.getElementsByClassName('top-heart')[0];
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

winDiv.onclick = () => {
    loadNext();
}

function init() {
    ui.style.width = canvas.clientWidth + "px";
    ui.style.height = canvas.clientHeight + "px";
}
export function showWin() {

    winDiv.style.opacity = '1';

    topHeart.style.transform = 'translateY(-20px)';

    winDiv.style.pointerEvents = 'unset'

    showMsg = true;
}


export function hideWin() {

    winDiv.style.opacity = '0';

    topHeart.style.transform = '';

    winDiv.style.pointerEvents = 'none';

    showMsg = false;
}

export function loadLevel(stageIdx, levelIdx) {
    if (showMsg) hideWin();
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
        switch (color) {
            case 'red':
                i.className = "fas fa-star-of-life";
                break;

            case 'green':
                i.className = "fas fa-circle-notch";
                break;

            case 'blue':
                i.className = "fas fa-atom";
                break;

            case 'orange':
                i.className = "fab fa-quinscape";
                break;

        }

        b.appendChild(i);
        potionsDiv.appendChild(b);
    });

}

window.addEventListener('load', init);