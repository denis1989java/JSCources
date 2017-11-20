function parseString() {
    let string=prompt('введите строку');
    let array=string.toLowerCase().split(/[^аеёиоуыэюя]+/).join('').split('');
    let map={};
    for (let i=0;i<array.length;i++){
        if(array[i] in map){
            map[array[i]]=map[array[i]]+1;
        }else{
            map[array[i]]=1;
        }
    }
    return map;
}
parseString();