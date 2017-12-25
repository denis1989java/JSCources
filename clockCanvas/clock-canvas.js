let ocrugn = document.getElementById("CVA");
let context = ocrugn.getContext('2d');

function clock() {
    context.clearRect(0, 0, 500, 500);
    context.save();
    context.fillStyle = 'red';
    context.beginPath();
    context.arc(250, 250, 250, 0, Math.PI * 2, false);
    context.closePath();
    context.fill();
    context.restore();
    let rad = function toRadians(angle) {
        return angle * (Math.PI / 180);
    };

    for (let i = 0; i < 12; i++) {
        let coordX = 250 + (210 * Math.cos(rad(30) * i - rad(60)));
        let coordY = 250 + ( 210 * Math.sin(rad(30) * i - rad(60)));
        context.save();
        context.fillStyle = 'yellow';
        context.beginPath();
        context.arc(coordX, coordY, 30, 0, Math.PI * 2, false);
        context.closePath();
        context.fill();
        context.restore();

        context.save();
        context.fillStyle = 'black';
        context.font = 'normal 20px Arial';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        let cifra = (i + 1);
        context.fillText(cifra, coordX, coordY);
        context.restore();
    }
    let currTime = new Date();
    let hours = currTime.getHours();
    let minutes = currTime.getMinutes();
    console.log(minutes);
    let seconds = currTime.getSeconds();
    let time = hours.toString() + ":" + minutes.toString() + ":" + seconds.toString();

    context.save();
    context.fillStyle = 'black';
    context.font = 'normal 20px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(time, 250, 200);
    context.restore();

    context.save();
    context.strokeStyle = '#ff51cb';
    context.lineWidth = 2;
    context.translate(250,250);
    context.rotate(2 * Math.PI * seconds / 60);
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(0, -210);
    context.stroke();
    context.restore();

    context.save();
    context.strokeStyle = 'blue';
    context.lineWidth = 10;
    context.translate(250,250);
    context.rotate(2 * Math.PI * minutes/60);
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(0, -170);
    context.stroke();
    context.restore();

    context.save();
    context.strokeStyle = 'black';
    context.lineWidth = 20;
    context.translate(250,250);
    context.rotate(2 * Math.PI *hours/12);
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(0, -120);
    context.stroke();
    context.restore();
}

let init = function () {
    clock();
    setInterval(clock, 100);
};
init();
