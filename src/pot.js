// import * as recipe from './recipe.js';
// import { stages } from './levelsData.js';
// import { currentLevel, currentStage, levels, levelWin } from './levels.js';
// import * as progress from './progress';

import * as ui from './ui.js'

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");

let width = canvas.width;
let height = canvas.height;
let halfWidth = width / 2;
let halfHeight = height / 2;

ctx.fillStyle = "black"
ctx.strokeStyle = "#29ff7e"
ctx.lineWidth = 5;
ctx.lineCap = 'round';

let angle = 0;
let color = 20;
let fade = 0.04;
let tranSpeed = 30;

//segment length
let length;
let targetLength;
let randLength;

//corner radius
let rad;
let targetRad;
let randRad;

//corner angle
let cornerAngle;
let targetCornerAngle;
let randCornerAngle;


//start position
let startX = 320;
let startY = 350;

let x = startX;
let y = startY;

//points to calculate center
let points = [];
let flowerPoints = [];

//"cam"
let camPosX = startX;
let targetCamPosX = startX;

let camPosY = startY;
let targetCamPosY = startY;

let active = true;
let win = false;

let targetPotion = {};

export function download() {
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.href = canvas.toDataURL();
    a.download = 'target-potion.png';
    a.click();
    document.body.removeChild(a);
}

function checkWin() {
    if (win) return;

    let dLength = Math.abs(targetPotion.targetLength - targetLength) / targetPotion.targetLength;
    let dRad = Math.abs(targetPotion.targetRad - targetRad) / targetPotion.targetRad;
    let dAngle = Math.abs(targetPotion.targetCornerAngle - targetCornerAngle) / targetPotion.targetCornerAngle;

    if (dLength == 0 && dRad == 0 && dAngle == 0) {
        win = true;
    }

    fade = (dLength + dRad + dAngle) / 3

    fade = Math.min(Math.max(fade, 0.05), 0.95);
}

export function reset() {
    win = false;
    active = true;
    x = startX;
    y = startY;

    angle = 0;
    fade = 0.05;

    length = 1;
    targetLength = 1;
    randLength = 0;

    rad = 1;
    targetRad = 1;
    randRad = 0;

    cornerAngle = 1.5707963267948966192313216916398;
    targetCornerAngle = 1.5707963267948966192313216916398;
    randCornerAngle = 0;

    resetCam();

    flashColor("white");
}

function resetCam() {
    targetCamPosX = startX;
    targetCamPosY = startY;

    camPosX = startX;
    camPosY = startY;
    ctx.setTransform(
        1,
        0,
        0,
        1,
        -camPosX + halfWidth,
        -camPosY + halfHeight
    );
}

function drawPoint(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.stroke();
}

function setCamPos(x, y) {

    targetCamPosX = x;
    targetCamPosY = y;
}

function centerCanvas() {
    let dx = (targetCamPosX - camPosX) / 10;
    let dy = (targetCamPosY - camPosY) / 10;

    //how much do we move?
    let d = Math.sqrt(dx * dx + dy * dy);
    if (d < 1) return;

    camPosX += dx;
    camPosY += dy;

    ctx.setTransform(
        1,
        0,
        0,
        1,
        -camPosX + halfWidth,
        -camPosY + halfHeight
    );
}

function avgPoints() {
    let avg = points.reduce((acc, p, i) => {
        acc.x += p.x;
        acc.y += p.y;
        return acc;
    }, { x: 0, y: 0 });

    avg.x /= points.length;
    avg.y /= points.length;

    return avg;
}

function fadeCanvas() {
    ctx.save();
    ctx.globalAlpha = fade;
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = '#000';
    ctx.fillRect(-halfWidth + camPosX, -halfHeight + camPosY, width, height);
    ctx.restore();

}

function drawNextSegment() {

    fadeCanvas();

    if (!active) return;

    //next line point
    let dist = length + Math.random() * randLength;
    let nextX = x + Math.cos(angle) * dist;
    let nextY = y + Math.sin(angle) * dist;

    let nextAngle = angle + (Math.random() * randCornerAngle) + cornerAngle;

    let cRad = Math.random() * randRad + rad;

    //next joint center
    let cornerCenterX = nextX + (Math.cos(angle + Math.PI / 2)) * cRad;
    let cornerCenterY = nextY + (Math.sin(angle + Math.PI / 2)) * cRad;

    flowerPoints.push({ x: cornerCenterX, y: cornerCenterY });
    if (flowerPoints.length > 10) {
        flowerPoints.shift();
    }

    let hue = color;

    let grad1 = ctx.createLinearGradient(x, y, nextX, nextY);
    grad1.addColorStop(0, `hsla(${hue},100%,100%,${(1 - fade) * 85}%)`);
    grad1.addColorStop(1, '#fff');


    //outline
    ctx.shadowBlur = 15;
    ctx.shadowColor = `hsla(${hue},80%,50%,${(1 - fade * 10) * 100}%)`;
    console.log(ctx.shadowColor);
    ctx.strokeStyle = grad1;
    ctx.lineWidth = 7;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(nextX, nextY);
    ctx.stroke();

    //joint outline
    ctx.beginPath();
    ctx.arc(cornerCenterX, cornerCenterY, cRad, angle - Math.PI / 2, nextAngle - Math.PI / 2, false);
    ctx.stroke();

    // let grad2 = ctx.createLinearGradient(x, y, nextX, nextY);
    // grad2.addColorStop(0, `hsla(${Math.floor(performance.now() / 100) % 360}, 100%, 50%, ${1 - fade}%)`);
    // grad2.addColorStop(1, 'white');

    // // //line
    // ctx.lineWidth = 5;
    // ctx.strokeStyle = grad2;
    // ctx.beginPath();
    // ctx.moveTo(x, y);
    // ctx.lineTo(nextX, nextY);
    // ctx.stroke();

    // //joint
    // ctx.beginPath();
    // ctx.arc(cornerCenterX, cornerCenterY, cRad, angle - Math.PI / 2, nextAngle - Math.PI / 2, false);
    // ctx.stroke();

    //set to arc endpoint
    x = cornerCenterX + Math.cos(nextAngle - Math.PI / 2) * cRad;
    y = cornerCenterY + Math.sin(nextAngle - Math.PI / 2) * cRad;

    points.push({ x, y });
    if (points.length > 70) {
        points.shift();
    }

    angle = nextAngle;

    //move camera
    points.push({ x: nextX, y: nextY });
    if (points.length > 70) {
        points.shift();
    }

    let avg = avgPoints();
    setCamPos(avg.x, avg.y);
    // drawPoint(avg.x, avg.y)

    centerCanvas();

    //reset when off screen
    if (x > width + 200 || x < -200 || y > height + 200 || y < -200) {
        ui.reset();
        reset();
    }

    //draw flower points
    // let i = performance.now();
    // while (i < flowerPoints.length - 1) {

    //     //line brightness is determined by length, the shorter the brighter
    //     let p1 = flowerPoints[i];
    //     let p2 = flowerPoints[i + 1];
    //     let l = Math.sqrt(Math.pow((p2.y - p1.y), 2) + Math.pow((p2.x - p1.x), 2));
    //     l = Math.floor(l / width * 2 * 15);

    //     ctx.strokeStyle = '#ffff';// + l.toString(16)
    //     ctx.beginPath();
    //     ctx.moveTo(p1.x, p1.y);
    //     ctx.lineTo(p2.x, p2.y);
    //     ctx.stroke();

    //     i++;

    //     //draw random circle on point
    //     ctx.fillStyle = '#fff' + parseInt(Math.floor(Math.random() * 16), 16);
    //     ctx.beginPath();
    //     ctx.arc(p2.x, p2.y, 5, 0, Math.PI * 2);
    //     ctx.fill();
    // }
}

export function loadLevel(level, stage) {
    targetPotion = level;
    color = stage.color;
    reset();
}

// function logState() {
//     console.log('seg length: ' + targetLength + ' |cornder rad: ' + targetRad + ' |corner angle: ' + targetCornerAngle);
// }

function render(d) {

    drawNextSegment();

    requestAnimationFrame(render);

    let dAngle = (targetCornerAngle - cornerAngle) / tranSpeed;
    cornerAngle += dAngle;
    randCornerAngle = Math.abs(dAngle * 20);
    if (dAngle < 0.0005) cornerAngle = targetCornerAngle;

    let dRad = (targetRad - rad) / tranSpeed * 2;
    rad += dRad;
    randRad = Math.abs(dRad * 10);
    if (dRad < 0.02) rad = targetRad;

    let dLength = (targetLength - length) / tranSpeed * 2;
    length += dLength;
    randLength = Math.abs(dLength * 10);
    if (dLength < 0.1) length = targetLength;

    // let sattled = cornerAngle === targetCornerAngle && rad === targetRad && length === targetLength;
}

//setters
export function setSegLength(val) {
    console.log(val);
    targetLength = +val;
}

export function setCornerRad(val) {
    console.log(val);
    targetRad = +val;
}

export function setCornerAngle(val) {
    console.log(val);
    targetCornerAngle = +val;
}

export function setColor(val) {
    color = +val;
}

export function setFade(val) {
    fade = val
}

export function flashColor(c) {

    ctx.save();

    switch (c) {
        case 'blue':
            ctx.fillStyle = '#aaf3';
            break;

        case 'green':
            ctx.fillStyle = '#afa3';
            break;

        case 'red':
            ctx.fillStyle = '#faa3';
            break;

        case 'white':
            ctx.fillStyle = '#fff8';
            break;

        case 'orange':
            ctx.fillStyle = '#faf3';
    }
    ctx.fillRect(-halfWidth + camPosX, -halfHeight + camPosY, width, height);
    ctx.restore();
}


//potion buttons
// export function addRed() {
//     if (recipe.full) return;
//     setSegLength(targetLength + 100);
//     recipe.add('red');
//     flashColor('red');
//     checkWin();
// }

// export function addGreen() {
//     if (recipe.full) return;
//     setCornerRad(targetRad + 50);
//     recipe.add('green');
//     flashColor('green');
//     checkWin();
// }

// export function addBlue() {
//     if (recipe.full) return;
//     setCornerAngle(targetCornerAngle + Math.PI / 7)
//     flashColor('blue');
//     recipe.add('blue');
//     checkWin();
// }

// export function addOrange() {

//     if (recipe.full) return;

//     recipe.add('orange');

//     //this potion multipplies potions already in the mix
//     let reduce = recipe.potions.reduce((acc, color) => {
//         if (!acc[color]) {
//             acc[color] = 1;
//         } else {
//             acc[color] += 1
//         }

//         return acc;
//     }, {});

//     let selfMul = reduce.orange;

//     if (reduce.red) {
//         setSegLength(targetLength + selfMul * reduce.red * 100);
//     }

//     if (reduce.green) {
//         setCornerRad(targetRad + selfMul * reduce.green * 50);
//     }

//     if (reduce.blue) {
//         setCornerAngle(targetCornerAngle + selfMul * reduce.blue * Math.PI / 7)
//     }

//     checkWin();
// }

// export function addColor(color) {
//     if (recipe.full) return;
//     switch (color) {
//         case 'red':
//             addRed();
//             break;
//         case 'green':
//             addGreen();
//             break;
//         case 'blue':
//             addBlue();
//             break;
//         case 'orange':
//             addOrange();
//             break;
//     }
// }

export function init() {
    reset();
    render();
}