let body=document.body;
let input=document.createElement("input");
input.id="key";
input.style.width="200px";
body.appendChild(input);
let br=document.createElement("br");
body.appendChild(br);
let checkBox=document.createElement("input");
checkBox.type="checkbox";
checkBox.id="checkbox";
body.appendChild(checkBox);
let useRegistr=document.createElement("label");
useRegistr.for="checkbox";
useRegistr.innerHTML="Use register";
body.appendChild(useRegistr);
let br1=document.createElement("br");
body.appendChild(br1);
let button1=document.createElement("button");
button1.innerHTML="Words length filter";
button1.style.marginBottom="10px";
button1.style.marginTop="10px";
button1.onclick=function () {
    $.get("http://www.mrsoft.by/data.json", function(data){
        let key=document.getElementById("key");
        let result=document.getElementById("result");
        result.innerHTML=searchNumber(key.value,data.data);
});
};
body.appendChild(button1);
let button2=document.createElement("button");
button2.innerHTML="Words substring button";
button2.onclick=function () {
    let key=document.getElementById("key");
    let result=document.getElementById("result");
    result.innerHTML=serchSub(key.value);
}
let br2=document.createElement("br");
body.appendChild(br2);
body.appendChild(button2);
button2.onclick="wordSubstringFilter()";
let br3=document.createElement("br");
body.appendChild(br3);
let result=document.createElement("div");
result.id="result";
body.appendChild(result);
function  searchNumber(key,data) {
    let s=[];
    for(let i=0; i<data.length;i++){
        if(data[i].length>=key){
            s.push(data[i]);
        }
    }
    return s.join("<br>");
}
function serchSub(key) {
    let s=[];
    let checkbox=document.getElementById("checkbox");
    if(checkbox){
        for(let i=0; i<data.length;i++){
            if(data[i].indexOf(key)>-1){
                s.push(data[i]);
            }
        }
    }
}

// $.get("http://www.mrsoft.by/data.json", function(data){
//     result1=data.data;
//     console.log(data.data.length);
// });