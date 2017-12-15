var d=document.getElementById("big");
var r=getComputedStyle(d);
var width = r.width;
var height = r.height;
var centerX =parseInt(r.left)  + (parseInt( width)/ 2);
var centerY =parseInt(r.top)  + (parseInt(height)  / 2);
var rad = function toRadians(angle) {
    return angle * (Math.PI / 180);
};

let svg = document.getElementById("svg");

for (let i = 0; i < 12; i++) {
    let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("id","circle");
    circle.setAttribute("r", "30");
    circle.setAttribute("fill", "yellow");
    circle.setAttribute("cx",  centerX + ((parseInt(r.width) / 2) - 40) * Math.cos(rad(30) * i - rad(60)));
    circle.setAttribute("cy", centerY + ((parseInt(r.width) / 2) - 40) * Math.sin(rad(30) * i - rad(60)) );
    svg.appendChild(circle);
    let text=document.createElementNS("http://www.w3.org/2000/svg","text");
    text.innerHTML=i+1;
    text.textAnchor="middle";
    text.id=i;
    svg.appendChild(text);
    text=document.getElementById(i);
    text.setAttribute("x",  centerX + ((parseInt(r.width) / 2) - 40) * Math.cos(rad(30) * i - rad(60))-5);
    text.setAttribute("y", centerY + ((parseInt(r.width) / 2) - 40) * Math.sin(rad(30) * i - rad(60))+5);
}
let sec=document.createElementNS("http://www.w3.org/2000/svg","line");
sec.setAttribute("x1",centerX);
sec.setAttribute("y1",centerY);
sec.setAttribute("x2",centerX);
sec.setAttribute("y2",centerY-200+"");
sec.setAttribute("stroke","red");
sec.setAttribute("stroke-width",2);
sec.id="secundi";
svg.appendChild(sec);
let min=document.createElementNS("http://www.w3.org/2000/svg","line");
min.setAttribute("x1",centerX);
min.setAttribute("y1",centerY);
min.setAttribute("x2",centerX);
min.setAttribute("y2",centerY-170+"");
min.setAttribute("stroke","green");
min.setAttribute("stroke-width",6);
min.id="min";
svg.appendChild(min);
let hour=document.createElementNS("http://www.w3.org/2000/svg","line");
hour.setAttribute("x1",centerX);
hour.setAttribute("y1",centerY);
hour.setAttribute("x2",centerX);
hour.setAttribute("y2",centerY-120+"");
hour.setAttribute("stroke","orange");
hour.setAttribute("stroke-width",12);
hour.id="hours";
svg.appendChild(hour);
let time=document.createElementNS("http://www.w3.org/2000/svg","text");
time.textAnchor="middle";
time.id="span";
time.setAttribute("x",centerX-60+"");
time.setAttribute("y",centerY-50+"");
time.setAttribute("font-size","40");
svg.appendChild(time);

$(document).ready(function($) {
    setInterval(function () {
        let currTime=new Date();
        let hours = currTime.getHours();
        let minutes = currTime.getMinutes();
        let seconds = currTime.getSeconds();
        let time=hours.toString()+":"+minutes.toString()+":"+seconds.toString();
        let span=document.getElementById("span");
        span.innerHTML=time;
        let sdegree = seconds * 6;
        let sec=document.getElementById("secundi");
        sec.setAttribute("transform","rotate("+sdegree+" "+"250 250)");
        let hdegree = hours * 30 + (minutes / 2);
        let ho=document.getElementById("hours");
        ho.setAttribute("transform","rotate("+hdegree+" "+"250 250)");
        let mdegree = minutes * 6;
        let min=document.getElementById("min");
        min.setAttribute("transform","rotate("+mdegree+" "+"250 250)");
    },1000);
});
