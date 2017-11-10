let array = [];
let count;
do{
    count = prompt("Введите длину массива");
}while (count.search(/[^0-9]/)!==-1 || count<=0);
for (let i = 0; i<count; i++){
    array [i]=Math.floor(Math.random()*(10))+1;
}
console.log(array.toString());
for (i = 0; i<Math.floor(array.length/4); i++){
    let firstHalf=array[i];
    if(array.length%2===1){
        array[i]=array[Math.floor(array.length/2)-1-i];
        array[Math.floor(array.length/2)-1-i]=firstHalf;
        let secondHalf=array[Math.floor(array.length/2)+1+i];
        array[Math.floor(array.length/2)+1+i]=array[array.length-i-1];
        array[array.length-i-1]=secondHalf;
    }else{
        array[i]=array[Math.floor(array.length/2)-i-1];
        array[Math.floor(array.length/2)-i-1]=firstHalf;
        let secondHalf=array[Math.floor(array.length/2)+i];
        array[Math.floor(array.length/2)+i]=array[array.length-i-1];
        array[array.length-i-1]=secondHalf;
    }
}
console.log(array.toString());