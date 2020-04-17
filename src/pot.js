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

// ctx.fillRect(0, 0, width, height);

let angle = 0;
let color = 200;
let fade = 0.07;
let tranSpeed = 5;

let segLength = 0;
let targetSegLength = 0;
let randSegLength = 0;

let cornerRad = 0;
let targetTornerRad = 0;
let randCornerRad = 0;

let cornerAngle = 0;
let targetCornerAngle = 0;
let randCornerAngle = 0;


//start position
let startX = width / 2
let startY = height / 2;

let x = startX;
let y = startY;

//points to calculate center
let points = [];

//"cam"
var camPosX = startX;
var targetCamPosX = 300;

var camPosY = startY;
var targetCamPosY = 300;

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
    ctx.shadowColor = "transparent";

    fadeCanvas();

    let dist = segLength + Math.random() * randSegLength;

    let hue = color % 360;

    ctx.shadowBlur = 20;
    ctx.shadowColor = `hsl(${hue},70%,70%`;

    //next line point
    let nextX = x + Math.cos(angle) * dist;
    let nextY = y + Math.sin(angle) * dist;

    let nextAngle = angle + (Math.random() * randCornerAngle) + cornerAngle;

    let cRad = Math.random() * randCornerRad + cornerRad;

    //next joint center
    let cornerCenterX = nextX + (Math.cos(angle + Math.PI / 2)) * cRad;
    let cornerCenterY = nextY + (Math.sin(angle + Math.PI / 2)) * cRad;

    //outline
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
    if (x > width + 200 || x < -200 || y > height + 200 || y < -200) {
        x = startX;
        y = startY;
        angle = (Math.floor(Math.random() * 9) - 4) * 0.7853981634;
    }
}

function logState() {
    console.log('seg length: ' + segLength + ' |cornder rad: ' + cornerRad + ' |corner angle: ' + cornerAngle);
}

function render(d) {

    drawNextSegment();

    requestAnimationFrame(render);

    //decrease all randoms
    if (randCornerAngle > 0) randCornerAngle *= 0.975;
    if (randCornerRad > 0) randCornerRad *= 0.975;
    if (randSegLength > 0) randSegLength *= 0.975;

}

render();

//setters
export function setSegLength(val) {
    randSegLength = Math.abs(+val - segLength) * 10;
    segLength = +val;
    logState();
}

export function setCornerRad(val) {
    randCornerRad = Math.abs(+val - cornerRad) * 10;
    cornerRad = +val;
    logState();
}

export function setCornerAngle(val) {
    randCornerAngle = Math.abs(+val - cornerAngle) * 10;
    cornerAngle = +val;
    logState();
}

export function setColor(val) {
    color = +val;
}

export function setFade(val) {
    fade = +val / 255;
}