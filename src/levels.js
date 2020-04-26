import { loadLevel } from './main';

let div = document.getElementById('levelSelect');
let listDiv = document.getElementById('levelsList');

export let levels;

let currentLevel = 0;

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
            loadLevel(i, levels[i]);
            hide();
        };
        listDiv.appendChild(item);
    });
}

function save() {
    localStorage.setItem('levels', JSON.stringify(levels));
}

function load() {
    levels = localStorage.getItem('levels');
    if (levels) {
        levels = JSON.parse(levels)
    }
    else {
        levels = [];
    }
    render();
}

load();

export function show() {
    div.style.display = 'flex';
}

export function hide() {
    div.style.display = 'none';
}