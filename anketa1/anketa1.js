var surname = () => getWord("фамилию");
var names = () => getWord("имя");
var secondName = () => getWord("отчество");
var age = () => {
    var age;
    do {
        age = prompt("Какой у вас возраст");
    } while (age.search(/[^0-9]/) !== -1 || age <= 0);
    return age;
};

var stringSex = () => {
    sex = confirm("Ваш пол мужской?");
    if (sex) {
        return "Ваш пол: мужской";
    } else {
        return "Ваш пол: женский";
    }
};
var stringPension = (age) => {
    if (parseInt(age) >= 60) {
        return "Вы на пенсии: да";
    } else {
        return "Вы на пенсии: нет";
    }
};

function getWord(name) {
    var word;
    do {
        word = prompt("Введите ваше " + name);
    } while (word.search(/[^A-zА-яёЁ\\-]/) !== -1 || word === "");
     return word;
}
var ageNumber;
document.body.innerHTML='<p>Ваше ФИО: ' + surname() + ' ' + names() + ' ' + secondName() +'</p>'+
    '<p>Ваш возраст в годах: ' + (ageNumber=age())+ '</p>'+
    '<p>Ваш возраст в днях: ' + (ageNumber * 365)+'</p>'+
    '<p>Через 5 лет вам будет: '+(parseInt(ageNumber)+5)+'</p>'+
    '<p>'+stringSex()+'</p>'+
    '<p>'+stringPension(ageNumber)+'</p>';
