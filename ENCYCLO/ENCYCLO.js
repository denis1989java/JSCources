$(window).on('hashchange', routePage).trigger('hashchange');

function routePage() {
    console.log("COME");
    let pageName = (window.location.hash) ? window.location.hash : "#page1";
    $('.pages').hide();// Hide all pages
    if(pageName==="#page2"){
        $.get("contents.json", function(data){
            create(pageName,data["contents"]);
        });
    }
    console.log(decodeURI(pageName));
    console.log(pageName.indexOf("#page3"));
    if(pageName.indexOf("#page3")>=0){
        let textName=decodeURI(pageName).substr(6,decodeURI(pageName).length);
        pageName="#page3";
        $.get("contents.json", function(data){
            create1(pageName,data,textName);
        });
    }

    $(pageName).show();// Show the current page
}

function create(pageName,data) {
    let letter=data[0][0];
    let p=document.createElement("p");
    p.innerHTML=letter.toUpperCase();
    $(pageName).append(p);
    console.log(letter);
    for(let i=0;i<data.length;i++){
        if(letter!==data[i][0]){
            letter=data[i][0];
            p=document.createElement("p");
            p.innerHTML=letter.toUpperCase();
            let a=document.createElement("a");
            a.innerHTML=data[i];
            a.href="#page3"+encodeURI(data[i]) ;
            $(pageName).append(p);
            $(pageName).append(a);
            let br=document.createElement("br");
            $(pageName).append(br);
        }else{
            let a=document.createElement("a");
            a.innerHTML=data[i];
            a.href="#page3"+encodeURI(data[i]) ;
            $(pageName).append(a);
            let br=document.createElement("br");
            $(pageName).append(br);
        }
    }
}
function create1(pageName,data,textName) {
    let div1=document.getElementById("contents");
    let str="";
    for(let i=0;i<data["contents"].length;i++){
        str=str+'<a '+ 'href=\"'+pageName+data["contents"][i]+'\">'+data["contents"][i]+'</a><br>';
    }
    div1.innerHTML=str;
   testLoadData(textName);
}

function testLoadData(textName) {
    let url=textName+'.html';
    $.ajax(url,
        { type:'GET', dataType:'html', success:dataLoaded, error:errorHandler }
    );
}

function dataLoaded(data) {
    console.log('загруженные через AJAX данные:');
    console.log(data);
    let div2=document.getElementById("text");
   div2.innerHTML=data;
}

function errorHandler(jqXHR,statusStr,errorStr) {
    alert(statusStr+' '+errorStr);
}