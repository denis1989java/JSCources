let body = document.getElementById('body');
let s = '';
console.log(s+body.nodeName);
function printChilds(tag,s) {
    s=s+' ';
    let childs=tag.childNodes;
        for (let i=0;i<childs.length;i++){
            if(childs[i].nodeType==1)console.log(s+childs[i].nodeName);
            if (childs[i].hasChildNodes()){
                printChilds(childs[i],s+' ');
            }
        }
}
printChilds(body,s);