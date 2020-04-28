import * as pot from './pot.js';
import * as recipe from './recipe.js';
import * as ui from './ui.js';
import data from './levelsData';

let div = document.getElementById('levelSelect');
let listDiv = document.getElementById('levelsList');

export let levels = data;

export let currentLevel = 0;

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
    listDiv.innerHTML = "";

    levels.forEach((l, i) => {
        let item = document.createElement('div');
        item.classList.add('levelsItem');
        item.style.backgroundImage = "url(static/level_" + i + ".png)";
        item.onclick = () => {
            currentLevel = i;
            loadLevel(i);
            hide();
        };
        listDiv.appendChild(item);
    });
}

function init() {
    levels = data;
    render();
}

export function loadLevel(i) {
    pot.loadLevel(levels[i]);
    recipe.loadLevel(levels[i]);
    ui.loadLevel(i);
    currentLevel = i;
}

export function loadNext() {
    loadLevel((currentLevel + 1) % levels.length);
}

window.addEventListener('load', init);

export function show() {
    div.style.display = 'flex';
}

export function hide() {
    div.style.display = 'none';
}