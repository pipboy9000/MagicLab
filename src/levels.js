import * as pot from './pot.js';
import * as recipe from './recipe.js';
import * as ui from './ui.js';
import { stages } from './levelsData';
import { isCompleted } from './progress';

let div = document.getElementById('levelSelect');
let listDiv = document.getElementById('levelsList');
let bg = document.querySelector('#levelSelect > div.bg');
let leftBtn = document.querySelector('#levelSelect > div.arrows > div#left');
let rightBtn = document.querySelector('#levelSelect > div.arrows > div#right');
let currentPage = 0;

export let currentStage;
export let currentLevel;

export let levels;

export function log() {
    console.log(levels);
}

export function addLevel(potions) {
    let l = potions.reduce((acc, color) => {
        if (acc[color]) {
            acc[color] += 1
        } else {
            acc[color] = 1
        }
        return acc;
    }, {})

    levels.push(l);

    save();

    render();
}

function render() {

    levels = stages[currentPage].levels;

    listDiv.innerHTML = "";
    levels.forEach((l, i) => {
        let item = document.createElement('div');
        item.classList.add('levelsItem');
        item.style.backgroundImage = `url(static/stage${currentPage}/level_${i}.png)`;
        if (!isCompleted(currentPage, i)) {
            item.style.webkitFilter = 'grayscale(1)'
        }
        item.onclick = () => {
            currentLevel = i;
            loadLevel(currentPage, i);
            hide();
        };
        listDiv.appendChild(item);
    });
}

function init() {

    levels = stages[0].levels;

    bg.onclick = () => {
        hide();
    }

    leftBtn.onclick = () => {
        if (currentPage > 0) {
            currentPage--;
            render();
        }
    }

    rightBtn.onclick = () => {
        if (currentPage < stages.length - 1) {
            currentPage++;
            render();
        }
    }
    render();
}

function preloadImages(stageIdx) {
    stages[stageIdx].levels.forEach((level, levelIdx) => {
        let img = document.createElement('img');
        img.src = `static/stage${stageIdx}/level_${levelIdx}.png`
    });
}

export function loadLevel(stageIdx, levelIdx) {

    //if we are in a new stage preload all the images for this stage and the next
    if (stageIdx != currentStage) {
        preloadImages(stageIdx);
        if (stageIdx < stages.length - 1) {
            preloadImages(stageIdx + 1)
        }
    }

    let stage = stages[stageIdx];

    levels = stage.levels;

    let level = stage.levels[levelIdx];

    pot.loadLevel(level, stage);
    recipe.loadLevel(level);
    ui.loadLevel(stageIdx, levelIdx);

    currentStage = stageIdx
    currentLevel = levelIdx;
    currentPage = currentStage;

    document.body.style.background = `radial-gradient(circle at center, hsl(${stage.color},91%, 18%), #030e16)`;

    render();
}

export function loadNext() {
    if (currentLevel < stages[currentStage].levels.length - 1) {
        loadLevel(currentStage, currentLevel + 1);
    } else if (currentStage < stages.length - 1) {
        loadLevel(currentStage + 1, 0);
    }
}

window.addEventListener('load', init);

export function show() {
    div.style.display = 'flex';
}

export function hide() {
    div.style.display = 'none';
}