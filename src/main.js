import * as pot from './pot.js';
import * as recipe from './recipe.js';
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
    pot.addBlue();
    recipe.add('blue');
}
function addRed() {
    pot.addRed();
    recipe.add('red');
}
function addGreen() {
    pot.addGreen();
    recipe.add('green');
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
}

window.addEventListener('load', init);