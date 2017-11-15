let array = [];
let count;
do {
    count = prompt("Введите длину массива");
} while (count.search(/[^0-9]/) !== -1 || count <= 0);
for (let i = 0; i < count; i++) {
    array [i] = Math.floor(Math.random() * (10)) + 1;
}
console.log(array.toString());
let odd = Math.floor(array.length / 2);
for (i = 0; i < Math.floor(array.length / 4); i++) {
    let firstHalf = array[i];
    array[i] = array[odd - 1 - i];
    array[odd - 1 - i] = firstHalf;
    let secondHalf = array[odd + array.length % 2 + i];
    array[odd + array.length % 2 + i] = array[array.length - i - 1];
    array[array.length - i - 1] = secondHalf;
}
console.log(array.toString());