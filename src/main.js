import * as pot from './pot.js';
import * as recipe from './recipe.js';
import * as target from './target.js';
import { levels, addLevel } from './levels.js';
import './style.css';

function setSegLength(e) {
    pot.setSegLength(e.target.value);
}

function setCornerRad(e) {
    pot.setCornerRad(e.target.value);
}

function setCornerAngle(e) {
    pot.setCornerAngle(e.target.value);
}

function setColor(e) {
    pot.setColor(e.target.value);
}

function setFade(e) {
    pot.setFade(e.target.value);
}

function restart() {
    pot.restart();
    recipe.restart();
}

function addBlue() {
    if (recipe.full) return;
    pot.addBlue();
}
function addRed() {
    if (recipe.full) return;
    pot.addRed();
}
function addGreen() {
    if (recipe.full) return;
    pot.addGreen();
}

//input functions
function init() {
    document.getElementById("segLength").addEventListener('input', setSegLength);
    document.getElementById("cornerRad").addEventListener('input', setCornerRad);
    document.getElementById("cornerAngle").addEventListener('input', setCornerAngle);
    document.getElementById("color").addEventListener('input', setColor);
    document.getElementById("fade").addEventListener('input', setFade);
    document.getElementById("restart").addEventListener('mousedown', restart);
    document.getElementById("addBlue").addEventListener('mousedown', addBlue);
    document.getElementById("addRed").addEventListener('mousedown', addRed);
    document.getElementById("addGreen").addEventListener('mousedown', addGreen);
    document.getElementById("downloadCanvas").addEventListener('click', pot.download);

}

window.addEventListener('load', init);