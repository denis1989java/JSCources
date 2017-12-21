"use strict";
let tennisTable=document.createElementNS("http://www.w3.org/2000/svg","svg");
let startButton = document.createElement("button");
let scoreTable = document.createElement("input");
let field = document.createElementNS("http://www.w3.org/2000/svg","rect");
let verticalLine = document.createElementNS("http://www.w3.org/2000/svg","line");
let horisontLine = document.createElementNS("http://www.w3.org/2000/svg","line");
let rocket1 = document.createElementNS("http://www.w3.org/2000/svg","rect");
let rocket2 = document.createElementNS("http://www.w3.org/2000/svg","rect");
let ball = document.createElementNS("http://www.w3.org/2000/svg","circle");
let timerRoket1 = 0;
let timerRoket2 = 0;
let speed = 5;
let repeate = 20;
let body = document.body;
body.onload = function () {

    tennisTable.setAttribute("width","630");
    tennisTable.setAttribute("height","430");

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

    field.setAttribute("x", "30");
    field.setAttribute("y", "30");
    field.setAttribute("width", "600");
    field.setAttribute("height", "400");
    field.setAttribute("fill", "yellow");
    field.id = "field";

    verticalLine.setAttribute("x1","330");
    verticalLine.setAttribute("y1","200");
    verticalLine.setAttribute("x2","330");
    verticalLine.setAttribute("y2","240");
    verticalLine.setAttribute("stroke","red");
    verticalLine.setAttribute("stroke-width","2");

    horisontLine.setAttribute("x1","310");
    horisontLine.setAttribute("y1","220");
    horisontLine.setAttribute("x2","350");
    horisontLine.setAttribute("y2","220");
    horisontLine.setAttribute("stroke","red");
    horisontLine.setAttribute("stroke-width","2");

    rocket1.setAttribute("x", "30");
    rocket1.setAttribute("y", "165");
    rocket1.setAttribute("width", "20");
    rocket1.setAttribute("height", "100");
    rocket1.setAttribute("fill", "blue");
    rocket1.id = "rocket1";

    rocket2.setAttribute("x", "610");
    rocket2.setAttribute("y", "165");
    rocket2.setAttribute("width", "20");
    rocket2.setAttribute("height", "100");
    rocket2.setAttribute("fill", "green");
    rocket2.id = "rocket2";

    ball.id = "ballId";
    ball.setAttribute("cx","330");
    ball.setAttribute("cy","220");
    ball.setAttribute("r","10");
    ball.setAttribute("fill","rebeccapurple");

    body.appendChild(tennisTable);
    body.appendChild(startButton);
    body.appendChild(scoreTable);
    tennisTable.appendChild(field);
    tennisTable.appendChild(verticalLine);
    tennisTable.appendChild(horisontLine);
    tennisTable.appendChild(rocket1);
    tennisTable.appendChild(rocket2);
    tennisTable.appendChild(ball);

    window.addEventListener("keydown", pushed);
    window.addEventListener("keyup", unpushed);
};


let ballH = {
    posX: 330,
    posY: 220,
    speedX: 2,
    speedY: Math.random() * (6 - 1) + 1,
    width: 20,
    height: 20,

    update: function () {
        ball.setAttribute("cx", this.posX);
        ball.setAttribute("cy", this.posY);
    }
};
let work;

function start() {
    if (work) {
        clearInterval(work);
        work = 0;
    }
    // плавное движение - от 25 кадр/сек
    work = setInterval(tick, 40);
}

function tick() {

    ballH.posX += ballH.speedX;
    // вылетел ли мяч правее стены?
    let rocket3 = document.getElementById("rocket2");
    let rocket4 = document.getElementById("rocket1");
    if (ballH.posY > (parseInt(rocket3.getAttribute("y"))-20) && ballH.posY < (parseInt(rocket3.getAttribute("y")) + parseInt(rocket3.getAttribute("height"))+20) && ballH.posX > 600) {
        ballH.speedX = -(ballH.speedX + 1);
    }
    if (ballH.posX > 620) {
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
    if (ballH.posY > (parseInt(rocket4.getAttribute("y"))-20) && ballH.posY < (parseInt(rocket4.getAttribute("y")) + parseInt(rocket4.getAttribute("height"))+20) && ballH.posX < 60) {
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
    if (ballH.posY > 420) {
        ballH.speedY = -ballH.speedY;
    }
    // вылетел ли мяч выше потолка?
    if (ballH.posY < 40) {
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
    let coord=parseInt(rocket.getAttribute("y"))+move;
    if (coord >= 30 && coord<=330) {
        rocket.setAttribute("y", (coord));
    }
}
