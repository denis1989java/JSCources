class HashStorage {
    constructor() {
        this.drink = {};
    }

    addValue(key, value) {
        this.drink[key] = value;
    }

    getValue(key) {
        return this.drink[key];
    }

    deleteValue(key) {
        delete this.drink[key];
    }

    getKeys() {
        return Object.keys(this.drink);
    }
}

let drinkStorage = new HashStorage();

function addDrink() {
    let drinkName;
    do{
        drinkName = prompt("Введите название напитка");
    }while (drinkName.length===0);
    let alco = confirm("Напиток алкогольный?");
    let color;
    do{
        color = prompt("Какого цвета напиток");
    }while (color.length===0);
    let recept;
    do{
        recept = prompt("Какой рецепт");
    }while (recept.length===0);
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
}

function getDrink() {
    let drinkName;
    do{
        drinkName = prompt("Введите название напитка");
    }while (drinkName.length===0);
    if (drinkStorage.getValue(drinkName)) {
        alert(drinkName + ': ' + '\n' + 'алкогольный: ' + drinkStorage.getValue(drinkName)['алкогольный'] + '\n' + 'цвет: ' + drinkStorage.getValue(drinkName)['цвет'] + '\n' + 'рецепт приготовления: ' + drinkStorage.getValue(drinkName)['рецепт приготовления']);
    } else {
        alert('напиток не существует');
    }
}

function deleteDrink() {
    let drinkName;
    do{
        drinkName = prompt("Введите название напитка");
    }while (drinkName.length===0);
    if (drinkStorage.getValue(drinkName)) {
        drinkStorage.deleteValue(drinkName);
        alert('напиток удален успешно');
    } else {
        alert('напиток не существует');
    }
}
function showDrinks() {
    let keys=drinkStorage.getKeys();
    if (keys.length===0){
        alert('напитков нет');
    }else{
        let s='';
        for (let i=0;i<keys.length;i++){
           s=s+keys[i]+'\n';
        }
        alert(s);
    }
}
