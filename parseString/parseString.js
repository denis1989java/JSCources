function parseString(string1) {
    let string=prompt('введите строку');
    let array=string1.split(/[^А-яёЁ]+/).join('').split('');
    let map={};
    for (let i=0;i<array.length;i++){
        if(array[i] in map){
            map[array[i]]=map[array[i]]+1;
        }else{
            map[array[i]]=1;
        }
    }
}
