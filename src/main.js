import * as ui from './ui';
import * as pot from './pot.js';
import * as levels from './levels.js';
import { getLastPlayed } from './progress.js';

import './style.css';
import './inputRange.css';

function reset() {
    pot.reset();
    ui.reset();
}

//input functions
function init() {
    document.getElementById("levelsBtn").addEventListener('click', levels.show);
    document.getElementById("reset").addEventListener('mousedown', reset);

    let lp = getLastPlayed();

    pot.init();

    levels.loadLevel(lp.stageIdx, lp.levelIdx);

    // Creates a default tracker.
    ga('create', 'UA-76187604-22', 'auto');
}



window.addEventListener('load', init);