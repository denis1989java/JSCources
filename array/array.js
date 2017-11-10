let array = [];
let count;
do{
    count = prompt("Введите длину массива");
}while (count.search(/[^0-9]/)!==-1 || count<=0);
for (let i = 0; i<count; i++){
    array [i]=Math.floor(Math.random()*(10))+1;
}
console.log(array.toString());
for (i = 0; i<Math.floor(array.length/2); i++){
    let firstHalf=array[i];
    if(array.length%2===1){
        array[i]=array[Math.floor(array.length/2)+1+i];
        array[Math.floor(array.length/2)+1+i]=firstHalf;
    }else{
        array[i]=array[Math.floor(array.length/2)+i];
        array[Math.floor(array.length/2)+i]=firstHalf;
    }
}
console.log(array.toString());