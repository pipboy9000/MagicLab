import * as pot from './pot.js';
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

//input functions
function init() {
    document.getElementById("segLength").addEventListener('input', setSegLength);
    document.getElementById("cornerRad").addEventListener('input', setCornerRad);
    document.getElementById("cornerAngle").addEventListener('input', setCornerAngle);
    document.getElementById("color").addEventListener('input', setColor);
    document.getElementById("fade").addEventListener('input', setFade);
}

window.addEventListener('load', init);