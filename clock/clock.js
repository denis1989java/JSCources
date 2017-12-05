let top1=-300;
let left1=-94;
for(let i=0;i<12;i++){
    let img=document.createElement("img");
    let top;
    let left;
     if(i<4){
        top1=top1+64;
        left1=left1+65;
         top=top1;
         left=left1;
        if(i===1 || i===2){
            top=top1-30;
            left=left1+30;
        }
    }
    if(i>3 && i<7){
         left1=left1-63;
         top1=top1+64;
        top=top1;
        left=left1;
        if(i===4 || i===5){
            top=top1+30;
            left=left1+30;
        }
    }
    if(i>6 && i<10){
        left1=left1-63;
        top1=top1-62;
        top=top1;
        left=left1;
        if(i===7 || i===8){
            top=top1+30;
            left=left1-30;
        }
    }
    if(i>9 && i<12){
        left1=left1+57;
        top1=top1-67;
        top=top1;
        left=left1;
        if(i===10 || i===11){
            top=top1-30;
            left=left1-30;
        }
    }
    img.src="2.jpg";
    img.style.width="70px";
    img.style.height="70px";
    img.style.position="absolute";
    img.style.top="50%";
    img.style.left="50%";
    img.style.marginTop=top+"px";
    img.style.marginLeft=left+"px";
    document.body.appendChild(img);
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
        $('#secundi').css({'-moz-transform' : srotate, '-webkit-transform' : srotate, '-o-transform' : srotate});
        let hdegree = hours * 30 + (minutes / 2);
        let hrotate = 'rotate(' + hdegree + 'deg)';
        $('#hours').css({'-moz-transform' : hrotate, '-webkit-transform' : hrotate, '-o-transform' : hrotate});
        var mdegree = minutes * 6;
        var mrotate = 'rotate(' + mdegree + 'deg)';
        $('#min').css({'-moz-transform' : mrotate, '-webkit-transform' : mrotate, '-o-transform' : mrotate});
    },1000);
});