a1=[1,2,3];
a2=[1,2,3];
a3=[2,2,3];
a4=[2,2,"3"];
a5=[];
a6=[];
function areArrayEquals(a1, a2) {
    if (!a1 || !(a1 instanceof Array)) throw "Not Array entered";
    if (!a2 || !(a2 instanceof Array)) throw "Not Array entered";
    if (a1.length !==a2.length) return false;
    if ( a1.length===a2.length && a1.length===0) return false;
    for (var i=0;i<a1.length;i++){
        if(a1[i]!==a2[i]){
            return false;
        }
    }
    return true;
}

console.log(areArrayEquals(a1,a2));
console.log(areArrayEquals(a1,a3));
console.log(areArrayEquals(a4,a3));
console.log(areArrayEquals(a5,a6));
console.log(areArrayEquals(a5,null));