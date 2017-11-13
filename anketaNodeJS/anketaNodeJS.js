'use strict';
var readline = require('readline');

const anketa = {
    surname: '',
    name: '',
    secondName: '',
    sex: '',
    pension:'',
    age: 0
};

function getSurname() {
    const rl = prompt();
    rl.question('Введите вашу фамилию: ', (answer) => {
        rl.close();
        if (answer.search(/[^A-zА-яёЁ\\-]/) !== -1 || !answer) {
            console.log('фамилию ввели не так!');
            getSurname();
        } else {
            anketa.surname=answer;
            return getName();
        }
    });
}
function getName() {
    const rl = prompt();
    rl.question('Введите ваше имя: ', (answer) => {
        rl.close();
        if (answer.search(/[^A-zА-яёЁ\\-]/) !== -1 || !answer) {
            console.log('имя ввели не так!');
            getName();
        } else {
            anketa.name=answer;
            return getSecondName();
        }
    });
}
function getSecondName() {
    const rl = prompt();
    rl.question('Введите ваше отчество: ', (answer) => {
        rl.close();
        if (answer.search(/[^A-zА-яёЁ\\-]/) !== -1 || !answer) {
            console.log('отчество ввели не так!');
            getSecondName();
        } else {
            anketa.secondName=answer;
            return getAge();
        }
    });
}

function getAge() {
    const rl = prompt();
    rl.question('Введите ваш возраст: ', (answer) => {
        rl.close();
        if (answer.search(/[^0-9]/) !== -1 || answer <= 0 || !answer) {
            console.log('возраст ввели не так!');
            getAge();
        } else {
            anketa.age=answer;
            if(answer>60){
                anketa.pension='Вы на пенсии: да';
            }else{
                anketa.pension='Вы на пенсии: нет';
            }
            return getSex();
        }
    });
}

function getSex() {
    const rl = prompt();
    rl.question('Ваш пол мужской? (введите да или нет): ', (answer) => {
        rl.close();
        switch (answer){
           case 'да':
               anketa.sex='мужской';
               printAnketa();
               break;
           case 'нет':
               anketa.sex='женский';
               printAnketa();
               break;
           default:
               console.log('ответили не правильно!');
               getSex();
               break;
       }
    });
}

function printAnketa() {
console.log(`Ваше ФИО: ${anketa.surname} ${anketa.name} ${anketa.secondName}
Ваш возраст в годах: ${anketa.age}
Ваш возраст в днях: ${anketa.age*365}
Через 5 лет вам будет: ${Number(anketa.age)+5}
Ваш пол: ${anketa.sex}
${anketa.pension}`);
}

function prompt() {
    return readline.createInterface({ input: process.stdin,  output: process.stdout});
}
getSurname();