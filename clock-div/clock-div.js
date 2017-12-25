var d=document.getElementById("big");
var r=getComputedStyle(d);
var width = r.width;
var height = r.height;
var centerX =parseInt(r.left)  + (parseInt( width)/ 2);
var centerY =parseInt(r.top)  + (parseInt(height)  / 2);
var rad = function toRadians(angle) {
    return angle * (Math.PI / 180);
}
for (var i = 0; i < 12; i++) {
    let dig = document.createElement('div');
    let x, y;
    dig.className = 'small';
    dig.innerHTML = i + 1;
    document.body.appendChild(dig);
    let digSt = getComputedStyle(dig);
    x = centerX + ((parseInt(r.width) / 2) - 40) * Math.cos(rad(30) * i - rad(60)) - (parseInt(digSt.width) / 2);
    y = centerY + ((parseInt(r.width) / 2) - 40) * Math.sin(rad(30) * i - rad(60)) - (parseInt(digSt.width) / 2);
    dig.style.left = x + 'px';
    dig.style.top = y + 'px';
}
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
        let srotate = 'rotate(' + sdegree + 'deg)';
        $('#secundi').css({'-moz-transform' : srotate, '-webkit-transform' : srotate, '-o-transform' : srotate, 'transform-origin': '50% 100%'});
        let hdegree = hours * 30 + (minutes / 2);
        let hrotate = 'rotate(' + hdegree + 'deg)';
        $('#hours').css({'-moz-transform' : hrotate, '-webkit-transform' : hrotate, '-o-transform' : hrotate, 'transform-origin': '50% 100%'});
        let mdegree = minutes * 6;
        let mrotate = 'rotate(' + mdegree + 'deg)';
        $('#min').css({'-moz-transform' : mrotate, '-webkit-transform' : mrotate, '-o-transform' : mrotate, 'transform-origin': '50% 100%'});
    },1000);
});