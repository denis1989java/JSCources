var name;
do{
    name = prompt("Введите ваше имя");

}while (name.search(/[^A-zА-яёЁ\\-]/) !== -1 || name==="");
var surname;
do{
    surname = prompt("Введите вашу фамилию");
}while (surname.search(/[^A-zА-яёЁ\\-]/) !== -1 || surname==="");
var secondName;
do{
    secondName= prompt("Введите ваше отчество");
}while (secondName.search(/[^A-zА-яёЁ\\-]/) !== -1 || secondName==="");
var age;
do{
    age = prompt("Какой у вас возраст");
}while (age.search(/[^0-9]/)!==-1 || age<=0);
var sex = confirm("Ваш пол мужской?");
var stringSex;
var stringPension;
if (sex === true) {
    stringSex = "Ваш пол: мужской";
} else {
    stringSex = "Ваш пол: женский";
}
if (age >= 60) {
    stringPension = "Вы на пенсии: да";
} else {
    stringPension = "Вы на пенсии: нет";
}
document.body.innerHTML='<p>Ваше ФИО: ' + surname + ' ' + name + ' ' + secondName +'</p>'+
    '<p>Ваш возраст в годах: ' + age+ '</p>'+
    '<p>Ваш возраст в днях: ' + (age * 365)+'</p>'+
    '<p>Через 5 лет вам будет: '+(parseInt(age)+5)+'</p>'+
    '<p>'+stringSex+'</p>'+
    '<p>'+stringPension+'</p>';