let DB_VERSION = 0;
let progress;

function updateDb(from, to) {
    //for future use
}

function save() {
    localStorage.setItem('progress', JSON.stringify(progress));
}

function init() {
    progress = JSON.parse(localStorage.getItem('progress'));
    if (!progress) progress = {
        DB_VERSION
    };

    if (progress.DB_VERSION < DB_VERSION) {
        updateDb(progress.DB_VERSION, DB_VERSION);
    }

    save();
}

export function win(stageIdx, levelIdx) {
    progress[stageIdx + ' - ' + levelIdx] = true;
    save();
}

export function isCompleted(stageIdx, levelIdx) {
    return progress[stageIdx + ' - ' + levelIdx];
}

export function setLastPlayed(stageIdx, levelIdx) {
    let obj = { stageIdx, levelIdx };
    localStorage.setItem('lastPlayed', JSON.stringify(obj));
}

export function getLastPlayed() {
    let lp = localStorage.getItem('lastPlayed');
    if (!lp) {
        lp = { stageIdx: 0, levelIdx: 0 }
    } else {
        lp = JSON.parse(lp);
    }
    return lp;
}

init();
