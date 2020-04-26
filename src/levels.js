let levelsDiv = document.getElementById('levelsList');

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
    levelsDiv.innerHTML = "";

    levels.forEach((l, i) => {
        let item = document.createElement('div');
        item.classList.add('levelsItem');
        item.style.backgroundImage = "url(static/level_" + i + ".png)";
        levelsDiv.appendChild(item);
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
