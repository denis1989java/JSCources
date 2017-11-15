let array = [];
let count;
do {
    count = prompt("Введите длину массива");
} while (count.search(/[^0-9]/) !== -1 || count <= 0);
for (let i = 0; i < count; i++) {
    array [i] = Math.floor(Math.random() * (10)) + 1;
}
console.log(array.toString());
odd = Math.floor(array.length / 2);
for (i = 0; i < odd; i++) {
    let firstHalf = array[i];
    array[i] = array[odd + array.length % 2 + i];
    array[odd + array.length % 2 + i] = firstHalf;

}
console.log(array.toString());