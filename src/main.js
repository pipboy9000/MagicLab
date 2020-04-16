import * as pot from './pot.js';
import './style.css';

function setMinSegmentLength(e) {
    pot.setMinSegmentLength(e.target.value);
}

function setRandSegmentLength(e) {
    pot.setRandSegmentLength(e.target.value);
}

function setColorChangeRate(e) {
    pot.setColorChangeRate(e.target.value);
}

function setFade(e) {
    pot.setFade(e.target.value);
}

function setMinJointRadius(e) {
    pot.setMinJointRadius(e.target.value);
}

function setRandJointRadius(e) {
    pot.setRandJointRadius(e.target.value);
}

function setMinJointAngle(e) {
    pot.setMinJointAngle(e.target.value);
}

function setRandJointAngle(e) {
    pot.setRandJointAngle(e.target.value);
}

//input functions
function init() {
    document.getElementById("minSegmentLength").addEventListener('input', setMinSegmentLength);
    // document.getElementById("randSegmentLength").addEventListener('input', setRandSegmentLength);
    document.getElementById("colorChangeRate").addEventListener('input', setColorChangeRate);
    document.getElementById("fade").addEventListener('input', setFade);
    document.getElementById("minJointRadius").addEventListener('input', setMinJointRadius);
    // document.getElementById("randJointRadius").addEventListener('input', setRandJointRadius);
    document.getElementById("minJointAngle").addEventListener('input', setMinJointAngle);
    // document.getElementById("randJointAngle").addEventListener('input', setRandJointAngle);
}

window.addEventListener('load', init);