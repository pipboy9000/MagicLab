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

ctx.fillRect(0, 0, width, height);

let angle = 0;

let minSegementLength = 30;
let randSegmentLength = 0;
let minJointRadius = 20;
let randJointRadius = 0;
let minJointAngle = 0.7853981634;
let randJointAngle = 0;
let colorChangeRate = 50;
let fade = 0.07;

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
    ctx.fillStyle = "rgba(0,0,0," + fade + ")";
    ctx.fillRect(-halfWidth + camPosX, -halfHeight + camPosY, width, height);
}

function drawNextSegment() {

    //turn off glow before drawing fade layer
    ctx.shadowColor = "transparent";

    fadeCanvas();

    let dist = minSegementLength + Math.random() * randSegmentLength;

    let hue = performance.now() / colorChangeRate % 360

    ctx.shadowBlur = 20;
    ctx.shadowColor = `hsl(${hue},70%,70%`;

    //next line point
    let nextX = x + Math.cos(angle) * dist;
    let nextY = y + Math.sin(angle) * dist;

    let nextAngle = angle + (Math.random() * randJointAngle) + minJointAngle;

    let cornerRad = Math.random() * randJointRadius + minJointRadius;

    //next joint center
    let cornerCenterX = nextX + (Math.cos(angle + Math.PI / 2)) * cornerRad;
    let cornerCenterY = nextY + (Math.sin(angle + Math.PI / 2)) * cornerRad;

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
    ctx.arc(cornerCenterX, cornerCenterY, cornerRad, angle - Math.PI / 2, nextAngle - Math.PI / 2, false);
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
    ctx.arc(cornerCenterX, cornerCenterY, cornerRad, angle - Math.PI / 2, nextAngle - Math.PI / 2, false);
    ctx.stroke();




    //set to arc endpoint
    x = cornerCenterX + Math.cos(nextAngle - Math.PI / 2) * cornerRad;
    y = cornerCenterY + Math.sin(nextAngle - Math.PI / 2) * cornerRad;

    angle = nextAngle;

    //move camera
    points.push({ x: nextX, y: nextY });
    if (points.length > 30) {
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

function render(d) {

    drawNextSegment();

    requestAnimationFrame(render);

    //decrease all randoms
    if (randJointAngle > 0) randJointAngle *= 0.975;
    if (randJointRadius > 0) randJointRadius *= 0.975;
    if (randSegmentLength > 0) randSegmentLength *= 0.975;

}

render();

//setters
export function setMinSegmentLength(val) {
    randSegmentLength = Math.abs(+val - minSegementLength) * 50;
    minSegementLength = +val;
}

export function setRandSegmentLength(val) {
    randSegmentLength = +val;
}

export function setMinJointRadius(val) {
    randJointRadius = Math.abs(+val - minJointRadius) * 50;
    minJointRadius = +val;
}

export function setRandJointRadius(val) {
    randJointRadius = +val;
}

export function setMinJointAngle(val) {
    randJointAngle = Math.abs(+val - minJointAngle) * 50;
    minJointAngle = +val;
}

export function setRandJointAngle(val) {
    randJointAngle = +val;
}

export function setColorChangeRate(val) {
    colorChangeRate = +val;
}

export function setFade(val) {
    fade = +val / 255;
}