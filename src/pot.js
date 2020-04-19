let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");

let width = canvas.width;
let height = canvas.height;
let halfWidth = width / 2;
let halfHeight = height / 2;

ctx.fillStyle = "black"
ctx.strokeStyle = "#29ff7e"
ctx.lineWidth = 10;
ctx.lineCap = 'round';

let angle = 0;
let color = 200;
let fade = 0.07;
let tranSpeed = 100;

//segment length
let length = 0;
let targetLength = 0;
let randLength = 0;

//corner radius
let rad = 0;
let targetRad = 0;
let randRad = 0;

//corner angle
let cornerAngle = 1;
let targetCornerAngle = 0;
let randCornerAngle = 0;


//start position
let startX = 320;
let startY = 350;

let x = startX;
let y = startY;

//points to calculate center
let points = [];

//"cam"
let camPosX = startX;
let targetCamPosX = startX;

let camPosY = startY;
let targetCamPosY = startY;

let active = true;

function gameOver() {
    active = false;
}

export function restart() {
    active = true;
    x = startX;
    y = startY;

    angle = 0;
    color = 200;
    fade = 0.07;

    length = 5;
    targetLength = 5;
    randLength = 0;

    rad = 1;
    targetRad = 1;
    randRad = 0;

    cornerAngle = 1.5707963267948966192313216916398;
    targetCornerAngle = 1.5707963267948966192313216916398;
    randCornerAngle = 0;

    resetCam();

    flashColor("white")
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
    ctx.arc(x, y, 15, 0, Math.PI * 2);
    ctx.stroke();
}

function setCamPos(x, y) {
    targetCamPosX = x;
    targetCamPosY = y;
}

function centerCanvas() {
    let dx = (targetCamPosX - camPosX) / 4;
    let dy = (targetCamPosY - camPosY) / 4;

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

    // console.log(avg);

    return avg;
}

function fadeCanvas() {
    // ctx.fillStyle = "rgba(0,0,0," + fade + ")";
    // ctx.fillRect(-halfWidth + camPosX, -halfHeight + camPosY, width, height);

    ctx.save();
    ctx.globalAlpha = fade;
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = '#FFF';
    ctx.fillRect(-halfWidth + camPosX, -halfHeight + camPosY, width, height);
    ctx.restore();

}

function drawNextSegment() {

    //turn off glow before drawing fade layer
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

    //outline
    let hue = color % 360;
    ctx.shadowBlur = 20;
    ctx.shadowColor = `hsl(${hue},70%,70%`;
    ctx.strokeStyle = `hsl(${hue},100%,50%`;;
    ctx.lineWidth = 15;

    //line outline
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(nextX, nextY);
    ctx.stroke();

    //joint outline
    ctx.beginPath();
    ctx.arc(cornerCenterX, cornerCenterY, cRad, angle - Math.PI / 2, nextAngle - Math.PI / 2, false);
    ctx.stroke();

    ctx.lineWidth = 10;
    ctx.strokeStyle = "white";

    //line
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(nextX, nextY);
    ctx.stroke();

    //joint
    ctx.beginPath();
    ctx.arc(cornerCenterX, cornerCenterY, cRad, angle - Math.PI / 2, nextAngle - Math.PI / 2, false);
    ctx.stroke();

    //set to arc endpoint
    x = cornerCenterX + Math.cos(nextAngle - Math.PI / 2) * cRad;
    y = cornerCenterY + Math.sin(nextAngle - Math.PI / 2) * cRad;

    angle = nextAngle;

    //move camera
    points.push({ x: nextX, y: nextY });
    if (points.length > 15) {
        points.shift();
    }

    let avg = avgPoints();
    setCamPos(avg.x, avg.y);
    drawPoint(avg.x, avg.y)
    centerCanvas();

    //reset when off screen
    if (x > width + 50 || x < -50 || y > height + 50 || y < -50) {
        // x = startX;
        // y = startY;
        // angle = (Math.floor(Math.random() * 9) - 4) * 0.7853981634;
        gameOver();
    }
}

function logState() {
    console.log('seg length: ' + length + ' |cornder rad: ' + rad + ' |corner angle: ' + cornerAngle);
}

function render(d) {

    drawNextSegment();

    requestAnimationFrame(render);

    let dAngle = (targetCornerAngle - cornerAngle) / tranSpeed;
    cornerAngle += dAngle;
    randCornerAngle = Math.abs(dAngle * 20);

    let dRad = (targetRad - rad) / tranSpeed;
    rad += dRad;
    randRad = Math.abs(dRad * 10);

    let dLength = (targetLength - length) / tranSpeed;
    length += dLength;
    randLength = Math.abs(dLength * 10);

}



render();

//setters
export function setSegLength(val) {
    length = targetLength;
    targetLength = +val;
    logState();
}

export function setCornerRad(val) {
    rad = targetRad;
    targetRad = +val;
    logState();
}

export function setCornerAngle(val) {
    cornerAngle = targetCornerAngle;
    targetCornerAngle = +val;
    logState();
}

export function setColor(val) {
    color = +val;
}

export function setFade(val) {
    fade = +val / 255;
}

function flashColor(c) {
    switch (c) {
        case 'blue':
            ctx.save();
            ctx.fillStyle = '#aaf2';
            ctx.fillRect(-halfWidth + camPosX, -halfHeight + camPosY, width, height);
            ctx.restore();
            break;

        case 'green':
            ctx.save();
            ctx.fillStyle = '#afa2';
            ctx.fillRect(-halfWidth + camPosX, -halfHeight + camPosY, width, height);
            ctx.restore();
            break;

        case 'red':
            ctx.save();
            ctx.fillStyle = '#faa2';
            ctx.fillRect(-halfWidth + camPosX, -halfHeight + camPosY, width, height);
            ctx.restore();
            break;

        case 'white':
            ctx.save();
            ctx.fillStyle = '#fff8';
            ctx.fillRect(-halfWidth + camPosX, -halfHeight + camPosY, width, height);
            ctx.restore();
            break;
    }
}

//potion buttons
export function addBlue() {
    setSegLength(targetLength + 100);
    flashColor("blue");
}

export function addRed() {
    setCornerRad(targetRad + 50);
    flashColor("red");
}


export function addGreen() {
    setCornerAngle(targetCornerAngle + Math.PI / 8)
    flashColor("green");
} 
