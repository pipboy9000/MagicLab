import { loadNext, currentStage, currentLevel } from './levels.js';
import { setSegLength, setCornerRad, setCornerAngle } from './pot.js';
import { stages } from './levelsData';

let winDiv = document.getElementById('win');
let topHeart = winDiv.getElementsByClassName('top-heart')[0];
let ui = document.getElementById('ui');
let canvas = document.getElementById('canvas');
let target = document.getElementById('target');
let sliders = document.getElementById('sliders');

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

export function reset() {
    render(currentStage, currentLevel);
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

function render(stageIdx, levelIdx) {

    //target img
    target.style.backgroundImage = `url(static/stage${stageIdx}/level_${levelIdx}.png)`;

    //sliders
    sliders.innerHTML = "";

    stages[stageIdx].availableColors.forEach((color, idx) => {

        let d = document.createElement('div');
        d.className = "slider " + color;
        // <input type="range" min="0" max="6.2831" value="0.7853981634" step="0.001" id="cornerAngle"></input>
        let fillerDiv = document.createElement('div') // filler div
        let input = document.createElement('input');
        input.type = 'range';
        let i = document.createElement('i');

        switch (color) {
            case 'red':
                /* <input type="range" min="0" max="200" value="100" id="segLength"></input> */
                input.oninput = (e) => { setSegLength(e.target.value) };
                input.min = 0;
                input.max = 400;
                input.value = 0;
                i.className = "fas fa-star-of-life";
                break;

            case 'green':
                // </i><input type="range" min="1" max="200" value="20" id="cornerRad"></input>
                input.oninput = (e) => { setCornerRad(e.target.value) };
                input.min = 0;
                input.max = 400;
                input.value = 0;
                i.className = "fas fa-circle-notch";
                break;

            case 'blue':
                // <input type="range" min="0" max="6.2831" value="0.7853981634" step="0.001" id="cornerAngle"></input>
                input.oninput = (e) => { setCornerAngle(e.target.value) };
                input.min = 0;
                input.max = 6.2831;
                input.step = 0.001;
                input.value = Math.PI / 4;
                i.className = "fas fa-atom";
                break;
        }

        if (idx % 2 == 0) {
            d.appendChild(fillerDiv);
            d.appendChild(input);
            d.appendChild(i);
        } else {
            d.appendChild(i);
            d.appendChild(input);
            d.appendChild(fillerDiv);

        }

        sliders.appendChild(d);
    });
}

export function loadLevel(stageIdx, levelIdx) {
    if (showMsg) hideWin();
    openTarget();
    setTimeout(() => {
        closeTarget();
    }, 1500);
    render(stageIdx, levelIdx);
}

window.addEventListener('load', init);