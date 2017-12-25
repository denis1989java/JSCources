class TLocalStorage {
    constructor() {
        this.localStorage = localStorage;
    }

    addValue(key, value) {
        console.log(value);
        this.localStorage.setItem(key, JSON.stringify(value));
    }

    getValue(key) {
        return JSON.parse(this.localStorage.getItem(key)) ;
    }

    deleteValue(key) {
        delete this.localStorage.removeItem(key);
    }

    getKeys() {
        return Object.keys(this.localStorage);
    }
}

let drinkStorage = new TLocalStorage();

function addDrink() {
    console.log(localStorage.length);
    let drinkName;
    do {
        drinkName = prompt("Введите название напитка");
    } while (drinkName.length === 0);
    drinkName="dr_"+drinkName;
    let alco = confirm("Напиток алкогольный?");
    let color;
    do {
        color = prompt("Какого цвета напиток");
    } while (color.length === 0);
    let recept;
    do {
        recept = prompt("Какой рецепт");
    } while (recept.length === 0);
    let drink = {};
    if (alco) {
        drink['алкогольный'] = 'да';
    } else {
        drink['алкогольный'] = 'нет';
    }
    drink['цвет'] = color;
    drink['рецепт приготовления'] = recept;
    if (drinkStorage.getValue(drinkName)) {
        alert('напиток уже существует');
    } else {
        drinkStorage.addValue(drinkName, drink);
        alert('напиток добавлен успешно');
    }
    console.log(localStorage.length);
}

function getDrink() {
    console.log(localStorage.length);
    let drinkName;
    do {
        drinkName = prompt("Введите название напитка");
    } while (drinkName.length === 0);
    drinkName="dr_"+drinkName;
    if (drinkStorage.getValue(drinkName)) {
        alert(drinkName.replace("dr_","") + ': ' + '\n' + 'алкогольный: ' + drinkStorage.getValue(drinkName)['алкогольный'] + '\n' + 'цвет: ' + drinkStorage.getValue(drinkName)['цвет'] + '\n' + 'рецепт приготовления: ' + drinkStorage.getValue(drinkName)['рецепт приготовления']);
    } else {
        alert('напиток не существует');
    }
    console.log(localStorage.length);
}

function deleteDrink() {
    console.log(localStorage.length);
    let drinkName;
    do {
        drinkName = prompt("Введите название напитка");
    } while (drinkName.length === 0);
    drinkName="dr_"+drinkName;
    if (drinkStorage.getValue(drinkName)) {
        drinkStorage.deleteValue(drinkName);
        alert('напиток удален успешно');
    } else {
        alert('напиток не существует');
    }
}

function showDrinks() {
    let keys = drinkStorage.getKeys();
    if (keys.length === 0) {
        alert('напитков и блюд нет');
    } else {
        let s = '';
        for (let i = 0; i < keys.length; i++) {
            s = s + keys[i] + '\n';
        }
        alert(s);
    }
    console.log(localStorage.length);
}

let foodStorage = new TLocalStorage();

function addFood() {
    let foodName;
    do {
        foodName = prompt("Введите название блюда");
    } while (foodName.length === 0);
    foodName="fo_"+foodName;
    let meat = confirm("Блюдо мясное?");
    let color;
    do {
        color = prompt("Какого цвета блюдо");
    } while (color.length === 0);
    let recept;
    do {
        recept = prompt("Какой рецепт");
    } while (recept.length === 0);
    let food = {};
    if (meat) {
        food['мясное'] = 'да';
    } else {
        food['мясное'] = 'нет';
    }
    food['цвет'] = color;
    food['рецепт приготовления'] = recept;
    if (foodStorage.getValue(foodName)) {
        alert('блюдо уже существует');
    } else {
        foodStorage.addValue(foodName, food);
        alert('блюдо добавлено успешно');
    }
}

function getFood() {
    let foodName;
    do {
        foodName = prompt("Введите название блюда");
    } while (foodName.length === 0);
    foodName="fo_"+foodName;
    if (foodStorage.getValue(foodName)) {
        alert(foodName.replace("fo_","") + ': ' + '\n' + 'мясное: ' + foodStorage.getValue(foodName)['мясное'] + '\n' + 'цвет: ' + foodStorage.getValue(foodName)['цвет'] + '\n' + 'рецепт приготовления: ' + foodStorage.getValue(foodName)['рецепт приготовления']);
    } else {
        alert('блюдо не существует');
    }
}

function deleteFood() {
    let foodName;
    do {
        foodName = prompt("Введите название напитка");
    } while (foodName.length === 0);
    foodName="fo_"+foodName;
    if (foodStorage.getValue(foodName)) {
        foodStorage.deleteValue(foodName);
        alert('блюдо удалено успешно');
    } else {
        alert('блюдо не существует');
    }
}


