import * as pot from './pot.js';
// import * as recipe from './recipe.js';
import * as levels from './levels.js';
import { getLastPlayed } from './progress.js';
import './style.css';

// function setSegLength(e) {
//     pot.setSegLength(e.target.value);
// }

// function setCornerRad(e) {
//     pot.setCornerRad(e.target.value);
// }

// function setCornerAngle(e) {
//     pot.setCornerAngle(e.target.value);
// }

// function setColor(e) {
//     pot.setColor(e.target.value);
// }

// function setFade(e) {
//     pot.setFade(e.target.value);
// }

function restart() {
    pot.restart();
    // recipe.restart();
}

//input functions
function init() {
    // document.getElementById("segLength").addEventListener('input', setSegLength);
    // document.getElementById("cornerRad").addEventListener('input', setCornerRad);
    // document.getElementById("cornerAngle").addEventListener('input', setCornerAngle);
    // document.getElementById("color").addEventListener('input', setColor);
    // document.getElementById("fade").addEventListener('input', setFade);
    // document.getElementById("downloadCanvas").addEventListener('click', pot.download);
    document.getElementById("levelsBtn").addEventListener('click', levels.show);
    document.getElementById("restart").addEventListener('mousedown', restart);

    let lp = getLastPlayed();

    levels.loadLevel(lp.stageIdx, lp.levelIdx);

    // Creates a default tracker.
    ga('create', 'UA-76187604-22', 'auto');
}

window.addEventListener('load', init);