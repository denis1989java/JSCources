var stroka="3 - 1 + 3 - 1 + 1";
var array=[];
var arrayStroka=stroka.split(' ');
var znak=null;
var chislo=0;
for (var i=0;i<arrayStroka.length;i++){
    if(arrayStroka[i].search(/[0-9]/) !== -1){
        array.push(arrayStroka[i]);
        chislo++;
    }else{
        znak=arrayStroka[i];
    }
    if (chislo>=2){
        array.push(znak);
        znak=null;
        chislo=1;
    }
}
console.log(array);
var result=[];
for (var i=0;i<array.length;i++){
    if(array[i].search(/[0-9]/) !== -1){
        result.push(array[i]);
    }
    if(array[i].search(/[\\+]/)!==-1){
        result[result.length-2]=parseInt(result[result.length-2])+parseInt(result[result.length-1]);
            result.pop();

    }
    if(array[i].search(/[\-]/)!==-1){
        result[result.length-2]=parseInt(result[result.length-2])-parseInt(result[result.length-1]);
        result.pop();
    }
}
console.log(result);