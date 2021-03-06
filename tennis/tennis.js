"use strict";

let startButton = document.createElement("button");
let scoreTable = document.createElement("input");
let field = document.createElement("div");
let verticalLine = document.createElement("div");
let horisontLine = document.createElement("div");
let rocket1 = document.createElement("div");
let rocket2 = document.createElement("div");
let ball = document.createElement("div");
let timerRoket1 = 0;
let timerRoket2 = 0;
let speed = 6;
let repeate = 20;
let body = document.body;
body.onload = function () {
    startButton.style.width = "100px";
    startButton.style.height = "20px";
    startButton.style.position = "absolute";
    startButton.style.left = "30px";
    startButton.style.top = "5px";
    startButton.id = "start";
    startButton.innerHTML = "СТАРТ";

    scoreTable.style.width = "50px";
    scoreTable.style.height = "15px";
    scoreTable.style.position = "absolute";
    scoreTable.style.left = "305px";
    scoreTable.style.top = "5px";
    scoreTable.style.textAlign = "center";
    scoreTable.style.fontWeight = "bold";
    scoreTable.id = "score";
    scoreTable.value = "0:0";

    field.style.width = "600px";
    field.style.height = "400px";
    field.style.backgroundColor = "yellow";
    field.style.position = "absolute";
    field.style.left = "30px";
    field.id = "field";
    field.style.top = "30px";

    verticalLine.style.width = "2px";
    verticalLine.style.height = "40px";
    verticalLine.style.backgroundColor = "red";
    verticalLine.style.position = "absolute";
    verticalLine.style.top = "210px";
    verticalLine.style.left = "330px";

    horisontLine.style.width = "40px";
    horisontLine.style.height = "2px";
    horisontLine.style.backgroundColor = "red";
    horisontLine.style.position = "absolute";
    horisontLine.style.top = "230px";
    horisontLine.style.left = "310px";

    rocket1.style.width = "20px";
    rocket1.style.height = "100px";
    rocket1.style.backgroundColor = "blue";
    rocket1.style.position = "absolute";
    rocket1.style.top = "180px";
    rocket1.id = "rocket1";
    rocket1.style.left = "30px";
    rocket1.style.border = "none";

    rocket2.style.width = "20px";
    rocket2.style.height = "100px";
    rocket2.style.backgroundColor = "green";
    rocket2.style.position = "absolute";
    rocket2.style.top = "180px";
    rocket2.id = "rocket2";
    rocket2.style.left = "610px";
    rocket2.style.border = "none";

    ball.id = "ballId";
    ball.style.width = "20px";
    ball.style.height = "20px";
    ball.style.borderRadius = "50%";
    ball.style.backgroundColor = "rebeccapurple";
    ball.style.position = "absolute";
    ball.style.top = "220px";
    ball.style.left = "320px";

    document.body.appendChild(startButton);
    document.body.appendChild(scoreTable);
    document.body.appendChild(field);
    document.body.appendChild(verticalLine);
    document.body.appendChild(horisontLine);
    document.body.appendChild(rocket1);
    document.body.appendChild(rocket2);
    document.body.appendChild(ball);

    window.addEventListener("keydown", pushed);
    window.addEventListener("keyup", unpushed);
};


let ballH = {
    posX: 320,
    posY: 220,
    speedX: 2,
    speedY: Math.random() * (6 - 1) + 1,
    width: 20,
    height: 20,

    update: function () {
        ball.style.left = this.posX + "px";
        ball.style.top = this.posY + "px";
    }
};
let work;

function start() {
    if (work) {
        clearInterval(work);
        work = 0;
    }
    work = setInterval(tick, 40);
}

function tick() {

    ballH.posX += ballH.speedX;
    // вылетел ли мяч правее стены?
    let rocket3 = document.getElementById("rocket2");
    let rocket4 = getComputedStyle(rocket3);
    let rocket5 = document.getElementById("rocket1");
    let rocket6 = getComputedStyle(rocket5);
    if (ballH.posY > (parseInt(rocket4.top) - 20) && ballH.posY < (parseInt(rocket4.top) + parseInt(rocket4.height) + 20) && ballH.posX > 590) {
        ballH.speedX = -(ballH.speedX + 1);
    }
    if (ballH.posX > 609) {
        clearInterval(work);
        ballH.speedX = 0;
        ballH.speedY = 0;
        let score = document.getElementById("score");
        let array = score.value.split(":");
        array[0] = parseInt(array[0]) + 1;
        score.value = array.join(":");
        work = 0;
        setTimeout(function () {
            ballH.posX = 320;
            ballH.posY = 220;
            ballH.speedX = 2;
            ballH.speedY = 1;
        }, 1000)
    }
    if (ballH.posY > (parseInt(rocket6.top) - 20) && ballH.posY < (parseInt(rocket6.top) + parseInt(rocket6.height) + 20) && ballH.posX < 50) {
        ballH.speedX = -(ballH.speedX - 1);
    }
    // вылетел ли мяч левее стены?
    if (ballH.posX < 31) {
        clearInterval(work);
        ballH.speedX = 0;
        ballH.speedY = 0;
        let score = document.getElementById("score");
        let array = score.value.split(":");
        array[1] = parseInt(array[1]) + 1;
        score.value = array.join(":");
        work = 0;
        setTimeout(function () {
            ballH.posX = 320;
            ballH.posY = 220;
            ballH.speedX = 2;
            ballH.speedY = 1;
        }, 1000)
    }

    ballH.posY += ballH.speedY;
    // вылетел ли мяч ниже пола?
    if (ballH.posY > 410) {
        ballH.speedY = -ballH.speedY;
    }
    // вылетел ли мяч выше потолка?
    if (ballH.posY < 30) {
        ballH.speedY = -ballH.speedY;
    }
    ballH.update();
}

startButton.addEventListener('click', start);

function pushed(event) {
    switch (event.keyCode) {
        case 16:
            if (!timerRoket1) {
                timerRoket1 = setInterval(moveLeftRocketUp, repeate);
            }
            break;
        case 17:
            if (!timerRoket1) {
                timerRoket1 = setInterval(moveLeftRocketDown, repeate);
            }
            break;
        case 38:
            if (!timerRoket2) {
                timerRoket2 = setInterval(moveRightRocketUp, repeate);
            }
            break;
        case 40:
            if (!timerRoket2) {
                timerRoket2 = setInterval(moveRightRocketDown, repeate);
            }
            break;
    }
}

function unpushed(event) {
    switch (event.keyCode) {
        case 16:
            clearInterval(timerRoket1);
            timerRoket1 = 0;
            break;
        case 17:
            clearInterval(timerRoket1);
            timerRoket1 = 0;
            break;
        case 38:
            clearInterval(timerRoket2);
            timerRoket2 = 0;
            break;
        case 40:
            clearInterval(timerRoket2);
            timerRoket2 = 0;
            break;
    }
}

//перемещение ракеток----------------------------------------------------
function moveLeftRocketUp() {
    moveRocket(rocket1, -speed);
}

function moveLeftRocketDown() {
    moveRocket(rocket1, speed);
}

function moveRightRocketUp() {
    moveRocket(rocket2, -speed);
}

function moveRightRocketDown() {
    moveRocket(rocket2, speed);
}

function moveRocket(rocket, move) {
    let coor = parseInt(rocket.style.top) + move; //следующее приращение
    if (coor >= 30 && coor<=330) {
        rocket.style.top = coor + "px";
    }
}