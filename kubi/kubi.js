var grab = null;
var xy = {};
var zI=5;


function onMouseDoun(e,div) {
    console.log("down");
    grab = e.target;
    let s = getComputedStyle(grab);
    xy.top = s.top;
    xy.left = s.left;
    xy.mtop = e.clientY;
    xy.mleft = e.clientX;
    zI++;
    div.style.zIndex=zI;
}
function onMouseUp(e) {
    console.log("up");
    grab = null;
    xy = {};
}
function onMouseMove(e,div) {
    if (grab) {
        grab.style.top = parseInt(xy.top) + (e.clientY - xy.mtop) + 'px';
        grab.style.left =  parseInt(xy.left) + (e.clientX - xy.mleft) + 'px';
    }
    div.innerHTML = `x:${e.screenX}; y:${e.screenY}`;

}
function onMouseOut(div) {
    grab = null;
    xy = {};
    div.innerHTML = ``;
}
