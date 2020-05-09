import { loadNext, currentStage, currentLevel } from './levels.js';
import { setSegLength, setCornerRad, setCornerAngle, flashColor } from './pot.js';
import { stages } from './levelsData';

let winDiv = document.getElementById('win');
let topHeart = winDiv.getElementsByClassName('top-heart')[0];
let ui = document.getElementById('ui');
let canvas = document.getElementById('canvas');
let target = document.getElementById('target');
let slidersDiv = document.getElementById('sliders');
let sliders;

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
    snapSlidersTo(1, 1, Math.PI / 2);
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

function disableSliders() {
    Object.keys(sliders).forEach(color => {
        sliders[color].disabled = true;
    });
}

function enableSliders() {
    Object.keys(sliders).forEach(color => {
        sliders[color].disabled = false;
    });
}

export function snapSlidersTo(len, rad, ang) {
    let count = 0;

    disableSliders();

    let interval = setInterval(() => {
        Object.keys(sliders).forEach(color => {
            let slider = sliders[color];
            switch (color) {
                case 'red':
                    slider.valueAsNumber += (len - slider.valueAsNumber) / 5;
                    break;
                case 'green':
                    slider.valueAsNumber += (rad - slider.valueAsNumber) / 5;
                    break;
                case 'blue':
                    slider.valueAsNumber += (ang - slider.valueAsNumber) / 5;
                    break;
            }
        })

        count++;
        if (count > 20) {
            clearInterval(interval);
            enableSliders();
        }
    }, 15);
}

function checkWin() {

    let level = stages[currentStage].levels[currentLevel];

    let lenDiff = Math.abs(level.targetLength - sliders.red.value);
    let radDiff = Math.abs(level.targetRad - sliders.green.value);
    let angDiff = Math.abs(level.targetCornerAngle - sliders.blue.value);

    console.log(lenDiff, angDiff, radDiff)

    if (lenDiff < 25 && radDiff < 25 && angDiff < 0.3) {
        setSegLength(level.targetLength);
        setCornerRad(level.targetRad);
        setCornerAngle(level.targetCornerAngle);

        snapSlidersTo(level.targetLength, level.targetRad, level.targetCornerAngle);
        flashColor('white');

        setTimeout(showWin, 2000);
    }
}

function render(stageIdx, levelIdx) {

    //target img
    target.style.backgroundImage = `url(static/stage${stageIdx}/level_${levelIdx}.png)`;

    //sliders
    slidersDiv.innerHTML = "";
    sliders = {};

    stages[stageIdx].availableColors.forEach((color, idx) => {

        let d = document.createElement('div');
        d.className = "slider " + color;

        let input = document.createElement('input');
        input.type = 'range';
        input.onchange = () => { checkWin() };

        let fillerDiv = document.createElement('div') // filler div

        let i = document.createElement('i');

        switch (color) {
            case 'red':
                input.oninput = (e) => { setSegLength(e.target.value) };
                input.min = 1;
                input.max = 400;
                input.value = 0;
                i.className = "fas fa-star-of-life";
                sliders.red = input;
                break;

            case 'green':
                input.oninput = (e) => { setCornerRad(e.target.value) };
                input.min = 1;
                input.max = 400;
                input.value = 0;
                i.className = "fas fa-circle-notch";
                sliders.green = input;
                break;

            case 'blue':
                input.oninput = (e) => { setCornerAngle(e.target.value) };
                input.min = Math.PI / 2;
                input.max = 6.2831;
                input.step = 0.001;
                input.value = Math.PI / 2;
                i.className = "fas fa-atom";
                sliders.blue = input;
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

        slidersDiv.appendChild(d);
    });
}

export function loadLevel(stageIdx, levelIdx) {
    hideWin();
    openTarget();
    setTimeout(() => {
        closeTarget();
    }, 1500);
    render(stageIdx, levelIdx);
}

window.addEventListener('load', init);