
function parseString(string) {
    return string.toLowerCase().split(/[^аеёиоуыэюя]+/).join('').split('').length;
}

function parseString1(string) {
    let count=0;
    for(let i=0;i<string.length;i++){
        if(string[i].search(/[аеёиоуыэюя]/)){
            count++;
        }
    }
    return string.toLowerCase().split(/[^аеёиоуыэюя]+/).join('').split('').length;
}
let string=prompt('введите строку');
console.log(parseString(string));
console.log(parseString1(string));