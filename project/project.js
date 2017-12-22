let simpleLine = {
    d: [],
    stroke: "white",
    fill: "none"
};
var mouseDownTriggered = false;
let i = 1;

function createLine(e) {
    simpleLine.d = [];
    let line = document.createElementNS("http://www.w3.org/2000/svg", "path");
    line.id = i + "";
    simpleLine.d.push("M " + e.clientX + " " + e.clientY);
    line.setAttribute("d", simpleLine.d.join(" "));
    line.setAttribute("stroke", simpleLine.stroke);
    line.setAttribute("fill", simpleLine.fill);
    e.target.appendChild(line);
    mouseDownTriggered = true;
}

function drawLine(e) {
    if (mouseDownTriggered) {
        console.log(Math.floor(Math.random() * (1 + 1)) - 1);
        simpleLine.d.push("L");
        let line1 = document.getElementById(i);
        simpleLine.d.push(e.clientX + " " + e.clientY);
        line1.setAttribute("d", simpleLine.d.join(" "));
    }
}

function finishDraw() {
    mouseDownTriggered = false;
    i++;
}

// function cutLine(i) {
//     let line2=document.getElementById(i);
//     let array=line2.getAttribute('d').split(" ");
//     for (let i=0;i<3;i++){
//         array.shift();
//     }
//     array[0]="M";
//     line2.setAttribute("d",array.join(" "));
// }
function addPlane() {
    let plane = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    plane.setAttribute("r", "10");
    plane.id = "plane";
    plane.setAttribute("fill", "red");
    plane.setAttribute("cx", "100");
    plane.setAttribute('cy', "200");
    document.getElementById("svg").appendChild(plane);
}

addPlane();
setInterval(drive, 50);

function drive() {
    let plane = document.getElementById("plane");
    let x = parseInt(plane.getAttribute("cx"));
    let y = parseInt(plane.getAttribute("cy"));
    x += Math.floor(Math.random() * (1 + 1)) - 1;
    y += Math.floor(Math.random() * (1 + 1)) - 1;
    plane.setAttribute("cx", x);
    plane.setAttribute('cy', y);

}