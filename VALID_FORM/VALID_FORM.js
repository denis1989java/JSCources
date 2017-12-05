var returnValue=true;
let errorMessageDevelopers = document.getElementById("errorMessageDevelopers");
function errorDevelopers(e) {
    if (e.value==='') {
        errorMessageDevelopers.innerHTML = "ничего не ввели";
        e.style.borderColor = "red";
        returnValue=false;
    }else if (e.value.search(/[A-zА-яёЁ\\-]/) === -1) {
        errorMessageDevelopers.innerHTML = "имена не могут содержать цифры";
        e.style.borderColor = "red";
        returnValue=false;
    }else{
        errorMessageDevelopers.innerHTML = null;
        e.style.borderColor = "blue";
    }
}

let errorMessageName = document.getElementById("errorMessageName");
function errorName(e) {
    if (e.value==='') {
        errorMessageName.innerHTML = "ничего не ввели";
        e.style.borderColor = "red";
        returnValue=false;
    }else if (e.value.search(/[A-zА-яёЁ\\-]/) === -1) {
        errorMessageName.innerHTML = "названия сайта не могут содержать цифры";
        e.style.borderColor = "red";
        returnValue=false;
    }else{
        e.style.borderColor = "blue";
        errorMessageName.innerHTML = null;
    }
}

let errorMessageURL = document.getElementById("errorMessageURL");
function errorURL(e) {
    if (e.value==='') {
        errorMessageURL.innerHTML = "ничего не ввели";
        e.style.borderColor = "red";
        returnValue=false;
    }else if (e.value.search(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/) === -1) {
        errorMessageURL.innerHTML = "нет такого урла";
        e.style.borderColor = "red";
        returnValue=false;
    }else{
        e.style.borderColor = "blue";
        errorMessageURL.innerHTML = null;
    }
}
let errorMessageDate = document.getElementById("errorMessageDate");
function errorDate(e) {
    if (e.value==='') {
        errorMessageDate.innerHTML = "ничего не ввели";
        e.style.borderColor = "red";
        returnValue=false;
    }else if (e.value.search(/^((((0[13578])|([13578])|(1[02]))[\/](([1-9])|([0-2][0-9])|(3[01])))|(((0[469])|([469])|(11))[\/](([1-9])|([0-2][0-9])|(30)))|((2|02)[\/](([1-9])|([0-2][0-9]))))[\/]\d{4}$|^\d{4}$/) === -1) {
        errorMessageDate.innerHTML = "неправильно, должно быть MM/DD/YYYY";
        e.style.borderColor = "red";
        returnValue=false;
    }else{
        e.style.borderColor = "blue";
        errorMessageDate.innerHTML = null;
    }
}
let errorMessageVisitors = document.getElementById("errorMessageVisitors");
function errorVisitors(e) {
    if (e.value==='') {
        errorMessageVisitors.innerHTML = "ничего не ввели";
        e.style.borderColor = "red";
        returnValue=false;
    }else if (e.value.search(/[0-9]/) === -1) {
        errorMessageVisitors.innerHTML = "неправильное число";
        e.style.borderColor = "red";
        returnValue=false;
    }else{
        e.style.borderColor = "blue";
        errorMessageVisitors.innerHTML = null;
    }
}
let errorMessageEmail = document.getElementById("errorMessageEmail");
function errorEmail(e) {
    if (e.value==='') {
        errorMessageEmail.innerHTML = "ничего не ввели";
        e.style.borderColor = "red";
        returnValue=false;
    }else if (e.value.search(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/) === -1) {
        errorMessageEmail.innerHTML = "неправильный емэил";
        e.style.borderColor = "red";
        returnValue=false;
    }else{
        e.style.borderColor = "blue";
        errorMessageEmail.innerHTML = null;
    }
}
let errorMessagedescription = document.getElementById("errorMessagedescription");
function errorDescription (e) {
    if (e.value.length<100) {
        console.log("descr");
        errorMessagedescription.innerHTML = "слишком короткое описание";
        e.style.borderColor = "red";
        returnValue=false;
    }else{
        e.style.borderColor = "blue";
        errorMessagedescription.innerHTML = null;
    }
}
let errorMessageKind = document.getElementById("errorMessageKind");
function errorKind (e) {
    if (e.value==="здоровье") {
        errorMessageKind.innerHTML = "не нужно лечиться в интернете";
        e.style.borderColor = "red";
        returnValue=false;
    }else{
        e.style.borderColor = "blue";
        errorMessageKind.innerHTML = null;
    }
}
let errorMessagePlace = document.getElementById("errorMessagePlace");
function errorPlace () {
    let kind=document.getElementById("kind");
    let places=document.getElementsByName("place");
    console.log(places.length)
    for (let i=0;i<places.length;i++){
        if ( places[i].value==="VIP" && kind.value==="бытовая") {
            errorMessagePlace.innerHTML = "не бывает Вип бытовых";
            places[i].style.borderColor = "red";
            returnValue=false;
        }else{
                places[i].style.borderColor = "blue";
                errorMessagePlace.innerHTML = null;
        }
    }

}

let errorMessageFeed = document.getElementById("errorMessageFeed");
function errorFeed (e) {
    let kind=document.getElementById("kind");
    let feed=document.getElementById("feedBack");
    if (kind.value==="бытовая" && feed.checked) {
        errorMessageFeed.innerHTML = "не надо бытовой бесплатно";
        returnValue=false;
    }else{
        errorMessageFeed.innerHTML = null;
    }
}
function sub() {
    let developers = document.forms["myForm"]["developers"];
    let name = document.forms["myForm"]["name"];
    let url = document.forms["myForm"]["url"];
    let date = document.forms["myForm"]["date"];
    let visitors = document.forms["myForm"]["visitors"];
    let email = document.forms["myForm"]["email"];
    let kind = document.forms["myForm"]["kind"];
    let place = document.forms["myForm"]["place"];
    let feedBack = document.forms["myForm"]["feedBack"];
    let description = document.forms["myForm"]["description"];
    errorName(name);
    errorDevelopers(developers);
    errorDescription(description);
    errorFeed(feedBack);
    errorPlace();
    errorKind(kind);
    errorEmail(email);
    errorVisitors(visitors);
    errorDate(date);
    errorURL(url);
    return returnValue;
}