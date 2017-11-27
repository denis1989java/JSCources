function parseString(string) {
    return string.toLowerCase().split(/[^аеёиоуыэюя]+/).join('').split('').length;
}

function parseString1(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (pattern.test(string[i])) {
            count++;
        }
    }
    return count;
}

let string = prompt('введите строку');
let str = string.split('');
console.log(str);
let newArrayByForEach = [];
let pattern=new RegExp(/[аеёиоуыэюя]/);
str.forEach(function (v) {
    if (!v.search(/[аеёиоуыэюя]/)) {
        newArrayByForEach.push(v);
    }
});
let newArrayByFilter = str.filter(function (v) {
    return !v.search(/[аеёиоуыэюя]/);
});
let newStringByReduce=str.reduce(function FRA(R, V) {
    if(!pattern.test(R)){
        R='';
    }
    if(!pattern.test(V)){
        V='';
    }
    return R+V;
});
console.log(newStringByReduce.length);
console.log(newArrayByFilter.length);
console.log(newArrayByForEach.length);
console.log(parseString(string));
console.log(parseString1(string));